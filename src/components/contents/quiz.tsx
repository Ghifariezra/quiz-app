import { QuizLayout } from '@/components/layouts/quiz';
// import { motion } from 'motion/react';
// import { Link } from 'react-router-dom';
import { memo } from 'react';
import { useSearchParams } from 'react-router-dom';

function QuizContents() {
	const [searchParams] = useSearchParams();
	return (
		<QuizLayout>
			<h1>Quiz {searchParams.get('category')}</h1>
		</QuizLayout>
	);
}

export default memo(QuizContents);
