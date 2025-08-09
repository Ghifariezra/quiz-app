import { useState, useCallback, useEffect } from "react";

export const useContact = ({ action }: { action: { error?: string; message?: string } }
) => {
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

    return {
        name,
        setName,
        email,
        setEmail,
        message,
        setMessage
    };
}