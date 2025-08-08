import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SocialMedia } from '@/components/common/contact/sosmed';

const formVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.3,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: -10 },
	visible: { opacity: 1, y: 0 },
};

export default function ContactSection() {
	return (
		<motion.section className="w-full max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8" initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
			<h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Contact Me - Not yet Optimized</h2>

			{/* Parent motion.form dengan variants */}
			<motion.form className="space-y-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={formVariants}>
				<motion.div variants={itemVariants}>
					<Input placeholder="Your Name" required className="w-full" />
				</motion.div>
				<motion.div variants={itemVariants}>
					<Input placeholder="Your Email" type="email" required className="w-full" />
				</motion.div>
				<motion.div variants={itemVariants}>
					<Textarea placeholder="Your Message" required className="w-full" />
				</motion.div>
				<motion.div variants={itemVariants}>
					<Button type="submit" className="w-full sm:w-auto sm:px-6">
						Send Message
					</Button>
				</motion.div>
			</motion.form>
			<SocialMedia />
		</motion.section>
	);
}
