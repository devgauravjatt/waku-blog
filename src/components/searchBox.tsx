'use client'

import Fuse from 'fuse.js'
import { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { Link } from 'waku'

interface Post {
	title: string
	coverImage: string
	slug: string
	tags: string[]
	description: string
}

export default function SearchBox(props: { posts: Post[] }) {
	const [posts, setPosts] = useState<Post[]>([])

	const fuse = new Fuse(props.posts, {
		keys: ['title', 'description', 'tags'],
		includeMatches: true,
		minMatchCharLength: 2,
		threshold: 0.5,
	})

	const handleSearch = (e: any) => {
		const results = fuse.search(e.target.value)
		setPosts(results.map((result) => result.item))
	}
	return (
		<>
			<div className='flex flex-col justify-center items-center'>
				<h2 className='font-semibold text-2xl pb-10'>Search - Blog Posts</h2>
				<div className='flex bg-slate-200 px-2 items-center rounded-sm gap-2'>
					<CiSearch size={25} />
					<input
						type='text'
						name='search'
						id='search'
						onInput={handleSearch}
						className='px-2 bg-slate-200 py-1 w-96 text-lg'
						placeholder='search hare...'
					/>
				</div>
			</div>
			<h3>{posts.length} results</h3>
			<div className='pt-6'>
				<div>
					{posts.map((post) => (
						<div
							className='flex flex-col gap-3 hover:text-blue-500 p-2'
							key={post.slug}
						>
							<Link to={`/posts/${post.slug}`}>
								{' '}
								<h2 className='text-2xl font-semibold'>{post.title}</h2>{' '}
							</Link>
						</div>
					))}
				</div>
			</div>
		</>
	)
}
