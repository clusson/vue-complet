<template>
  <v-footer class="pa-3">
    <v-spacer></v-spacer>
    <div>powered by Clément LUSSON</div>
    <div>&copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>
