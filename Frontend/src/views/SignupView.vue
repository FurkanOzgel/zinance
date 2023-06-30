<script setup>
import axios from 'axios'
import { validate } from 'email-validator';
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
    <div class="password-div">
      <input placeholder="Parola" :type="showPassword ? 'text' : 'password'" class="password-input" name="password" ref="password">
      <div class="eye-icon" @mousedown="togglePasswordVisibility" @mouseup="togglePasswordVisibility">
        <img src="../assets/images/visible.svg" draggable="false" v-show="!showPassword">
        <img src="../assets/images/non_visible.svg" draggable="false" v-show="showPassword">
      </div>
    </div>
  </div>
  <div class="form-row">
    <input placeholder="Parola Tekrar" ref="re_password" type="password">
  </div>
  <div id="error-text" v-show="this.error_message">
    {{error_message}}
  </div>
  <button id="submit-btn" @click="signup">Kayıt Ol</button>
</div>

</template>


<script>
export default {
  data() {
    return{
      error_message: '',
      showPassword: false
    }
  },
  methods: {

    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },

    signup() {
      const first_name = this.$refs.first_name.value
      const last_name = this.$refs.last_name.value
      const birth_date = this.$refs.birth_date.value
      const email = this.$refs.email.value
      const password = this.$refs.password.value
      const re_password = this.$refs.re_password.value


      if(!validate(email)){
        this.error_message = "Geçerli bir mail adresi giriniz!"
      }else{
        this.error_message = ""
        if(password == re_password){

          const post_data = {
            first_name: first_name,
            last_name: last_name,
            birth_date: birth_date,
            email: email,
            password: password
          }
    
          axios.post('http://127.0.0.1:8000/auth/register', post_data)
            .then(response => {
              console.log("push")
              this.$router.push('/login');
            })
            .catch(error => {
              console.log(error.response.data)
              try{
                if(error.response.data.email[0] == "user with this email already exists.") {
                  this.error_message = "Email adresi zaten bir hesaba ait."
                }else{
                  this.error_message = "Boş kutucuları doldurun."
                }
              }catch{
                this.error_message = "Boş kutucuları doldurun."
              }
              
            });

        }else{
          this.error_message = "Parolalar birbiriyle eşleşmiyor!"
        }
      }

    }
  }
  }
</script>

