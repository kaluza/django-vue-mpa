<template>
  <div id="secondApp">
    <h1>The count from App02 is: {{ count }}</h1>
    <button @click='doDecrement' >Decrement</button>
  </div>
</template>

<script>
import store from './store/store'

export default {
  name: 'secondApp',
  store,
  components: {
  },
  computed: {
    count () {
      return this.$myStore.state.count
    }
  },
      methods: {
    doDecrement () {
      this.$myStore.commit('decrement')
    }
  }
}
</script>

<style>
#secondApp {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: blue;
  margin-top: 60px;
}
</style>
