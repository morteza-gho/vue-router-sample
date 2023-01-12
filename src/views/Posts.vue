<template>
  <div>
    <h1>Posts List</h1>
    <ul>
      <li><router-link :to="{ name: 'post', params: { id: 1 } }">Post title 1</router-link></li>
      <li><router-link :to="{ name: 'post', params: { id: 2 } }">Post title 2</router-link></li>
      <li><router-link :to="{ name: 'post', params: { id: 3 } }">Post title 3</router-link></li>
      <li><router-link :to="{ name: 'post', params: { id: 4 } }">Post title 4</router-link></li>
    </ul>
  </div>
</template>
<script>
export default {

  data() {
    return {

    }
  },



}
</script>
<style scoped>
ul {
  padding: 0 0 0 15px;
  margin: 0;
}
ul li {
  /* list-style-type: none; */
  margin-bottom: 5px;
}
ul li a {
  text-decoration: none;
  color: #333;
  font-size: 18px;
}
ul li a:hover {
  color: red;
}
</style>