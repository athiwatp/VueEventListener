<template>
  <div>
    <p>Admin Page</p>
    <div v-if="posts.length === 0">
      <p>---ไม่พบข้อมูล---</p>
    </div>
    <div v-else>
      <ul v-for="(post, key) in posts" :key="key">
        <li>{{ post.message }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Toast from 'vue-easy-toast'
import 'vue-easy-toast/dist/vue-easy-toast.css'
Vue.use(Toast)

export default {
  data: () => ({
    posts: []
  }),
  sockets: {
    newPost ({message}) {
      this.posts.push({message})
      Vue.toast(message, {
        className: ['my-toast', 'toast-warning'],
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration: 3000,
        mode: 'queue',
        transition: 'my-transition'
      })
    }
  }
}
</script>
