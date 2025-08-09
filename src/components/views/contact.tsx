import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SocialMedia } from '@/components/common/contact/sosmed';
import { Form, useActionData } from 'react-router-dom';
import { formVariants, itemVariants } from '@/utilities/variants/contact';
import { HomeLayout } from '@/components/template/home';
import { useContact } from '@/hooks/contact/useContact';

export default function ContactSection() {
	const actionData = useActionData() as { error?: string; message?: string };
	const { showMessage, showError, name, setName, email, setEmail, message, setMessage } = useContact({ action: actionData });

	return (
		<HomeLayout id="contact" className="py-8">
			<motion.section className="w-full max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8" initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Contact Me</h2>

				<motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={formVariants}>
					<Form method="POST" action="/contact" className="space-y-4 !text-slate-900 dark:!text-slate-50">
						<AnimatePresence mode="wait">
							{showError && actionData?.error && (
								<motion.p key="error" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut' }} exit={{ opacity: 0, y: -20 }} className="text-sm text-red-500 bg-red-100 rounded-md p-2 text-center">
									{actionData.error}
								</motion.p>
							)}
							{showMessage && actionData?.message && (
								<motion.p
									key="message"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, ease: 'easeInOut' }}
									exit={{ opacity: 0, y: -20 }}
									className="text-sm text-green-600 bg-green-100 rounded-md p-2 text-center">
									{actionData.message}
								</motion.p>
							)}
						</AnimatePresence>

						<motion.div variants={itemVariants}>
							<Input type="text" name="name" id="name" placeholder="Your Name" required value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-transparent" autoComplete="off" />
						</motion.div>

						<motion.div variants={itemVariants}>
							<Input name="email" id="email" placeholder="Your Email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full" />
						</motion.div>

						<motion.div variants={itemVariants}>
							<Textarea name="message" id="message" placeholder="Your Message" required value={message} onChange={(e) => setMessage(e.target.value)} className="w-full" />
						</motion.div>

						<motion.div variants={itemVariants}>
							<Button type="submit" className="w-full sm:w-auto sm:px-6 cursor-pointer hover:bg-primary/90">
								Send Message
							</Button>
						</motion.div>
					</Form>
				</motion.div>
				<SocialMedia />
			</motion.section>
		</HomeLayout>
	);
}
