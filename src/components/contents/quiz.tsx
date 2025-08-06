import { HomeLayout } from '@/components/layouts/home';
// import { motion } from 'motion/react';
// import { Link } from 'react-router-dom';
import { memo } from 'react';
import { useSearchParams } from 'react-router-dom';
// import { useQuery } from '@tanstack/react-query';

function QuizContents() {
	const [searchParams] = useSearchParams();
	const {category, difficulty} = Object.fromEntries(searchParams);
	console.log(category, difficulty);

	return (
		<HomeLayout id="quiz" className="py-8">
			<h1>Quiz {searchParams.get('category')}</h1>
			{/* Progress */}
			{/* Questions */}
			{/* Answers */}
		</HomeLayout>
	);
}

export default memo(QuizContents);
