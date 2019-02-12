<template>
	<v-app>
		<v-toolbar app>
			<v-toolbar-title class="headline text-uppercase">
				<span>VUEJS cours</span>
				<v-spacer></v-spacer>
				<span class="font-weight-light">WORDPRESS API</span>
			</v-toolbar-title>
			<v-spacer></v-spacer>
			<span>
				<v-btn flat :to="{ name: 'blog' }">
					<span class="mr-2">Blog</span>
				</v-btn>
			</span>
			<span>
				<v-btn flat href="https://github.com/clusson/vue-complet" target="_blank">
					<span class="mr-2">Github Repo</span>
				</v-btn>
			</span>
		</v-toolbar>

		<v-content>
			<router-view></router-view>
		</v-content>
		<Footer />
	</v-app>
</template>

<script>
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Footer
  },
  data() {
    return {
      //
    };
  }
};
</script>
