import { ref } from 'vue';
import { projectFirestore } from '../firebase/config'; // for firebase
import { query, getDocs, collection } from 'firebase/compat/firestore';

const getPosts = () => {
	
	const posts = ref([]);
	const error = ref(null);

	const load = async () => {
		try{
			// for npm json-serve
			// // // simulate network delay to view spinner
			// // await new Promise(resolve => {
			// // 	setTimeout(resolve,2000)
			// // })

			// // awaits waits for data loading
			// let data = await fetch('http://localhost:3000/posts');

			// if(!data.ok){
			// 	throw Error('No Data Avialable');
			// }

			// posts.value = await data.json();


			// for firebase
			// const res = await projectFirestore
			// 	.collection('posts')
			// 	.get()
			// ;
			const res = collection(projectFirestore,'posts');
			// const q = query(ref, orderBy('createdAt', 'desc'));
			const q = query(res);
			const querySnapshot = await getDocs(q);
			console.log(querySnapshot, 'this is snapshot');
			// console.log(res);

			posts.value = querySnapshot.docs.map(doc => {
				return { ...doc.data(), id: doc.id }
			});

		}
		catch(err){
			error.value = err.message;
			console.log(error.value);
		}
	};

	return { posts,error,load };
};

export default getPosts;