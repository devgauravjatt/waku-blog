import { marked } from 'marked'
import { getPostBySlug } from '../../lib/server'

export default async function PostPage({ blog: blog }: { blog: string }) {
	const data = await getData(blog)

	const html = marked.parse(data.post.body)

	return (
		<div>
			<h1 className='text-3xl font-bold'>{data.post.title}</h1>
			<div id='post'>
				<div dangerouslySetInnerHTML={{ __html: html }} />
			</div>
		</div>
	)
}

const getData = async (blog: string) => {
	const post = getPostBySlug(blog)
	return {
		post,
	}
}

export const getConfig = async () => {
	return {
		render: 'dynamic',
	}
}
