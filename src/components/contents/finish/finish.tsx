import { HomeLayout } from '@/components/layouts/home';
import { memo, useCallback } from 'react';
import { Title } from '@/components/common/title';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

function FinishContent() {
	const navigate = useNavigate();
	const score = localStorage.getItem('quiz_correct_answers');

	const resetQuizProgress = useCallback(() => {
		localStorage.removeItem('quiz_index');
		localStorage.removeItem('quiz_answers');
		localStorage.removeItem('quiz_end_time');
		localStorage.removeItem('quiz_finished');
		localStorage.removeItem('quiz_correct_answers');
	}, []);

	const handleHome = useCallback(() => {
		resetQuizProgress();
		navigate('/');
	}, [navigate, resetQuizProgress]);

	const handleTryAgain = useCallback(() => {
		resetQuizProgress();
		navigate('/start-quiz');
	}, [navigate, resetQuizProgress]);

	return (
		<HomeLayout id="finish" className="py-8">
			{/* Container utama */}
			<motion.div className="flex flex-col items-center text-center gap-4 sm:gap-6 max-w-3xl mx-auto" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
				<Title letters="Thank You" />

				{/* Pesan utama */}
				<motion.p className="text-lg sm:text-xl font-medium" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
					Selamat, kamu sudah menyelesaikan kuis ini! 🎉
				</motion.p>

				{/* Skor */}
				{score && (
					<motion.p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
						Skor kamu: {score}%
					</motion.p>
				)}

				{/* Deskripsi */}
				<motion.p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
					Terima kasih sudah berpartisipasi. Kamu bisa mencoba lagi untuk meningkatkan nilai atau melihat pembahasan soal agar semakin paham.
				</motion.p>

				{/* Tombol aksi */}
				<motion.div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
					<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
						<Button className="px-6 py-3 text-base sm:text-lg rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer" onClick={handleTryAgain}>
							🚀 Coba Lagi
						</Button>
					</motion.div>
					<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
						<Button variant="secondary" className="px-6 py-3 text-base sm:text-lg rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer" onClick={handleHome}>
							🏠 Kembali ke Beranda
						</Button>
					</motion.div>
				</motion.div>
			</motion.div>
		</HomeLayout>
	);
}

export default memo(FinishContent);
