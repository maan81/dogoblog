import { ref } from 'vue';

const savePost = (post) => {

	// const post = ref(null);
	const error = ref(null);

	const postData = async () => {
		try{
			// // simulate network delay to view spinner
			// await new Promise(resolve => {
			// 	setTimeout(resolve,2000)
			// })

			let data = await fetch('http://localhost:3000/posts',{
				method:'POST',
				headers:{'Content-Type':'application/json'},
				// body:JSON.stringify({title: post.title,body: post.body,tags:post.tags})
				body:JSON.stringify(post)
			})
			// .then(() => {
			// 	this.$router.push('/posts');
			// })
			.catch((err) => console.log(err.message));


			if(!data.ok){
				throw Error('No Data Avialable');
			}
		}
		catch(err){
			error.value = err.message;
			console.log(error.value);
		}
	};

	return { post, error, postData };
};

export default savePost;
