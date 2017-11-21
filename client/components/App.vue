<template>
  <div class="container">
    <div class="mb-20px">
      <router-link to="/">Home</router-link> | <router-link to="/admin">Admin</router-link> <--- เปิดหน้า admin ไว้อีก tab รอดู state
    </div>
    
    <router-view></router-view>
  </div>
</template>

<style>
 @import '~@/assets/css/styles.css';

 .mb-20px {
   margin-bottom: 20px;
 }

</style>
