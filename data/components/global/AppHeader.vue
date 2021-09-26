<template>
    <div class="headers" style="margin: 0;background-color: #138298;">
        <div id="nav" >
            <router-link  v-for="item in list" :key="item.to" :to="item.to" class="mx-2">{{item.title}}</router-link>
            <button v-if="isLoggedIn" class="mx-2" @click="logout">Logout</button> <!--on click create event ( open login form ) -->
            <button  v-else class="mx-2" @click="$emit('open-login-model')">Login</button> <!--on click create event ( open login form ) -->

        </div>
    </div>
</template>

<script>
    import "../../store/firebase";
    import { getAuth, signOut } from "firebase/auth";
    const auth = getAuth();
    export default {
        name:'app-header',
        props:["isLoggedIn"],
        data(){
            return{
                list:[
                    {title:"Home",to:"/"},
                    {title:"About",to:"/about"},
                    {title:"Help",to:"/help"},
                    {title:"Blog",to:"/blog"},
                    {title:"Calendar",to:"/calendar"},
                    {title:"Slider",to:"/slider"},
                    {title:"Chat",to:"/chat"},
                ]
            }
        },
        methods:{
            logout(){
                       signOut(auth)
                       .then(() => {
                           console.log("log out")
                        }).catch((error) => {
                            console.log(error)
                         })
            }
        }

    }
</script>
<style scoped>
    button{
        background-color: transparent;
    }
</style>