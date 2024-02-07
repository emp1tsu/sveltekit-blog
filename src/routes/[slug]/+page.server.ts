import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`../../posts/${params.slug}.md`);
		return {
			content: post.default.render().html,
			meta: post.metadata
		};
	} catch (err) {
		throw error(404, `Cloud not find post ${params.slug}`);
	}
}
