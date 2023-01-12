<script>
import MainHeader from './components/MainHeader.vue';

export default {
    data() {
        return {};
    },
    components: { MainHeader }
};
</script>

<template>
    <MainHeader></MainHeader>
    <main id="main">
        <router-view></router-view>
    </main>
</template>

<style>
html,
body {
    margin: 0;
    padding: 0;
}

#main {
    padding: 10px 30px;
}
</style>

