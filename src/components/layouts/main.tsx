import Header from '@/components/shared/header.tsx';
import Footer from '@/components/shared/footer.tsx';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
	return (
		<main>
			<Header />
			<Outlet />
			<Footer />
		</main>
	);
}
