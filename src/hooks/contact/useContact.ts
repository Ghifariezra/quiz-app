import { useState, useCallback, useEffect } from "react";

export const useContact = ({ action }: { action: { error?: string; message?: string } }
) => {
    const [showMessage, setShowMessage] = useState(false);
    const [showError, setShowError] = useState(false);

    // state untuk form
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // kalau sukses kirim -> reset form
    const resetForm = useCallback(() => {
        setName('');
        setEmail('');
        setMessage('');
    }, [setName, setEmail, setMessage]);

    useEffect(() => {
        if (action?.message || action?.error) {
            resetForm();
        }
    }, [action, resetForm]);

    useEffect(() => {
        if (action?.message) {
            setShowMessage(true);
            const timer = setTimeout(() => setShowMessage(false), 3000); // hilang 3 detik
            return () => clearTimeout(timer);
        }
    }, [action]);

    useEffect(() => {
        if (action?.error) {
            setShowError(true);
            const timer = setTimeout(() => setShowError(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [action]);

    return {
        showMessage,
        showError,
        name,
        setName,
        email,
        setEmail,
        message,
        setMessage
    };
}