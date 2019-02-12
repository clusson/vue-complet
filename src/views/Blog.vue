<template>
	<v-container grid-list-md>
		<v-layout v-if="!received">
			<v-progress-linear color="orange" :indeterminate="true"></v-progress-linear>
		</v-layout>
		<v-layout v-else-if="received" fill-height full-width>
			<v-container>
				<v-text-field class="mx-3" flat label="Recherche" prepend-inner-icon="search" v-model="search" solo-inverted></v-text-field>

				<v-flex v-for="post in filteredPosts" :key="post.id">
					<Post :post="post" />
				</v-flex>
			</v-container>
		</v-layout>
	</v-container>
</template>

<script>
import axios from "axios";

import Post from "../components/Post";

export default {
  name: "Blog",
  components: {
    Post
  },
  data() {
    return {
      posts: [],
      received: false,
      search: "",
      sites: [
        "http://www.madeinblue.com",
        "https://www.go-interim.fr",
        "https://www.laura-massis.com"
      ]
    };
  },
  computed: {
    filteredPosts: function() {
      return this.posts.filter(post => {
        return (
          post.title.rendered
            .toLowerCase()
            .includes(this.search.toLowerCase()) ||
          post.content.rendered
            .toLowerCase()
            .includes(this.search.toLowerCase())
        );
      });
    }
  },
  created() {
    this.sites.map(site => {
      axios
        .get(site + "/wp-json/wp/v2/posts")
        .then(res => {
          this.posts = this.posts.concat(res.data);
          this.received = true;
        })
        .catch(e => {
          return e
        });
    });
  }
};
</script>
