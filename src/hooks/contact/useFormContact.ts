import { axiosInstance } from '@/lib/axios/instance';

export const formContactAction = async ({ request }: { request: Request }) => {
    try {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);

        if (!data.name || !data.email || !data.message) {
            return new Response(
                JSON.stringify(
                    { error: 'Please fill in all the fields.' }
                ), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            }
            );
        }

        const response = await axiosInstance.post(import.meta.env.VITE_API_CONTACT, data);

        if (response.status === 200) {
            return new Response(
                JSON.stringify({ message: 'Message sent successfully.' }), { status: 200, headers: { "Content-Type": "application/json" } }
            );
        } else {
            return new Response(JSON.stringify({ error: 'Something went wrong, please try again later.' }), { status: 500, headers: { "Content-Type": "application/json" } });
        }
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Something went wrong, please try again later.' }), { status: 500, headers: { "Content-Type": "application/json" } });
    }
};
