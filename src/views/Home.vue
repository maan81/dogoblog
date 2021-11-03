<template>
  <div class="home">
    <!-- <div v-if="name">
      <p>{{ name}} {{age}}</p>
	  <button @click="handleClick">Click Me</button>
    </div> -->

	<p ref="p"></p>

	<input type="text" v-model="name">
	<button @click="age++">Add 1 to Age</button>

    <br><br>
    <!-- Refs vs Reactive - - other way of use refs is by reactive. -->

    <!-- using refs -->
	<h2>Refs</h2>
	<p>{{ninjaOne.name}} - {{ninjaOne.age}}</p>
	<button @click="updateNinjaOne">Update Ninja One</button>


    <!-- using reactive -->
	<h2>Reactive</h2>
	<p>{{ninjaTwo.name}} - {{ninjaTwo.age}}</p>
	<button @click="updateNinjaTwo">Update Ninja Two</button>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { ref, reactive } from 'vue';

export default {
  name: 'Home',
  components: {
  },
  setup(){
    // console.log('in setup');

    // // let name = 'mario';
    // // let age = 30;

    // // const p = ref('p');


    // // using ref for Reactivity
    // const name = ref('mario');
    // const age = ref(30);


    // const handleClick = () => {
    //   // console.log('clicked');
    //   // console.log(p,p.value);
    //   // p.value.classList.add('test'); 

    //   // using ref for Reactivity
    //   name.value = 'qwer';
    //   name.age = 30;
    // };

    // return {
   	//   name,
    //   age,
    //   handleClick
    // };


    // Refs vs Reactive -- other way of use refs is by reactive.
    // using refs
    const ninjaOne = ref({name:'mario',age:30});
    const updateNinjaOne = () => {
      ninjaOne.value.age = 40;
    };

    // using Reactive
    const ninjaTwo = ref({name:'Luigi',age:35});
    const updateNinjaTwo = () => {
      ninjaTwo.value.age = 45;
    };

    return {ninjaOne,updateNinjaOne,ninjaTwo,updateNinjaTwo};
  }
}
</script>
