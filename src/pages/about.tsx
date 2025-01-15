import { Link } from 'waku'

export default async function AboutPage() {
	return (
		<>
			<title>About page - Waku Blog</title>
			<div>
				<div className='py-10'>
					<h1 className='text-4xl font-bold tracking-tight pb-8'>About</h1>
					<div className='flex flex-col gap-5'>
						<h2 className='font-bold text-2xl'>🌐 Waku Blog</h2>
						<p>
							Waku Blog is a modern and flexible blogging platform built using
							TypeScript, CSS, and JavaScript. It leverages the Waku framework
							for static paths and prerendering, integrates Fuse.js for search
							functionality, and uses Tailwind CSS for stylish, responsive
							design.
						</p>
					</div>
				</div>
				<Link
					to='/'
					className='mt-4 inline-block text-lg text-blue-700 underline'
				>
					Return home
				</Link>
			</div>
		</>
	)
}

export const getConfig = async () => {
	return {
		render: 'static',
	} as const
}
