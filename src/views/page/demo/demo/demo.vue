<template>
    <div>
        <!-- 头部组件 -->
        <nav-header :title="title"></nav-header>

        <!-- 底部组件 -->
        <nav-footer :items="footerItem" @clickItem="clickButtonItem"></nav-footer>

        <div class="content-body">
            <!-- 数据绑定 -->
            <h1>{{ msg }}</h1>
            <p>
                数据绑定：
                <input v-model="msg" />
            </p>
        
            <!-- 单向改变数据 -->
            <p>
                <button @click="changeTitle">单向改变数据：改变标题</button>
            </p>
        
            <!-- 改变状态 -->
            <div>
                <div v-show="isLoading === true">加载中...</div>
                <div v-show="isLoading === false">加载完成</div>
                <button @click="changeLoading">改变加载中状态</button>
            </div>

            <!-- API数据获取 -->
            <p>
                <button @click="getList">API数据获取</button>
            </p>

            <div>
                <input v-model="testTxt">
            </div>

            <div>
                <icon icon="vue" width="40" color="#42b983 #35495e"></icon>
            </div>

            <div>
                <button @click="runGoTo1">跳转test1</button>
                <button @click="runGoTo2">跳转test2</button>
            </div>
        </div>
    </div>
</template>
<style src="./demo.scss" lang="scss" scoped></style>
