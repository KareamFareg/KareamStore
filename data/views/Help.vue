<template>
    <transition name="fade">
        <h1 v-if="isvisible">this help page</h1>
    </transition>
    <button @click="isvisible = !isvisible">fade header</button>
    <p>this for helping users</p>
</template>

<script>
    export default {
        name:'help',
        data(){
            return{
                isvisible:true
            }
        }
    }
</script>
<style>
    .fade-enter-active,
    .fade-leave-active{
        transition: opacity 1s ease-in-out;
    }
    .fade-enter-from,
    .fade-leave-to{
        opacity: 0;
    }
    .fade-enter-to,
    .fade-leave-from{
        opacity: 1;
    }

</style>