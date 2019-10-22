<template>
  <div id="app">
        <h1>The count is APP01: {{ count }}</h1>
    <button @click='doIncrement' >Increment</button>
  </div>
</template>

<script>
import store from './store/store'

export default {
  name: 'firstApp',
  store,
  components: {
  },
  computed: {
    count () {
      return this.$myStore.state.count
    }
  },
    methods: {
    doIncrement () {
      this.$myStore.commit('increment')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
