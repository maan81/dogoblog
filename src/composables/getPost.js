import { ref } from 'vue';

const getPost = (id) => {

	const post = ref(null);
	const error = ref(null);

	const load = async () => {
		try{
			// // simulate network delay to view spinner
			// await new Promise(resolve => {
			// 	setTimeout(resolve,2000)
			// })

			// awaits waits for data loading
			let data = await fetch('http://localhost:3000/posts/'+id);

			if(!data.ok){
				throw Error('No Data Avialable');
			}

			post.value = await data.json();
		}
		catch(err){
			error.value = err.message;
			console.log(error.value);
		}
	};

	return { post,error,load };
};

export default getPost;
