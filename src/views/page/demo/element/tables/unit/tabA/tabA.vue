<template>
    <div>
        <div
            v-for="(v, i) in list"
            :key="'list_' + i"
            :class="['item', { act: v.cls }]"
             @click="setAct(v)">
            <h3>{{ v.title }}</h3>
            <div>{{ v.text }}</div>
        </div>
    </div>
</template>

<style src="./tabA.scss" lang="scss" scoped></style>
