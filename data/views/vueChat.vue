<template>
<h1 v-for="chat in state.chats" :key="chat.message">{{chat.message}} </h1>
</template>

<script>
    // import firebase from "../store/firebase";
    import {getDatabase,reactive,onMounted} from "firebase/database";
   // import {onMounted,reactive} from "vue";
export default {
name: "Chat",
    setup(){
        const state = reactive({
            chats:{}
        });
        onMounted( async ()=>{
                const db = getDatabase();              //gt db
                const collection =db.ref("chats");           //ret coll of data as table chats
                const data = await collection.once("value"); //return every branch in collection
                state.chats = data.val();                    //set data  in stat as a array
        });
        return {state};
    }
}
</script>

<style scoped>

</style>