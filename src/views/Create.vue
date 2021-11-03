<template>
	in create
	<div class="create">
		<form @submit.prevent="handleSubmit">
			<label>Title</label>
			<input v-model="title" type="text" required>

			<label>Content</label>
			<textarea v-model="body" required></textarea>

			<label>Tags</label>
			<input
				v-model="tag"
				type="text"
				@keydown.enter.prevent="handleKeyDown"
			/>

			<div v-for="tag in tags" :key="tag" class="pill">
				#{{tag}}
			</div>

			<button>Add Post</button>
		</form>
	</div>

	<!-- <div v-if="error">{{error}}</div>
	<div v-if="post" class="post">
		<h3>{{post.title}}</h3>
		<span> - {{post.id}}</span>
		<p class="pre">{{post.body}}</p>
	</div>
	<div v-else="">
		Loading...
	</div> -->
</template>

<script>
import {ref} from 'vue';
// import {savePost} from '../composables/savePost';
import {useRouter} from 'vue-router'

export default {
	// props: ['id'],
	// data(){
	// 	return {
	// 		title:'',
	// 		details:'',
	// 		url:'http://localhost:3000/home-composition'
	// 	};
	// },
	setup(props){
		const title = ref('');
		const body = ref('');
		const tag = ref('');
		const tags = ref([]);

		const router = useRouter();


		const handleKeyDown = () => {
			if(!tags.value.includes(tag.value)){
				//remove whitespace
				tag.value = tag.value.replace(/\s/g,''); 
				tags.value.push(tag.value);
			}
			tag.value = '';
		};



		const handleSubmit = async () => {
			console.log('asdf');
			const post = {
				title: title.value,
				body: body.value,
				tags: tags.value
			};

			// const {posts, error, savePost} = savePost(post);

			await fetch('http://localhost:3000/posts', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json'},
				body: JSON.stringify(post)
			});
			// postData();

			router.push({name:'Home'}); // <--- retirects to Home.vue

			// return { posts, error }
		}


		return { title, body, tag, tags, handleKeyDown, handleSubmit };
	}
};
</script>

<style>
	form {
		max-width: 480px;
		margin: 0 auto;
		text-align: left;
	}
	input, textarea {
		display: block;
		margin: 10px 0;
		width: 100%;
		box-sizing: border-box;
		padding: 10px;
		border: 1px solid #eee;
	}
	textarea {
		height: 160px;
	}
	label {
		display: inline-block;
		margin-top: 30px;
		position: relative;
		font-size: 20px;
		color: white;
		margin-bottom: 10px;
	}
	label::before {
		content: "";
		display: block;
		width: 100%;
		height: 100%;
		background: #ff8800;
		position: absolute;
		z-index: -1;
		padding-right: 40px;
		left: -30px;
		transform: rotateZ(-1.5deg);
	}
	button {
		display: block;
		margin-top: 30px;
		background: #ff8800;
		color: white;
		border: none;
		padding: 8px 16px;
		font-size: 18px
	}
	.pill {
		display: inline-block;
		margin: 10px 10px 0 0;
		color: #444;
		background: #ddd;
		padding: 8px;
		border-radius: 20px;
		font-size: 14px;
	}
</style>