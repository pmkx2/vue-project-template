<template>
    <div>
        <!-- 头部组件 -->
        <nav-header :title="title"></nav-header>

        <!-- 底部组件 -->
        <nav-footer :items="footerItem" @clickItem="clickButtonItem"></nav-footer>

        <div class="content-body">
            <h1>{{ msg }}</h1>

            <div>
                <div class="min-title">数据绑定</div>
                <!-- 数据绑定 -->
                <p>
                    数据绑定：
                    <input v-model="msg" />
                </p>
                <!-- 单向改变数据 -->
                <p>
                    <button @click="changeTitle">单向改变数据：改变标题</button>
                </p>
            </div>

            <!-- 改变状态 -->
            <div class="mt-20">
                <div class="min-title">store</div>
                <div v-show="isLoading === true">加载中...</div>
                <div v-show="isLoading === false">加载完成</div>
                <button @click="changeLoading">改变加载中状态</button>
            </div>

            <!-- API数据获取 -->
            <div class="mt-20">
                <div class="min-title">接口提交</div>
                <button @click="getList">API数据获取</button>
            </div>

            <div class="mt-20">
                <div class="min-title">@Watch 监听</div>
                <input v-model="testTxt">
            </div>

            <div class="mt-20">
                <div class="min-title">svg icon</div>
                <icon icon="vue" width="40" color="#42b983 #35495e"></icon>
                <div>
                    <svg style="width: 0; position: absolute; opacity: 0;">
                        <defs>
                            <linearGradient id="gradient-1" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%"  stop-color="#57f0c2"/>
                                <stop offset="95%" stop-color="#147d58"/>
                            </linearGradient>
                            <linearGradient id="gradient-2" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%"  stop-color="#7295c2"/>
                                <stop offset="95%" stop-color="#252e3d"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <icon icon="vue" width="40" color="url(#gradient-1) url(#gradient-2)"></icon>
                </div>
            </div>

            <div class="mt-20">
                <div class="min-title">跳转</div>
                <button @click="runGoTo1">跳转test1</button>
                <button @click="runGoTo2">跳转test2</button>
            </div>

            <div class="mt-20">
                <div class="min-title">本地缓存测试（storage）</div>
                <input v-model="storTest"><br>
                <button @click="setStorageTest('storage-test')">写入缓存</button>
                <button @click="removeStorageTest">删除缓存</button>
            </div>

            <div>
                <div class="min-title">图片选择与预览</div>
                <form enctype="multipart/form-data">
                    <input type="file"
                        @change="selectedFile($event)"
                        multiple
                        accept="image/png, image/jpeg">
                </form>
                <img v-for="(v, i) in imgs"
                    :key="'tem_img_' + i"
                    :src="v" class="preview-imgs"
                    @click="removeFile(i)"/>
            </div>
        </div>
    </div>
</template>
<style src="./demo.scss" lang="scss" scoped></style>
