<template>
  <div class="about">
    <h1>This is an about page</h1>
    <welcomVue/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import WelcomVue from "@/components/Welcom.vue";

  export default {
    name: "Home",
    components: {
      WelcomVue,
    },
  };
</script>
