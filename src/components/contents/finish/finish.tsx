import { HomeLayout } from '@/components/layouts/home';
import { memo } from 'react';
import { Title } from '@/components/common/title';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { useFinishState } from '@/hooks/quiz/useFinishState';
import { Download } from 'lucide-react';

function FinishContent() {
	const { score, handleHome, handleTryAgain, handleDownloadImage, captureRef } = useFinishState();

	return (
		<HomeLayout id="finish" className="py-8 px-4 sm:px-6 lg:px-8">
			<motion.div className="flex flex-col items-center text-center gap-4 sm:gap-6 max-w-2xl mx-auto" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
				<motion.div ref={captureRef} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="flex flex-col gap-4 sm:gap-6 px-4 py-8">
					<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="relative inset-0 flex justify-end">
						<motion.div
							data-html2canvas-ignore="true"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							transition={{ duration: 0.5, ease: 'easeInOut' }}
							className="w-fit flex bg-slate-100 dark:bg-slate-800 rounded-md p-2 cursor-pointer border">
							<Download className="w-6 h-6" onClick={handleDownloadImage} />
						</motion.div>
						<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
							<Title letters="Thank You" />
						</motion.div>
					</motion.div>

					{/* Judul */}

					{/* Pesan utama */}
					<motion.p className="text-base sm:text-lg md:text-xl font-medium" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
						Selamat, kamu sudah menyelesaikan kuis ini! 🎉
					</motion.p>

					{/* Skor */}
					{score && (
						<motion.p className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
							Skor kamu: {score}%
						</motion.p>
					)}

					{/* Deskripsi */}
					<motion.p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base md:text-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
						Terima kasih sudah berpartisipasi. Kamu bisa mencoba lagi untuk meningkatkan nilai atau melihat pembahasan soal agar semakin paham.
					</motion.p>
				</motion.div>

				{/* Tombol aksi */}
				<motion.div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full sm:w-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
					<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
						<Button className="w-full sm:w-fit cursor-pointer px-5 sm:px-6 py-3 text-sm sm:text-base md:text-lg rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out" onClick={handleTryAgain}>
							Coba Lagi
						</Button>
					</motion.div>
					<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
						<Button
							variant="secondary"
							className="w-full sm:w-fit cursor-pointer px-5 sm:px-6 py-3 text-sm sm:text-base md:text-lg rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
							onClick={handleHome}>
							Kembali ke Beranda
						</Button>
					</motion.div>
					{/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
						<Button
							variant="secondary"
							className="w-full sm:w-fit cursor-pointer px-5 sm:px-6 py-3 text-sm sm:text-base md:text-lg rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
							onClick={handleDownloadImage}>
							Download Hasil
						</Button>
					</motion.div> */}
				</motion.div>
			</motion.div>
		</HomeLayout>
	);
}

export default memo(FinishContent);
