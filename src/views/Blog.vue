<template>
  <v-layout>
    <div>
      hello
      <div v-for="post in posts" :key="post.id">
        <Post :post="post" />
      </div>
    </div>
  </v-layout>
</template>

<script>
import axios from "axios";

import Post from "../components/Post";

export default {
  name: "Post",
  components: {
    Post
  },
  data() {
    return {
      posts: [],
      errors: []
    };
  },
  created() {
    axios
      .get("http://www.madeinblue.com/wp-json/wp/v2/posts")
      .then(res => {
        this.posts = res.data;
      })
      .catch(e => {
        console.log("Error : ", e);
      });
  }
};
</script>
