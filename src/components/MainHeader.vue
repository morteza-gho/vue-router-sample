<template>
  <header>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/contact">Contact us</router-link></li>
      <li><router-link to="/about">About us</router-link></li>
    </ul>
  </header>
</template>
<script>
export default {

}
</script>
<style>
ul {
  padding: 0;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid red;
  display: flex;
}

ul li {
  list-style-type: none;
  margin-right: 30px;
  font-size: 20px;
}
a {
  text-decoration: none;
}
</style>