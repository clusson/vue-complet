<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>VUEJS</span>
        <span class="font-weight-light">WORDPRESS API</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/clusson/vue-complet" target="_blank">
        <span class="mr-2">Lien Github</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <Blog />
    </v-content>
  </v-app>
</template>

<script>
import Blog from "./views/Blog";

export default {
  name: "App",
  components: {
    Blog
  },
  data() {
    return {
      //
    };
  }
};
</script>
