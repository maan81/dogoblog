<template>
	<div classs="home">
		<h1>Home</h1>

		<!-- temp demo -->
		<!-- <p>{{name}}</p> -->

		<!-- displaying list of names -->
		<div v-for="name in names" :key="name">
			{{ name }}
		</div>

		<!-- search term -->
		<input type="text" v-model="search">
		<p>Search Term : {{search}}</p>

		<!-- cycle thru matching names -->
		<div v-for="name in matchingNames" :key="name">
			{{name}}
		</div>

		<!-- to stop them from watching -->
		<button @click="handleClick">Stop Watching</button>

	</div>
</template>

<script>
/*import { computed, ref } from 'vue';

export default {
  name: 'Home',
  setup(){
    // temp demo
    // const name = computed(() => {
    //   return 'shawn';
    // });
    // return { name };

    // displaying list of names
    const names = ref([
      'mario', 'yoshi',
      'lugi' , 'bowser',
      'koops', 'peach'
	]);

	// displaying list of matching names
	const search = ref('');
	const matchingNames = computed(() => {
		return names.value.filter((name) => name.includes(search.value));
	});
	return { names, search, matchingNames };
  }
}*/

// Watch & WatchEffect -- these fns run when particular value changes
import { computed,ref,watch,watchEffect } from 'vue';

export default {
	setup(){
		const search = ref('');
		const names = ref([
			'mario','yoshi' ,
			'lugi' ,'bowser',
			'koops','peach'
		]);

		/* commented out for stop watching names
		// fn is watched, & when changes, fn is fired
		watch(search, () => {
			console.log('watch fn ran')
		});

		// fn is fired initially
		watchEffect(() => {
			console.log('watchEffect function ran');
		});

		// fn is fired initially & when the value is changed
		// using search.value inside the fn
		watchEffect(() => {
			console.log('watchEffect function ran',search.value);
			// console.log('watchEffect function ran');
		});
		*/

		const matchingNames = computed(() => {
			return names.value.filter((name) => name.includes(search.value))
		});



		const stopWatch = watch(search, () => {
		});
		const stopWatchEffect = watchEffect(() => {
			console.log('watch function ran',search.value);
		});
		const handleClick = () => {
			stopWatch()
			stopWatchEffect()
		};

		return {names,search,matchingNames,handleClick};
		
	}	
}
</script>