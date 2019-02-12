<template>
  <v-layout justify-center>
    <v-container xs12 sm10>
      <div class="article">
        <h1><span v-html="article.title.rendered"></span></h1>
        <span class="grey--text">
          Publié le :
          <span v-html="$options.filters.formatDate(article.date, 100)"></span>
        </span>
        <blockquote class="blockquote">
          <span v-html="article.content.rendered"></span>
        </blockquote>
      </div>
      <v-btn flat color="orange darken-2" :to="{ name: 'blog' }" dark>
        <v-icon dark left>arrow_back</v-icon>Retour
      </v-btn>
    </v-container>
  </v-layout>
</template>

<script>
import moment from "moment";
import axios from "axios";

export default {
  name: "Article",
  data() {
    return {
      article: ""
    };
  },
  filters: {
    formatDate(value) {
      return moment(value).format("DD-MM-YYYY");
    },
    truncate: function(value, limit) {
      if (value.length > limit) {
        value = value.substring(0, limit - 3) + "...";
      }
      return value;
    }
  },
  beforeCreate() {
    axios
      .get(
        "https://" +
          this.$route.params.link +
          "/wp-json/wp/v2/posts/" +
          this.$route.params.id
      )
      .then(res => {
        this.article = res.data;
      })
      .catch(e => {
        return e;
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.article {
}
</style>
