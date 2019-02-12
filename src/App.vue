<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">WORDPRESS API</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat :to="{ name: 'blog' }">
        <span class="mr-2">Blog</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      //
    };
  }
};
</script>
