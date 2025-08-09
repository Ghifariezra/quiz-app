import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { formContactAction } from '@/hooks/contact/useFormContact';

const Loading = lazy(() => import('@/components/shared/loading'));
const MainLayout = lazy(() => import('@/components/layouts/main'));
const Home = lazy(() => import('@/components/views/home'));
const About = lazy(() => import('@/components/views/about'));
const Categories = lazy(() => import('@/components/views/categories'));
const Quiz = lazy(() => import('@/components/views/quiz'));
const FinishProtectedRoute = lazy(() => import('@/components/views/finish/protect-route'));
const Finish = lazy(() => import('@/components/views/finish/finish'));
const Contact = lazy(() => import('@/components/views/contact'));

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<Suspense fallback={<Loading />}>
				<MainLayout />
			</Suspense>
		),
		children: [
			{
				path: '/',
				element: (
					<Suspense fallback={<Loading />}>
						<Home />
					</Suspense>
				),
			},
			{
				path: '/about',
				element: (
					<Suspense fallback={<Loading />}>
						<About />
					</Suspense>
				),
			},
			{
				path: '/start-quiz',
				element: (
					<Suspense fallback={<Loading />}>
						<Categories />
					</Suspense>
				),
			},
			{
				path: '/quiz',
				Component: Quiz,
			},
			{
				path: '/quiz/finish',
				element: (
					<Suspense fallback={<Loading />}>
						<FinishProtectedRoute>
							<Finish />
						</FinishProtectedRoute>
					</Suspense>
				),
			},
			{
				path: '/contact',
				element: (
					<Suspense fallback={<Loading />}>
						<Contact />
					</Suspense>
				),
				action: formContactAction,
			},
		],
	},
]);

function App() {
	return (
		<div className="transition-all dark:bg-slate-900 bg-slate-50 text-slate-900 dark:text-slate-50">
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				<RouterProvider router={router} />
			</ThemeProvider>
		</div>
	);
}

export default App;
