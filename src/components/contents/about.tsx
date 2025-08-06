import { HomeLayout } from '@/components/layouts/home';
import { motion } from 'motion/react';
import { memo } from 'react';
import { Link } from 'react-router-dom';

function AboutContents() {
	const AboutIntroduction = 'Introduction';
	return (
		<HomeLayout id="about" className="py-8">
			<div className="flex flex-col gap-4">
				<div className="grid  sm:grid-cols-2 gap-4 h-full">
					<motion.div
						initial={{ opacity: 0, x: -10 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{
							duration: 2,
							ease: 'easeInOut',
						}}
						className='bg-[url("/question.png")] aspect-video sm:aspect-square bg-contain bg-no-repeat bg-center'
					/>
					<div className="field-about">
						<div className="field-about">
							<h1 className="head">
								{AboutIntroduction.split('').map((word, index) => (
									<motion.span
										key={index}
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{
											duration: 0.3,
											delay: index * 0.1,
											ease: 'easeInOut',
											repeat: 1,
										}}>
										{word}
									</motion.span>
								))}
							</h1>
							<p className="description sm:!text-justify">
								Quiz App is an interactive platform designed to help students, professionals, and tech enthusiasts test and enhance their knowledge. Covering a wide range of topics such as Linux, DevOps, Networking, Cloud,
								Docker, Kubernetes, and various programming languages, Quiz App provides a fun and engaging way to learn and grow your skills.
								<br /> <br />
								Whether you are preparing for a certification, brushing up on your technical expertise, or simply looking for a challenge, our quizzes are crafted to be both informative and enjoyable.
								<br /> <br />
								With regularly updated questions and a variety of difficulty levels, you can track your progress, identify your strengths, and discover areas for improvement.
								<br /> <br />
								Join the community of learners and tech enthusiasts today, and make your learning journey more exciting with Quiz App — where knowledge meets challenge.
							</p>
						</div>
					</div>
				</div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
					className="mt-6 p-4 rounded-md bg-gray-100 dark:bg-gray-800 shadow-md shadow-black/10 dark:shadow-white/10">
					<h2 className="text-lg font-semibold mb-2">Data Source</h2>
					<p className="text-sm">
						All quiz questions are powered by{' '}
						<Link to="https://quizapi.io/docs/1.0/overview" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
							QuizAPI.io
						</Link>
						, an open quiz API for developers. Learn more in their{' '}
						<Link to="https://quizapi.io/docs/1.0/overview" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
							official documentation
						</Link>
						.
					</p>
				</motion.div>
			</div>
		</HomeLayout>
	);
}

export default memo(AboutContents);