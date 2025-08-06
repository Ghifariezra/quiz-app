import {ContactLayout} from '@/components/layouts/contact';
// import { motion } from 'motion/react';
import { memo } from 'react';

function Contents() {
	return (
		<ContactLayout>
			<h1>Contact</h1>
		</ContactLayout>
	);
}

export default memo(Contents);
