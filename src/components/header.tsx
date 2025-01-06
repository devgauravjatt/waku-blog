import { Link } from 'waku'

export const Header = () => {
	return (
		<header className='py-3 px-10  bg-slate-200'>
			<div className='flex mx-auto items-center max-w-5xl justify-between'>
				<h2 className='text-2xl font-bold tracking-tight'>
					<Link to='/'>Waku Blog</Link>
				</h2>
				<div>
					<input
						type='search'
						name='search'
						id='search'
						className='px-2 py-1'
						placeholder='search hare...'
					/>
				</div>
				<div>
					<ul className='flex gap-5'>
						<li>
							<Link to='/about'>About</Link>
						</li>
						<li>
							<Link to='/'>Github</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	)
}
