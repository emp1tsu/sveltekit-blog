<script lang="ts">
	import { title } from '$lib/config';
	import { formatDate } from '$lib/utils.js';

	export let data;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<section>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<a href={post.slug} class="title">{post.title}</a>
				<!-- <p>{formatDate(post.date)}</p> -->
				<p class="date">{post.date}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	.posts {
		display: grid;
		gap: 2rem;
	}
	.post {
		max-inline-size: var(--size-content-3);
	}
	.post:not(:last-child) {
		border-bottom: 1px solid var(--border);
		padding-bottom: var(--size-7);
	}
	.title {
		font-size: var(--font-size-fluid-2);
		text-transform: capitalize;
	}
	.date {
		color: var(--text-2);
	}
	.description {
		margin-top: var(--size-3);
	}
</style>
