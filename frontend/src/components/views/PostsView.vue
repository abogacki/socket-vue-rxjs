<template>
  <ViewBase>
    <div class="box">
      <h3>Posts</h3>
      <ul class>
        <li @click="selectPost" v-for="(post, index) in posts" :key="index">{{ post }}</li>
      </ul>
      <div>Current post: {{currentPost}}</div>
    </div>
  </ViewBase>
</template>

<script>
import ViewBase from './_BaseView'
export default {
  data() {
    return {
      posts: ['Cat Ipsum', 'Hipster Ipsum', 'Cupcake Ipsum'],
      currentPost: 'Cat Ipsum',
    }
  },
  methods: {
    selectPost(e) {
      this.currentPost = e.target.innerText
    },
  },
  components: {
    ViewBase,
  },
}
</script>

<style>
</style>
