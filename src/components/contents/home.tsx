import { HomeLayout } from '@/components/layouts/home';
import { motion } from 'motion/react';
import { ButtonGroups } from '@/components/common/home/button';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

function HomeContents () {
	const navigate = useNavigate();
 
	const handleButtonClick = useCallback(
		(path: string) => {
			navigate(path);
		},
		[navigate]
	);

	return (
		<HomeLayout id="home">
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<div className="flex flex-col justify-center gap-8 p-4 sm:order-1 order-2">
					<h1 className="head">Quiz App - Test Your Knowledge in Linux, DevOps, Cloud & More</h1>
					<p className="description">
						Challenge yourself with the Quiz App! Explore a wide range of technical quizzes covering Linux, DevOps, Networking, Programming, Docker, Kubernetes, and more. Perfect for learners and professionals to test and
						improve their skills.
					</p>
					<ButtonGroups handleButtonClick={handleButtonClick} />
				</div>
				<motion.div
					initial={{ x: -100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{
						duration: 2,
						ease: 'easeInOut',
					}}
					className="sm:order-2 order-1 aspect-video sm:aspect-auto lg:aspect-square bg-contain bg-no-repeat bg-center bg-[url('/quiz-image.png')]"
				/>
			</div>
		</HomeLayout>
	);
};

export default memo(HomeContents);
