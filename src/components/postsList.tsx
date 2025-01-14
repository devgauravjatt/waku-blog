import { Link } from 'waku'

interface Post {
	title: string
	coverImage: string
	slug: string
	tags: string[]
	description: string
}

export default function PostsList(props: { posts: Post[] }) {
	return (
		<div className='flex flex-col gap-4'>
			{props.posts.map((post) => (
				<div className='flex flex-col gap-3 border-2 p-2' key={post.slug}>
					<Link to={`/posts/${post.slug}`}>
						{' '}
						<h2 className='text-2xl font-semibold'>{post.title}</h2>{' '}
					</Link>
					<p className='text-sm'>{post.description}</p>
					<div>
						{post.tags.slice(0, 3).map((tag) => (
							<span key={tag} className='ml-2 text-sm font-medium'>
								# {tag},
							</span>
						))}
					</div>
				</div>
			))}
		</div>
	)
}
