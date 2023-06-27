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
    <div class="password-div">
      <input :type="showPassword ? 'text' : 'password'" class="password-input" name="password" ref="password">
      <div class="eye-icon" @mousedown="togglePasswordVisibility" @mouseup="togglePasswordVisibility">
        <img src="../assets/images/visible.svg" draggable="false" v-show="!showPassword">
        <img src="../assets/images/non_visible.svg" draggable="false" v-show="showPassword">
      </div>
    </div>
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
      error_message: '',
      showPassword: false
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
          this.$cookies.set('jwt', response.data.jwt, '1y');
        })
        .catch(error => {
          this.error_message = error.response.data.detail
          this.incorrect_login_data = true
        });
    },

    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }
}
}
</script>

