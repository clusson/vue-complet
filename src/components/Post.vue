<template>
  <v-layout>
    <v-flex xs12>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">
              <span v-html="post.title.rendered"></span>
            </div>
            <span class="grey--text">
              Posté le :
              <span v-html="$options.filters.formatDate(post.date, 100)"></span>
            </span>
          </div>
        </v-card-title>
        <v-card-text>
          <span v-html="$options.filters.truncate(post.content.rendered, 100)">
          </span>
          <span class="grey--text">{{ sinceDate }}</span>
        </v-card-text>
        <v-card-actions>
          <v-btn flat color="orange" :to="path">Lire la suite</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import moment from "moment";

export default {
  name: "Post",
  props: ["post"],
  data() {
    return {
      errors: []
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
  computed: {
    path: function() {
      return "/" + this.getDomainRoot(this.post.link) + "/" + this.post.id;
    },
    sinceDate: function() {
      return moment(this.post.date).fromNow();
    }
  },
  methods: {
    getDomainRoot: function(str) {
      return str.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split("/")[0];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
