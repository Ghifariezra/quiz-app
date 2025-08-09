import { HomeLayout } from '@/components/template/home';
import { motion } from 'motion/react';
import { ButtonGroups } from '@/components/common/home/button';
import { memo } from 'react';
import { useHome } from '@/hooks/home/useHome';

function HomeContents () {
	const { handleButtonClick } = useHome();
	return (
		<HomeLayout id="home" className="py-8 overflow-hidden">
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<div className="flex flex-col justify-center gap-8 p-4 sm:order-1 order-2">
					<motion.h1 initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: 'easeInOut' }} className="head">
						Tech Playground – Challenge Your Skills in Linux, DevOps, Cloud & Beyond
					</motion.h1>
					<motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: 'easeInOut' }} className="description">
						Step into the Tech Playground — your interactive space to learn, play, and grow. Tackle exciting quizzes on Linux, DevOps, Networking, Programming, Docker, Kubernetes, and more. Whether you’re a student, a
						professional, or just a curious mind, test your skills, track your progress, and have fun leveling up your tech knowledge!
					</motion.p>
					<ButtonGroups handleButtonClick={handleButtonClick} />
				</div>
				<motion.div
					initial={{ x: -100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{
						duration: 1,
						ease: 'easeInOut',
					}}
					className="sm:order-2 order-1 aspect-video sm:aspect-auto lg:aspect-square bg-contain bg-no-repeat bg-center bg-[url('/quiz-image.png')]"
				/>
			</div>
		</HomeLayout>
	);
};

export default memo(HomeContents);
