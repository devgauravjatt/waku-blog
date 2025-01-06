import fs from 'node:fs'
import fm from 'front-matter'

interface Post {
	title: string
	coverImage: string
	slug: string
	tags: string[]
	description: string
}

export const getAllPosts = () => {
	const postFolderPath = './src/posts'

	const fileNames = fs.readdirSync(postFolderPath)

	const allPosts = fileNames.map((fileName) => {
		const slug = fileName.replace(/\.md$/, '')
		const post = fs.readFileSync(`${postFolderPath}/${fileName}`, 'utf8')
		return { slug, post }
	})

	const appPotsMeta = allPosts.map((post) => {
		const { attributes } = fm(post.post)
		return attributes
	}) as unknown as Post[]

	return appPotsMeta
}
