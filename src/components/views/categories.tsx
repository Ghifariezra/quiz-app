import { HomeLayout } from '@/components/template/home';
import { ImageGroups } from '@/components/common/categories/image-groups';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ImageQuiz, Difficultys } from '@/utilities/categories';
import { memo } from 'react';
import { DifficultyDropdown } from '@/components/common/categories/dropdown';
import { Title } from '@/components/common/title';
import { motion, AnimatePresence } from 'motion/react';
import { useCategories } from '@/hooks/categories/useCategories';

function QuizContents() {
	const { diff, dropdown, getDiff, handleDropdown } = useCategories();
	return (
		<HomeLayout id="categories" className="py-8">
			<div className="flex flex-col sm:grid sm:grid-cols-4 gap-4">
				<div className="sm:col-span-1 flex flex-col gap-4 sm:gap-8">
					<h2 className="text-lg sm:text-2xl font-bold">Difficulty:</h2>
					<div className="flex flex-col gap-2">
						<div onClick={handleDropdown} className="flex justify-between px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-800 duration-500 ease-in-out rounded-md cursor-pointer border-1 font-medium text-base">
							{diff}
							<AnimatePresence mode="wait">
								{/* mode wait biar animasi out selesai dulu sebelum in */}
								{dropdown ? (
									<motion.div key="up" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
										<ChevronUp />
									</motion.div>
								) : (
									<motion.div key="down" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
										<ChevronDown />
									</motion.div>
								)}
							</AnimatePresence>
						</div>

						{/* Pakai AnimatePresence di sini */}
						<AnimatePresence>
							{dropdown && (
								<motion.div
									key="dropdown" // key penting untuk AnimatePresence
									initial={{ opacity: 0, height: 0 }}
									animate={{ opacity: 1, height: 'auto' }}
									exit={{ opacity: 0, height: 0 }}
									transition={{ duration: 0.3, ease: 'easeInOut' }}
									style={{ overflow: 'hidden' }}>
									<DifficultyDropdown difficulty={Difficultys} setDifficulty={getDiff} />
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
				<div className="sm:col-span-3 flex flex-col gap-8">
					<Title letters={'Categories'} />
					<ImageGroups ImageQuiz={ImageQuiz} difficulty={diff} />
				</div>
			</div>
		</HomeLayout>
	);
}

export default memo(QuizContents);
