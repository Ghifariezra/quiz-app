import { HomeLayout } from '@/components/layouts/home';
import { motion } from 'motion/react';
import { memo, useState, useCallback, useEffect, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import QuizData from '@/services/quiz-data';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import SimpleCountdown from '@/components/common/finisih/simpleCountdown';
import Loading from '@/components/shared/loading';
import { AlarmClock } from 'lucide-react';
import type { AnswerType } from '@/types/quiz';

function QuizContents() {
	const { fetchData } = QuizData;
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const [index, setIndex] = useState(() => {
		// Load the index from localStorage
		const savedIndex = localStorage.getItem('quiz_index');
		return savedIndex ? parseInt(savedIndex, 10) : 0;
	});

	const { category, difficulty } = Object.fromEntries(searchParams);
	const [answers, setAnswers] = useState<AnswerType[]>(() => {
		// Load the answers from localStorage
		const savedAnswers = localStorage.getItem('quiz_answers');
		return savedAnswers ? JSON.parse(savedAnswers) : [];
	});

	const { data, isLoading, isError } = useQuery({
		queryKey: [category, difficulty],
		queryFn: async () => await fetchData(category as string, difficulty as string),
	});

	useEffect(() => {
		// Save the index and answers to localStorage
		localStorage.setItem('quiz_index', index.toString());
		localStorage.setItem('quiz_answers', JSON.stringify(answers));
	}, [index, answers]);

	const totalQuestions = data?.length ?? 0;
	const progress = useMemo(() => {
		// Calculate the progress
		return totalQuestions > 0 ? ((index + 1) / totalQuestions) * 100 : 0;
	}, [index, totalQuestions]);

	const handleSelectAnswer = useCallback(
		(option: string, type: string) => {
			// Find the answer of the current question
			setAnswers((prev) => {
				const updated = [...prev];
				updated[index] = { typeAnswer: type, answer: option };
				return updated;
			});
		},
		[index]
	);

	const handleNext = useCallback(() => {
		// Check if the index is less than the total number of questions
		if (index < totalQuestions - 1) {
			setIndex((prev) => prev + 1);
		}
	}, [index, totalQuestions]);

	const handleBack = useCallback(() => {
		// Check if the index is greater than 0
		if (index > 0) {
			setIndex((prev) => prev - 1);
		}
	}, [index]);

	const handleFinish = useCallback(() => {
		// Find the answer of the current question
		const total_answers = JSON.parse(localStorage.getItem('quiz_answers') as string);
		const correct_answers = total_answers.filter((answer: AnswerType, i : number) => 
			data?.[i].correct_answer.includes(answer.typeAnswer)
		).length;
		const total_score = data && data.length > 0 ? (correct_answers / data.length) * 100 : 0;
		
		navigate('/quiz/finish', { replace: true });
		
		localStorage.setItem('quiz_finished', 'true');
		localStorage.setItem('quiz_correct_answers', total_score.toString());
	}, [navigate, data]);

	if (isLoading)
		return (
			<HomeLayout id="quiz" className="py-8">
				<Loading />
			</HomeLayout>
		);

	if (isError)
		return (
			<HomeLayout id="quiz" className="py-8">
				<h1>Error Fetching Data</h1>
			</HomeLayout>
		);

	return (
		<HomeLayout id="quiz" className="py-8">
			<div className="flex flex-col gap-8">
				{/* Progress Info */}
				<div className="grid sm:grid-cols-4 gap-4">
					<div className="sm:col-span-1 flex flex-col items-center sm:items-start gap-8">
						<h1 className="text-lg sm:text-2xl font-light">Category: </h1>
						<div className="relative w-full h-full flex justify-center sm:justify-start sm:scale-110 px-2 md:px-4">
							<h2 className="text-4xl font-bold">{category}</h2>
						</div>
					</div>
					<div className="sm:col-span-3 flex flex-col justify-between gap-4">
						<div className="flex justify-between">
							<div className="text-2xl px-4 py-2 border-1 w-fit rounded-md">
								{index + 1} / <span className="font-semibold">{totalQuestions}</span>
							</div>
							{isLoading ? (
								<p>Loading</p>
							) : (
								<div className="sticky inset-0 flex items-center justify-center sm:justify-start gap-4 w-fit px-4 py-2 border-1 rounded-md text-slate-900 dark:text-slate-50">
									<AlarmClock />
									<SimpleCountdown duration={15} />
								</div>
							)}
						</div>
						<div className="flex flex-col gap-4">
							<p className="text-lg font-semibold">Progress: {Math.round(progress)}%</p>
							<Progress value={progress} className="w-full" />
						</div>
					</div>
				</div>

				{/* Questions */}
				<div className="flex flex-col gap-8">
					{data?.[index] && (
						<motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} key={index} className="flex flex-col gap-4">
							<div className="border-1 border-slate-400 rounded-md dark:border-slate-600 bg-slate-200 dark:bg-slate-800 p-4 whitespace-pre-wrap">{data[index].question}</div>

							{/* Answer Options */}
							<div className="flex flex-col gap-4">
								{['a', 'b', 'c', 'd'].map((opt) => {
									const typeAnswer = `answer_${opt}`;
									const option = data[index][typeAnswer];
									if (!option || option.trim() === '') return null;

									return (
										<motion.div key={opt} onClick={() => handleSelectAnswer(option, typeAnswer)} className="flex justify-between items-center border-1 border-slate-400 rounded-md dark:border-slate-600 p-4 gap-4">
											<Checkbox id={option} className="cursor-pointer" checked={answers[index]?.answer === option} onCheckedChange={() => handleSelectAnswer(option, typeAnswer)} />
											<Label htmlFor={option} className="w-full cursor-pointer h-full text-base font-medium">
												{option}
											</Label>
										</motion.div>
									);
								})}
							</div>
						</motion.div>
					)}

					{/* Navigation Buttons */}
					<div className="flex justify-end gap-4">
						<Button className="cursor-pointer" onClick={handleBack} disabled={index === 0}>
							Back
						</Button>
						{index === totalQuestions - 1 ? (
							<Button className="cursor-pointer" onClick={handleFinish}>
								Submit
							</Button>
						) : (
							<Button className="cursor-pointer" onClick={handleNext} disabled={index >= totalQuestions - 1}>
								Next
							</Button>
						)}
					</div>
				</div>
			</div>
		</HomeLayout>
	);
}

export default memo(QuizContents);
