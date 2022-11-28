<template>


</template>

<script lang="ts">
import axios from "axios";
import {ref} from "vue";
import type {WP_REST_API_Posts} from 'wp-types';

declare var wpFrontendLocalizer: any;

export default {
  name: 'HomePage',
  components: {},
  setup() {
    const state = ref<{
      posts: WP_REST_API_Posts
    }>({
      posts: []
    });
    const getPosts = async (): Promise<WP_REST_API_Posts> => {
      console.log(`${wpFrontendLocalizer.devApiUrl}/wp/v2/posts`);
      return (await axios.get<WP_REST_API_Posts>(`${wpFrontendLocalizer.devApiUrl}/wp/v2/posts`)).data;
    }

    getPosts().then(posts => {
      state.value.posts = posts;
    })

    return {state};
  },
  methods: {},
  data() {
    return {
      value: 0
    }
  }
}
</script>

<style>

</style>