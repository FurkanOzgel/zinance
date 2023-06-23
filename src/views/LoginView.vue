<script setup>

import user_list from "../assets/data/userList.json"

</script>

<style src="../assets/style/authentication.css" scoped>
</style>

<template>

<div id="form-container">
  <img id="logo" src="../assets/images/zinance_logo.jpeg">
  <div class="form-row">
    <input autocomplete="off" placeholder="E-Mail" ref="mail" type="email">
  </div>
  <div class="form-row">
    <input placeholder="Parola" name="password" ref="password" type="password">
  </div>
  <div id="error-text" v-show="this.incorrect_login">
    Hatalı e-posta veya şifre. Tekrak deneyin!
  </div>
  <div class="form-row">
    <button id="submit-btn" @click="check_mail_password">Giriş Yap</button>
  </div>
  <div class="form-row">
    <button id="forgot-btn">Şifremi Unuttum</button>
  </div>
</div>

</template>


<script>
export default {
    data() {
        return{
            incorrect_login: false
        }
    },
    methods: {
        check_mail_password() {
            const email = this.$refs.mail.value;
            const password = this.$refs.password.value;


            const isVerificated = user_list.some((user) => {
                return user.email == email && user.password == password;
            })
            
            if(isVerificated){
                this.$router.push('/dashboard');
            }else{
                this.incorrect_login = true
            }
                
                }
    }
    }
</script>

