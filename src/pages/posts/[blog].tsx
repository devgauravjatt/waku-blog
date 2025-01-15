import { marked } from 'marked'
import { getAllPosts, getPostBySlug } from '../../lib/server'

export default async function PostPage({ blog: blog }: { blog: string }) {
	const data = await getData(blog)

	const html = marked.parse(data.post.body)

	return (
		<>
			<title>{data.post.title}</title>
			<meta name='description' content={data.post.description} />
			<meta name='keywords' content={data.post.tags.join(', ')} />
			<div>
				<h1 className='text-3xl font-bold pb-5'>{data.post.title}</h1>
				<hr />
				<div id='post' className='pt-2'>
					<div dangerouslySetInnerHTML={{ __html: html }} />
				</div>
			</div>
		</>
	)
}

const getData = async (blog: string) => {
	const post = getPostBySlug(blog)
	return {
		post,
	}
}

export const getConfig = async () => {
	const posts = getAllPosts()
	return {
		render: 'static',
		staticPaths: [...posts.map((post) => post.slug)],
	}
}
