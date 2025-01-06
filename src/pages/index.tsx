import { Link } from 'waku'

import { Counter } from '../components/counter'
import { getAllPosts } from '../lib/server'
import PostsList from '../components/postsList'

export default async function HomePage() {
	const data = await getData()

	return (
		<div>
			<h2 className='font-semibold text-2xl pb-4'>Blogs Posts - </h2>
			<PostsList posts={data.posts} />
		</div>
	)
}

const getData = async () => {
	const posts = getAllPosts()
	console.log('🚀  getData  posts :- ', posts)

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
