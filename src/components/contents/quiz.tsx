import { HomeLayout } from '@/components/layouts/home';
import { motion } from 'motion/react';
import { memo, useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { fetchData } from '@/services/quiz-data';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

function QuizContents() {
	const [index, setIndex] = useState(0);
	const [searchParams] = useSearchParams();
	const { category, difficulty } = Object.fromEntries(searchParams);
	const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

	const { data, isLoading, isError } = useQuery({
		queryKey: [category, difficulty],
		queryFn: () => fetchData(category, difficulty),
	});

	const totalQuestions = data?.length ?? 0;
	const progress = totalQuestions > 0 ? ((index + 1) / totalQuestions) * 100 : 0;

	const handleNext = useCallback(() => {
		if (index < totalQuestions - 1) {
			setIndex((prev) => prev + 1);
		}
	}, [index, totalQuestions]);

	const handleBack = useCallback(() => {
		if (index > 0) {
			setIndex((prev) => prev - 1);
		}
	}, [index]);

	if (isLoading) return <p>Loading...</p>;
	if (isError) return <p>Error loading quiz data.</p>;

	return (
		<HomeLayout id="quiz" className="py-8">
			<div className="flex flex-col gap-8">
				{/* Progress Info */}
				<div className="grid sm:grid-cols-4 gap-4">
					<div className="sm:col-span-1 flex flex-col items-center sm:items-start gap-8">
						<p>Category: {category} - Not yet Optimized</p>
						<span className="text-2xl p-4 border-1 w-fit rounded-full">
							{index + 1}/{totalQuestions}
						</span>
					</div>
					<div className="sm:col-span-3 flex flex-col justify-center gap-4">
						<p>Progress: {Math.round(progress)}%</p>
						<Progress value={progress} className="w-full" />
					</div>
				</div>

				{/* Questions */}
				<div className="flex flex-col gap-4">
					{data?.[index] && (
						<motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} key={index} className="flex flex-col gap-4">
							<div className="border-1 border-slate-400 rounded-md dark:border-slate-600 bg-slate-200 dark:bg-slate-800 p-4 whitespace-pre-wrap">{data[index].question}</div>

							{/* Answer Options */}
							<div className="flex flex-col gap-4">
								{['a', 'b', 'c', 'd'].map((opt) => {
									const option = data[index][`answer_${opt}`];
									if (!option || option.trim() === '') return null;

									return (
										<motion.div
											key={opt}
											onClick={() => setSelectedAnswer(option)} // hanya satu yang aktif
											className="flex justify-between items-center border-1 border-slate-400 rounded-md dark:border-slate-600 p-4 gap-4">
											<Checkbox
												id={option}
												className="cursor-pointer"
												checked={selectedAnswer === option} // hanya centang jika terpilih
												onCheckedChange={() => setSelectedAnswer(option)}
											/>
											<Label htmlFor={option} className="w-full cursor-pointer h-full text-base font-medium">
												{option}
											</Label>
										</motion.div>
									);
								})}
							</div>
							{/* Navigation Buttons */}
							<div className="flex justify-end gap-4">
								<Button className="cursor-pointer" onClick={handleBack} disabled={index === 0}>
									Back
								</Button>
								<Button className="cursor-pointer" onClick={handleNext} disabled={index >= totalQuestions - 1}>
									Next
								</Button>
							</div>
						</motion.div>
					)}
				</div>
			</div>
		</HomeLayout>
	);
}

export default memo(QuizContents);
