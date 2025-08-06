import { QuizLayout } from '@/components/layouts/quiz';
// import { motion } from 'motion/react';
import { memo } from 'react';

function QuizContents() {
	return (
		<QuizLayout>
			<h1>Quiz</h1>
		</QuizLayout>
	);
}

export default memo(QuizContents);
