
import Post from '@/components/Post.vue'
import Admin from '@/components/Admin.vue'
import PageNotFound from '@/components/PageNotFound.vue'

export const routes = [
  { path: '/', component: Post },
  { path: '/admin', component: Admin },
  { path: '*', component: PageNotFound }
]