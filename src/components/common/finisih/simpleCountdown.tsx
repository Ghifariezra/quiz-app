import { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const SimpleCountdown = ({ duration }: { duration: number }) => {
	const navigate = useNavigate();

	const [secondsLeft, setSecondsLeft] = useState(() => {
		const savedEndTime = localStorage.getItem('quiz_end_time');
		const now = Date.now();

		if (savedEndTime) {
			const diff = Math.floor((parseInt(savedEndTime, 10) - now) / 1000);
			return diff > 0 ? diff : 0;
		} else {
			const endTime = now + duration * 60 * 1000;
			localStorage.setItem('quiz_end_time', endTime.toString());
			return duration * 60;
		}
	});

	useEffect(() => {
		if (secondsLeft <= 0) {
			localStorage.removeItem('quiz_end_time'); // reset jika waktu habis
			navigate('/');
			return;
		}

		const timer = setInterval(() => {
			setSecondsLeft((prev) => prev - 1);
		}, 1000);

		return () => clearInterval(timer);
	}, [secondsLeft, navigate]);

	const minutes = useMemo(() => {
		return String(Math.floor(secondsLeft / 60)).padStart(2, '0');
	}, [secondsLeft]);

	const seconds = useMemo(() => {
		return String(secondsLeft % 60).padStart(2, '0');
	}, [secondsLeft]);

	return (
		<div>
			{minutes}:{seconds}
		</div>
	);
}

export default SimpleCountdown;