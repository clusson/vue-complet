<template>
  <div class="home">
    <Post msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Post from "@/components/Post.vue";

export default {
  name: "home",
  components: {
    Post
  }
};
</script>
