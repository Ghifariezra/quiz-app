import { HomeLayout } from '@/components/layouts/home';
import { motion, AnimatePresence } from 'motion/react';
import { memo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import QuizData from '@/services/quiz-data';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import SimpleCountdown from '@/components/common/finisih/simpleCountdown';
import Loading from '@/components/shared/loading';
import { AlarmClock } from 'lucide-react';
import { useQuizState } from '@/hooks/quiz/useQuizState';

function QuizContents() {
	const { fetchData } = QuizData;
	const [searchParams] = useSearchParams();
	const { category, difficulty } = Object.fromEntries(searchParams);

	const { data, isLoading, isError } = useQuery({
		queryKey: [category, difficulty],
		queryFn: async () => await fetchData(category as string, difficulty as string),
	});

	// Memanggil custom hook untuk mengelola state dan handler
	const { handleIndexValue, answers, handleSelectAnswer, handleFinish, handleNextWithScroll, handleBackWithScroll, questionContainerRef, totalQuestions, progress } = useQuizState({ data } as { data: Record<string, string>[] });

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
	
	const currentQuestion = data?.[handleIndexValue];

	return (
		<HomeLayout id="quiz" className="py-8">
			<div ref={questionContainerRef} className="flex flex-col gap-8">
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
								{handleIndexValue} / <span className="font-semibold">{totalQuestions}</span>
							</div>
							<div className="sticky inset-0 flex items-center justify-center sm:justify-start gap-4 w-fit px-4 py-2 border-1 rounded-md text-slate-900 dark:text-slate-50">
								<AlarmClock />
								<SimpleCountdown duration={15} />
							</div>
						</div>
						<div className="flex flex-col gap-4">
							<p className="text-lg font-semibold">Progress: {Math.round(progress)}%</p>
							<Progress value={progress} className="w-full" />
						</div>
					</div>
				</div>

				{/* Questions */}
				<div className="flex flex-col gap-8">
					{currentQuestion && (
						<motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} key={handleIndexValue} className="flex flex-col gap-4">
							<div className="border-1 border-slate-400 rounded-md dark:border-slate-600 bg-slate-200 dark:bg-slate-800 p-4 whitespace-pre-wrap">{currentQuestion.question}</div>

							{/* Answer Options */}
							<div className="flex flex-col gap-4">
								{['a', 'b', 'c', 'd'].map((opt) => {
									const typeAnswer = `answer_${opt}`;
									const option = currentQuestion[typeAnswer];
									if (!option || option.trim() === '') return null;

									return (
										<motion.div key={opt} onClick={() => handleSelectAnswer(option, typeAnswer)} className="flex justify-between items-center border-1 border-slate-400 rounded-md dark:border-slate-600 px-4 py-2 gap-4">
											<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
												<Checkbox id={option} className="cursor-pointer" checked={answers[handleIndexValue]?.answer === option} onCheckedChange={() => handleSelectAnswer(option, typeAnswer)} />
											</motion.div>
											<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="w-full h-full">
												<Label htmlFor={option} className="cursor-pointer text-base font-medium">
													{option}
												</Label>
											</motion.div>
										</motion.div>
									);
								})}
							</div>
						</motion.div>
					)}

					{/* Navigation Buttons */}
					<div className="flex justify-end gap-4">
						<AnimatePresence mode="wait" initial={false}>
							{handleIndexValue > 0 && (
								<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeInOut' }} exit={{ opacity: 0, y: 10 }}>
									<Button onClick={handleBackWithScroll} disabled={handleIndexValue <= 0} className="cursor-pointer">
										Back
									</Button>
								</motion.div>
							)}
						</AnimatePresence>
						<AnimatePresence mode="wait">
							{handleIndexValue === totalQuestions - 1 ? (
								<motion.div key="submit" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.7, ease: 'easeInOut' }}>
									<Button className="cursor-pointer" onClick={handleFinish}>
										Submit
									</Button>
								</motion.div>
							) : (
								<motion.div key="next" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.7, ease: 'easeInOut' }}>
									<Button className="cursor-pointer" onClick={handleNextWithScroll} disabled={handleIndexValue >= totalQuestions - 1}>
										Next
									</Button>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
			</div>
		</HomeLayout>
	);
}

export default memo(QuizContents);
