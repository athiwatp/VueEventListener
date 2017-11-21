<template>
  <div>
    <form @submit.prevent="submited">
      <label for="">Post</label><br>
      <input type="text" v-model="message">
      <br>
      <button type="submit">Post</button>
    </form>
    
  </div>
</template>

<script>
  export default {
    data: () => ({
      message: ''
    }),
    methods: {
      submited () {
        if (this.message) {
          this.$socket.emit('post', this.message);
          this.message = ''
        }
      }
    }
  }
</script>