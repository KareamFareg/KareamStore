<template>
  <app-header :isLoggedIn="isLoggedIn" @open-login-model="isLoginOpen = true"/> <!--when this event is active-->
  <router-view />
  <login-model v-if="isLoginOpen" @close-login="isLoginOpen=false"/>
</template>

<script>
  import AppHeader from "./components/global/AppHeader.vue";
  import LoginModel from "./components/global/Loginmodel";
  import "./store/firebase";
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  const auth = getAuth();
  export default {
    name:'app',
    data(){
      return{
        isLoginOpen:false,
        isLoggedIn:false,
        authUser:{}
      }
    },
    mounted(){
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.isLoggedIn = true
          this.authUser = user
          this.isLoginOpen=false
          console.log(this.isLoggedIn,this.authUser)
        } else {
          this.isLoggedIn = false
          this.authUser = {}
          console.log(this.isLoggedIn,this.authUser)

        }
      });
    },
    components: {
        LoginModel,
        AppHeader
    }

  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
