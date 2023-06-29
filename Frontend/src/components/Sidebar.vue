<script setup>
const props = defineProps(['activeMenu'])
</script>


<template>

<div id="mySidenav" class="sidenav">
  <div id="profile-container">
      <img id="profile-img" src="../images/profile.jpg">
  </div>
  <div id="link-container">
    <router-link to="/dashboard" :class="{'active': props.activeMenu === 'dashboard'}">
      <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="30" fill="currentcolor"><path d="M180 936q-24.75 0-42.375-17.625T120 876V276q0-24.75 17.625-42.375T180 216h600q24.75 0 42.375 17.625T840 276v600q0 24.75-17.625 42.375T780 936H180Zm230-60V606H180v270h230Zm60 0h310V606H470v270ZM180 546h600V276H180v270Z"/></svg>
      &nbsp;Dashboard
    </router-link>
    <router-link to="/markets" :class="{'active': props.activeMenu === 'markets'}">
      <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="30" fill="currentcolor"><path d="M120 936v-76l60-60v136h-60Zm165 0V700l60-60v296h-60Zm165 0V640l60 61v235h-60Zm165 0V701l60-60v295h-60Zm165 0V540l60-60v456h-60ZM120 700v-85l280-278 160 160 280-281v85L560 582 400 422 120 700Z"/></svg>
      &nbsp;Piyasalar
    </router-link>
    <router-link to="/blogs" :class="{'active': props.activeMenu === 'blogs'}">
        <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="30" fill= "currentColor"><path d="M277 777h275v-60H277v60Zm0-171h406v-60H277v60Zm0-171h406v-60H277v60Zm-97 501q-24 0-42-18t-18-42V276q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600V276H180v600Zm0-600v600-600Z"/></svg>
        &nbsp;Bloglar
    </router-link>
    <router-link to="/info" :class="{'active': props.activeMenu === 'info'}">
      <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" fill="currentColor"><path d="M453-280h60v-240h-60v240Zm26.982-314q14.018 0 23.518-9.2T513-626q0-14.45-9.482-24.225-9.483-9.775-23.5-9.775-14.018 0-23.518 9.775T447-626q0 13.6 9.482 22.8 9.483 9.2 23.5 9.2Zm.284 514q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.684q-54 54.316-127 86Q563-80 480.266-80Zm.234-60Q622-140 721-239.5t99-241Q820-622 721.188-721 622.375-820 480-820q-141 0-240.5 98.812Q140-622.375 140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z"/></svg>
      &nbsp;Yardım
    </router-link>
  </div>
</div>
</template>

<style src="../assets/style/sidebar.css" scoped>
</style>
  