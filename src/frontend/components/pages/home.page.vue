<template>
  <div class="grid p-6">
    <div class="col-12">
      <h1 class="post-title">Posts</h1>
    </div>
    <div class="col-3" v-for="(post, index) in state.posts"
         :key="index">
      <Card class="card shadow-4">
        <template #header>
          <img class="card-image" v-if="post.featured_image_url" :src="post.featured_image_url">
        </template>
        <template #title>
          {{ post.title.rendered }}
        </template>
        <template #subtitle>
        </template>
        <template #content>
          <p>{{ post.excerpt.rendered }}</p>
        </template>
        <template #footer>
          <p>13213213213223</p>
        </template>
      </Card>
    </div>
  </div>

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
.card {
  background: #ffffff30 !important;
  backdrop-filter: blur(10px);
  border-radius: 10px !important;
}

.card-image {
  border-radius: 10px 10px 0 0;
  height: 15rem
}

.post-title {
  font-family: sans-serif;
  font-size: 60px;
}
</style>