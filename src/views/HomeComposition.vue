<template>
	<div classs="home">
		<h1>Home</h1>
		<!-- <div v-for="post in posts">
		  	<h3>post.title</h3><span> - {{post.id}}</span>
		</div> -->
		<div v-if="error">{{ error }}</div>
		<div v-if="posts.length">
			<!-- <PostList v-if="showPosts && !error"  :posts="posts" /> -->
			<PostList v-if="!error"  :posts="posts" />
		</div>
		<div v-else>
			<!-- Loading -->
			<Spinner />
		</div>
		<!-- buttons not needed when externalizing data -->
		<!-- <button @click="showPosts = !showPosts">Toggle Posts</button> -->
		<!-- <button @click="post.pop()">Delete a post</button> <! - - not working - - > -->
	</div>
</template>

<script>
import {ref} from 'vue';
import PostList from '../components/PostList.vue';
import getPosts from '../composables/getPosts';
import Spinner from '../components/Spinner.vue';

export default {
  name: 'HomeComposition',
  components: { PostList, Spinner },
  setup(){
	const { posts, error, load} = getPosts();

	load();

	return { posts, error }
	// return { posts, error, showPosts }
	// return { posts,showPosts };
  }
}
</script>

<style>
  .home{
  	max-width: 1200px;
  	margin: 0 auto;
  	padding: 10px;
  }
</style>