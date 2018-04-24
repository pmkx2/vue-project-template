<template>
    <el-container>
        <el-aside class="sidebar-container" :class="{ 'hide-sidebar':sidebar.opened }">
            <sidebar></sidebar>
        </el-aside>
        <el-container class="app-wrapper">
            <el-header>
                <nav-bar></nav-bar>
            </el-header>
            <el-main>
                <main-content></main-content>
            </el-main>
        </el-container>
    </el-container>
</template>

<style src="./layout.scss" lang="scss" scoped></style>
