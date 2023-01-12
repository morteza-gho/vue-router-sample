<template>
  <header id="main-header">
    <ul>
      <li><router-link to="/" active-class="active">Home</router-link></li>
      <li><router-link to="/contact" active-class="active">Contact us</router-link></li>
      <li><router-link to="/about" active-class="active">About us</router-link></li>
      <li><router-link :to="{name: 'posts'}" active-class="active">Posts</router-link></li>
    </ul>
  </header>
</template>
<script>
export default {

}
</script>
<style scoped>

#main-header {
  background: #EEE;
  padding: 10px 30px;
  border-bottom: 1px solid #CCC;
}
ul {
  padding: 0;
  display: flex;
}

ul li {
  list-style-type: none;
  margin-right: 30px;
}
ul li a {
  text-decoration: none;
  color: #333;
  font-size: 18px;  
}
ul li a:hover {
  color: red;
}
.router-link-active, .router-link-exact-active, .active {
  color: red;
}
</style>