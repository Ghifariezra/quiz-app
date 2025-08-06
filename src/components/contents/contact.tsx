import { HomeLayout } from '@/components/layouts/home';
// import { motion } from 'motion/react';
import { memo } from 'react';

function Contents() {
	return (
		<HomeLayout id="contact" className='py-8'>
			<h1>Contact</h1>
		</HomeLayout>
	);
}

export default memo(Contents);
