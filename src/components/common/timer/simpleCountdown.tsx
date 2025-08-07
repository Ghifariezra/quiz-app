import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SimpleCountdown({duration}: {duration: number}) {
	const navigate = useNavigate();
	const [secondsLeft, setSecondsLeft] = useState(duration * 60);

	useEffect(() => {
		if (secondsLeft <= 0){
			navigate('/');
			return;
		};

		const timer = setInterval(() => {
			setSecondsLeft((prev) => prev - 1);
		}, 1000);

		return () => clearInterval(timer);
	}, [secondsLeft, navigate]);

	const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
	const seconds = String(secondsLeft % 60).padStart(2, '0');

	return (
		<div>
			{minutes}:{seconds}
		</div>
	);
}
