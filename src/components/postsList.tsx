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
				<div key={post.slug}>
					<h2 className='text-2xl font-semibold'>{post.title}</h2>
					<p className='text-sm'>{post.description}</p>
				</div>
			))}
		</div>
	)
}
