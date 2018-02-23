<template>
    <div id="app">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"/>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"/>
    </div>
</template>

<script src="./app.js"></script>
<style src="./app.scss" lang="scss" scoped></style>
<style lang="less">
    @import '~vux/src/styles/reset.less';
</style>
