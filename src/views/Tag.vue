<template>
	<div class="tag">
		<span>in tag vue</span>

		<div v-if="error">{{ error }}</div>
		<div v-if="posts.length">
			<!-- <PostList v-if="showPosts && !error"  :posts="posts" /> -->
			<PostList v-if="!error"  :posts="matchingPosts" />
		</div>
		<div v-else>
			<!-- Loading -->
			<Spinner />
		</div>

	</div>
</template>

<script>
import getPosts from '../composables/getPosts';
import Spinner from '../components/Spinner.vue';
import PostList from '../components/PostList.vue';
import {useRoute} from 'vue-router';
import {computed} from 'vue';

export default {

	// name: 'HomeComposition',
	components: { PostList, Spinner },
	setup(){

		const route = useRoute();
		const { posts, error, load} = getPosts();

		load();

		const matchingPosts = computed(() => {
			console.log(posts);
			return posts.value.filter((post) => post.tags.includes(route.params.tag));
		});

		return { posts, matchingPosts, error };
	}
}
</script>

<style>
</style>