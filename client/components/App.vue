<template>
  <div class="container">
    <textarea name="" id="" cols="30" rows="10" v-model="message"></textarea>
    <br>
    <button @click="posted">Post</button>
  </div>
</template>

<script>
  export default {
    data: () => ({
      message: ''
    }),
    sockets: {
      connect() {
        console.log('socket connected')
      }
    },
    methods: {
      posted () {
        console.log(this.message)
        this.message = ''
      }
    }
  }
</script>

<style>
  .container {
    width: 400px;
    margin: 20px auto;
  }
</style>