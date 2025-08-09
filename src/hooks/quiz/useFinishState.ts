import { useCallback } from "react"
import { useNavigate } from 'react-router-dom';

export const useFinishState = () => {
    const score = localStorage.getItem('quiz_correct_answers');
    const navigate = useNavigate();
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

    return { 
        score,
        handleHome,
        handleTryAgain
     };
}