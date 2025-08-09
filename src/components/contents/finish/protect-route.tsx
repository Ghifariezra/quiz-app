import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
	const quizFinished = localStorage.getItem('quiz_finished') === 'true';

	if (!quizFinished) {
		// Kalau belum selesai kuis, redirect ke halaman awal atau quiz
		return <Navigate to="/quiz/finish" replace />;
	}

	return children;
}
