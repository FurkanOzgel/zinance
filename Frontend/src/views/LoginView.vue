<script setup>
import axios from 'axios'
</script>

<style src="../assets/style/authentication.css" scoped>
</style>

<template>

<div id="form-container">
  <img id="logo" src="../assets/images/zinance_logo.jpeg">
  <div class="form-row">
    <input autocomplete="off" placeholder="E-Mail" ref="email" type="email">
  </div>
  <div class="form-row">
    <input placeholder="Parola" name="password" ref="password" type="password">
  </div>
  <div id="error-text" v-show="this.incorrect_login_data">
    {{error_message}}
  </div>
  <div class="form-row">
    <button id="submit-btn" @click="check_mail_password">Giriş Yap</button>
  </div>
</div>

</template>


<script>
export default {
  data() {
    return{
      incorrect_login_data: false,
      error_message: ''
    }
  },
  methods: {
    check_mail_password() {
      const email = this.$refs.email.value;
      const password = this.$refs.password.value;

      const post_data = {
        'email': email,
        'password': password
      }

      axios.post('http://127.0.0.1:8000/api/auth/login', post_data)
        .then(response => {
          this.$cookies.set('jwt', response.data.jwt);
        })
        .catch(error => {
          this.error_message = error.response.data.detail
          this.incorrect_login_data = true
        });
    }
}
}
</script>

