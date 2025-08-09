import { useCallback, useRef } from "react"
import { useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas-pro';

export const useFinishState = () => {
    const score = localStorage.getItem('quiz_correct_answers');

    const navigate = useNavigate();
    const captureRef = useRef<HTMLDivElement>(null);

    const resetQuizProgress = useCallback(() => {
        localStorage.removeItem('quiz_index');
        localStorage.removeItem('quiz_answers');
        localStorage.removeItem('quiz_end_time');
        localStorage.removeItem('quiz_finished');
        localStorage.removeItem('quiz_correct_answers');
    }, []);

    const handleHome = useCallback(() => {
        resetQuizProgress();
        navigate('/');
    }, [navigate, resetQuizProgress]);

    const handleTryAgain = useCallback(() => {
            resetQuizProgress();
            navigate('/start-quiz');
        }, [navigate, resetQuizProgress]);

    const handleDownloadImage = useCallback(async () => {
        if (!captureRef.current) return;
        const canvas = await html2canvas(captureRef.current, {
            backgroundColor: "#0f172a", // biar transparan kalau dark mode
            scale: 2, // kualitas tinggi
        });
        const imgData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = imgData;
        link.download = `hasil-kuis-${new Date().toISOString()}.png`;
        link.click();
    }, []);

    return { 
        score,
        handleHome,
        handleTryAgain,
        handleDownloadImage,
        captureRef,
        resetQuizProgress
     };
}