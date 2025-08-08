import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ThemeProvider } from '@/components/theme-provider';

const Loading = lazy(() => import('@/components/shared/loading'));
const MainLayout = lazy(() => import('@/components/layouts/main'));
const Home = lazy(() => import('@/components/contents/home'));
const About = lazy(() => import('@/components/contents/about'));
const Categories = lazy(() => import('@/components/contents/categories'));
const Quiz = lazy(() => import('@/components/contents/quiz'));
const FinishProtectedRoute = lazy(() => import('@/components/contents/finish/protect-route'));
const Finish = lazy(() => import('@/components/contents/finish/finish'));
const Contact = lazy(() => import('@/components/contents/contact'));

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
