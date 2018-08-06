<template>
    <div>

        <div class="mb-10">
            <el-button :type="isCurrent('TabA')" @click="setTab('TabA')">TabA</el-button>
            <el-button :type="isCurrent('Normal')" @click="setTab('Normal')">常规表格</el-button>
        </div>

        <div>
            <ul>
                <li></li>
            </ul>
        </div>

        <!-- keep-alive -->
        <keep-alive>
            <component
                v-bind:is="currentTab"
                class="mb-10">
            </component>
        </keep-alive>
        <!-- / keep-alive -->
    </div>
</template>

<style src="./tables.scss" lang="scss" scoped></style>
