import { getAllPosts } from '../../lib/server'
import SearchBox from '../../components/searchBox'

export default async function HomePage() {
	const data = await getData()

	return (
		<>
			<title>Search Page - Waku Blog</title>
			<meta name='description' content='Search Page - Waku Blog' />
			<div className='w-full mx-auto'>
				<SearchBox posts={data.posts} />
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
