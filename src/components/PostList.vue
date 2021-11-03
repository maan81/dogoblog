<template>
  <div class="post-list">
  	in PostList
	<div v-for="post in posts">
	  	<!-- <h3>post.title</h3><span> - {{post.id}}</span> -->
	  	<SinglePost :post="post" />
	</div>
  </div>
</template>
<script>
import SinglePost from './SinglePost.vue';
import { onMounted, onUnmounted, onUpdated } from 'vue';

export default {
  props:['posts'],
  components: { SinglePost },
  setup(props){
  	// accessing props from setup fn.
  	// console.log(props.posts);
  
    onMounted(() => {
      console.log('component mounted');
    });
    onUnmounted(() => {
      console.log('component unmounted');
    });
    onUpdated(() => {
      console.log('component updated');    	
    });
  }
}
</script>