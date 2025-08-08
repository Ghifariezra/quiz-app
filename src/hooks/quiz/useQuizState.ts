import { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import type { AnswerType } from '@/types/quiz';

export const useQuizState = ({ data }: { data: Record<string, string>[] }) => {
    const navigate = useNavigate();
    const questionContainerRef = useRef<HTMLDivElement>(null);

    // State untuk index dan jawaban
    const [index, setIndex] = useState(() => {
        const savedIndex = localStorage.getItem('quiz_index');
        return savedIndex ? parseInt(savedIndex, 10) : 0;
    });

    const totalQuestions = data?.length ?? 0;
    const progress = useMemo(() => {
        return totalQuestions > 0 ? ((index + 1) / totalQuestions) * 100 : 0;
    }, [index, totalQuestions]);

    const [answers, setAnswers] = useState<AnswerType[]>(() => {
        const savedAnswers = localStorage.getItem('quiz_answers');
        return savedAnswers ? JSON.parse(savedAnswers) : [];
    });

    // Effect untuk menyimpan state ke localStorage
    useEffect(() => {
        localStorage.setItem('quiz_index', index.toString());
        localStorage.setItem('quiz_answers', JSON.stringify(answers));
    }, [index, answers]);

    // Fungsi untuk memilih jawaban
    const handleSelectAnswer = useCallback(
        (option: string, type: string) => {
            setAnswers((prev) => {
                const updated = [...prev];
                updated[index] = { typeAnswer: type, answer: option };
                return updated;
            });
        },
        [index]
    );

    // Fungsi untuk pindah ke pertanyaan berikutnya
    const handleNext = useCallback(() => {
        if (!data) return;
        if (index < data.length - 1) {
            setIndex((prev) => prev + 1);
        }
    }, [index, data]);

    // Fungsi untuk kembali ke pertanyaan sebelumnya
    const handleBack = useCallback(() => {
        if (index > 0) {
            setIndex((prev) => prev - 1);
        }
        // Bug fix when Double click Back button
        return;
    }, [index]);

    // Fungsi untuk menyelesaikan kuis
    const handleFinish = useCallback(() => {
        if (!data) return;
        const total_answers = JSON.parse(localStorage.getItem('quiz_answers') as string);
        const correct_answers = total_answers.filter((answer: AnswerType, i: number) =>{
            // Memeriksa apakah jawaban yang dipilih sesuai dengan jawaban yang benar
            return data[i]?.correct_answer.includes(answer?.typeAnswer)
        }).length;
        const total_score = data.length > 0 ? (correct_answers / data.length) * 100 : 0;

        navigate('/quiz/finish', { replace: true });

        localStorage.setItem('quiz_finished', 'true');
        localStorage.setItem('quiz_correct_answers', total_score.toString());
    }, [navigate, data]);

        // Fungsi untuk scroll ke atas setelah pindah pertanyaan
        const handleNextWithScroll = useCallback(() => {
            handleNext();
            if (questionContainerRef.current) {
                questionContainerRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        }, [handleNext]);
    
        const handleBackWithScroll = useCallback(() => {
            handleBack();
            if (questionContainerRef.current) {
                questionContainerRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        }, [handleBack]);

    return {
        index,
        answers,
        handleSelectAnswer,
        handleFinish,
        handleNextWithScroll,
        handleBackWithScroll,
        questionContainerRef,
        totalQuestions,
        progress
    };
};