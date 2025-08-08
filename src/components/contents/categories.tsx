import { HomeLayout } from '@/components/layouts/home';
import { ImageGroups } from '@/components/common/categories/image-groups';
import { useState, useCallback } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ImageQuiz, Difficultys } from '@/utilities/categories';
import { memo } from 'react';
import { DifficultyDropdown } from '@/components/common/categories/dropdown';
import { Title } from '@/components/common/title';

function QuizContents() {
	const [diff, setDiff] = useState<string>(Difficultys[0]);
	const [dropdown, setDropdown] = useState<boolean>(false);

	const getDiff = useCallback(
		(diff: string) => {
			setDiff(diff);
		},
		[setDiff]
	);

	const handleDropdown = useCallback(() => {
		setDropdown(!dropdown);
	}, [dropdown]);

	return (
		<HomeLayout id="categories" className='py-8'>
			<div className="flex flex-col sm:grid sm:grid-cols-4 gap-4">
				<div className="sm:col-span-1 flex flex-col gap-4 sm:gap-8">
					<h2 className="text-lg sm:text-2xl font-bold">Difficulty:</h2>
					<div className="flex flex-col gap-2">
						<div onClick={handleDropdown} className="flex justify-between px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-800 duration-500 ease-in-out rounded-md cursor-pointer border-1 font-medium text-base">
							{diff}
							{dropdown ? <ChevronUp /> : <ChevronDown />}
						</div>
						{dropdown && (
							<DifficultyDropdown difficulty={Difficultys} setDifficulty={getDiff} />
						)}
					</div>
				</div>
				<div className="sm:col-span-3 flex flex-col gap-8">
					<Title letters={"Categories"} />
					<ImageGroups ImageQuiz={ImageQuiz} difficulty={diff} />
				</div>
			</div>
		</HomeLayout>
	);
}

export default memo(QuizContents);
