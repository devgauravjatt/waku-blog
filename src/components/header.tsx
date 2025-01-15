import { Link } from 'waku'
import { FaGithub } from 'react-icons/fa'
import { CiSearch } from 'react-icons/ci'

export const Header = () => {
	return (
		<header className='py-3 px-10  bg-slate-200'>
			<div className='flex mx-auto items-center max-w-5xl justify-between'>
				<h2 className='text-2xl font-bold tracking-tight'>
					<Link to='/'>Waku Blog</Link>
				</h2>
				<div>
					<Link to='/search'>
						<div className='flex bg-white px-2 items-center rounded-sm gap-2'>
							<CiSearch size={25} />
							<input
								type='search'
								name='search'
								id='search'
								className='px-2 py-1'
								placeholder='search hare...'
							/>
						</div>
					</Link>
				</div>
				<div>
					<ul className='flex gap-5'>
						<li>
							<Link to='/about'>About</Link>
						</li>
						<li>
							<a
								className='flex gap-2 bg-slate-100 px-3 py-1 rounded-sm items-center'
								target='_blank'
								href='https://github.com/devgauravjatt/waku-blog'
							>
								<FaGithub size={25} />
								Github
							</a>
						</li>
					</ul>
				</div>
			</div>
		</header>
	)
}
