<template>
  <v-layout>
    hello1
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline" :v-bind="post.title.rendered"></div>
            <span class="grey--text">
              Posté le : <span :v-bind="post.date"></span
            ></span>
          </div>
        </v-card-title>
        <v-card-text>
          <span v-html="post.content.rendered"> </span>
        </v-card-text>
        <span class="grey--text"></span>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "Post",
  props: ["post"],
  data() {
    return {
      errors: []
    };
  },
  filters: {
    limitContent(value) {
      return value.toUpperCase();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
