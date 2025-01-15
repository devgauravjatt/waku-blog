import { getAllPosts } from '../lib/server'
import PostsList from '../components/postsList'

export default async function HomePage() {
	const data = await getData()

	return (
		<>
			<title>Waku Blog - A tech blog with Waku</title>
			<meta
				name='description'
				content='Waku Blog is a modern and flexible blogging platform'
			/>
			<div>
				<h2 className='font-semibold text-2xl pb-4'>Blogs Posts - </h2>
				<PostsList posts={data.posts} />
			</div>
		</>
	)
}

const getData = async () => {
	const posts = getAllPosts()

	const data = {
		posts: posts,
	}

	return data
}

export const getConfig = async () => {
	return {
		render: 'static',
	} as const
}
