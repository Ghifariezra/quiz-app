import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'react-router-dom';

export default function ContactSection() {
	return (
		<motion.section className="w-full max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
			<h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Contact Me - Not yet Optimized</h2>

			<form className="space-y-4">
				<Input placeholder="Your Name" required className="w-full" />
				<Input placeholder="Your Email" type="email" required className="w-full" />
				<Textarea placeholder="Your Message" required className="w-full" />

				<Button type="submit" className="w-full sm:w-auto sm:px-6">
					Send Message
				</Button>
			</form>

			<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
				<Link to="https://github.com/Ghifariezra" className="hover:underline">
					GitHub
				</Link>
				<Link to="https://www.linkedin.com/in/ghifariezraramadhan/" className="hover:underline">
					LinkedIn
				</Link>
				<Link to="mailto:ghifariezraramadhan@gmail.com" className="hover:underline">
					Email
				</Link>
			</div>
		</motion.section>
	);
}
