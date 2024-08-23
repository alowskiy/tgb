<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      
    </div>
  </header>
  <RouterView />
<nav>
  <div class="r_link">
  
     <div>   <RouterLink to="/">  <div class="sq_rl"></div>Main</RouterLink></div>
        </div>
          <div class="r_link">
    <div class="sq_rl"></div>
        <RouterLink to="/lb">Leadeboard</RouterLink>
        </div>
          <div class="r_link">
    <div class="sq_rl"></div>
        <RouterLink to="/lb">Earn</RouterLink>
        </div>
          <div class="r_link">
    <div class="sq_rl"></div>
        <RouterLink to="/lb">Profile</RouterLink>
        </div>
      </nav>
</template>

<style>
.r_link{
  display: flex;
  flex-direction: column;
  align-items: center;
}
nav{
  background: #000;
  height: 40px;
  display: flex;
  gap: 12px;

  }
  .sq_rl{
  
    width: 10px;
    height: 10px;
    background: red;
    display: inline-block;
    border-radius: 50%;
  }
  a{
      color: white;
      text-decoration: none;
  }
</style>
