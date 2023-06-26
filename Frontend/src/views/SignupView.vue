<script setup>

import user_list from "../assets/data/userList.json"
import axios from 'axios';

</script>

<style src="../assets/style/authentication.css" scoped>
</style>

<template>

<div id="form-container">
  <img id="logo" src="../assets/images/zinance_logo.jpeg">
  <div class="form-row">
    <input placeholder="Adınız" ref="first_name" style="width: 160px;">
    <input placeholder="Soy Adınız" ref="last_name" style="width: 160px;">
  </div>
  <div class="form-row">
    <input type="date" ref="birth_date" placeholder="Doğum Tarihi">
  </div>
  <div class="form-row">
    <input placeholder="E-Mail" ref="email" type="email">
  </div>
  <div class="form-row">
    <input placeholder="Parola"  ref ="password" type="password">
  </div>
  <div class="form-row">
    <input placeholder="Parola Tekrar" type="password">
  </div>
  <button id="submit-btn" @click="signup">Kayıt Ol</button>
</div>

</template>


<script>
export default {
  data() {
    return{
    }
  },
  methods: {
    signup() {
      const first_name = this.$refs.first_name.value
      const last_name = this.$refs.last_name.value
      const birth_date = this.$refs.birth_date.value
      const email = this.$refs.email.value
      const password = this.$refs.password.value

      const post_data = {
        first_name: first_name,
        last_name: last_name,
        birth_date: birth_date,
        email: email,
        password: password
      }

      axios.defaults.xsrfCookieName = 'csrftoken';
      axios.defaults.xsrfHeaderName = 'X-CSRFToken';

      // axios.defaults.headers.common['X-CSRF-TOKEN'] = this.$cookies.get("csrftoken");
      axios.post("http://127.0.0.1:8000/api/authentication/sign_up", post_data)
        .then(response => {
          // İstek başarılı olduğunda yapılacak işlemler
          console.log(response.data)
        })
        .catch(error => {
          // İstek hata verdiğinde yapılacak işlemler
          console.error(error);
        });
    }
  }
  }
</script>

