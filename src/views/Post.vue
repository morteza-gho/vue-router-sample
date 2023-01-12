<template>

  <h1>Post ID: {{ postId }}</h1>

  <hr />
  <router-link :to="{name: 'postDetails', params: {id: postId}}">Details</router-link>
  <span>&nbsp; &nbsp; &nbsp;</span>
  <router-link :to="{name: 'postComments', params: {id: postId}}">Comments</router-link>
  <span>&nbsp; &nbsp; &nbsp;</span>
  <router-link :to="{name: 'postRelated', params: {id: postId}}">Related Post</router-link>
  <hr />

  <router-view></router-view>

  <button @click="back">Go To Posts</button>

</template>

<script>
export default {

  data() {
    return {
      postId: ''
    }
  },

  created() {
    this.postId = this.$route.params.id
  },

  methods: {
    back() {
      this.$router.push({name: 'posts', query: {text: 'test'} });
    }
  }

}
</script>