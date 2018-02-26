<template>
    <div class="page-view">
        <!-- group -->
        <group>
            <cell title="title" value="cell测试"></cell>
            <cell title="多选">
                <check-icon :value.sync="checkIcon1" type="plain">多选1</check-icon>
                <check-icon :value.sync="checkIcon2" type="plain">多选2</check-icon>
            </cell>
            <cell title="徽标/小红点">
                <span>新消息 &nbsp;</span>
                <badge></badge>
                <badge text="11"></badge>
            </cell>
            <cell title="日期">
                <datetime v-model="dateValue"></datetime>
            </cell>
        </group>

        <!-- picker -->
        <divider>日期选择</divider>
        <picker :data="years" v-model="year"></picker>

        <!-- win弹窗 -->
        <divider>win弹窗</divider>
        <div class="demo-box">
            <x-button @click.native="showToast" mini>显示Toast</x-button>
            <x-button @click.native="showLoading" mini type="primary">显示加载中</x-button>
            <x-button @click.native="showAlert" mini :gradients="['#A644FF', '#FC5BC4']">显示提示框</x-button>
            <x-button @click.native="showComfirm" mini :gradients="['#1D62F0', '#19D5FD']">显示确认框</x-button>
            <div class="mt-10">type：default | primary | warn</div>
        </div>

        <!-- flexbox -->
        <divider>flexbox</divider>
        <div class="demo-box">
            <flexbox :gutter="0">
                <flexbox-item><div class="flex-demo">无间隔1</div></flexbox-item>
                <flexbox-item><div class="flex-demo">无间隔2</div></flexbox-item>
            </flexbox>
            <flexbox class="mt-10" :gutter="0">
                <flexbox-item :span="3/9"><div class="flex-demo">自定size1</div></flexbox-item>
                <flexbox-item :span="2/9"><div class="flex-demo">自定size2</div></flexbox-item>
                <flexbox-item :span="4/9"><div class="flex-demo">自定size3</div></flexbox-item>
            </flexbox>
            <flexbox class="mt-10">
                <flexbox-item><div class="flex-demo">自动分布1</div></flexbox-item>
                <flexbox-item><div class="flex-demo">自动分布2</div></flexbox-item>
                <flexbox-item><div class="flex-demo">自动分布3</div></flexbox-item>
            </flexbox>
            <flexbox class="mt-10" orient="vertical">
                <flexbox-item><div class="flex-demo">垂直1</div></flexbox-item>
                <flexbox-item><div class="flex-demo">垂直2</div></flexbox-item>
            </flexbox>
        </div>

        <!-- qrcode -->
        <divider>qrcode 二维码</divider>
        <div class="demo-box">
            <qrcode value="https://vux.li?x-page=demo_qrcode"></qrcode>
        </div>

        <!-- popUp -->
        <divider>popUp 弹窗</divider>
        <group>
            <x-switch title="左边菜单" v-model="popUpLeft"></x-switch>
            <x-switch title="左侧滑窗(100%)" v-model="popUpRight"></x-switch>
            <x-switch title="顶部(无背景)" v-model="popUpTop"></x-switch>
            <x-switch title="底部" v-model="popUpBottom"></x-switch>
            <x-switch title="底部(全页)" v-model="popUpFull"></x-switch>
        </group>
        <!-- popUp：左侧 -->
        <div v-transfer-dom>
            <popup v-model="popUpLeft" position="left" @touchmove.native.prevent>
                <div style="width: 1.5rem; padding: 0 0.1rem;">
                    <x-button>菜单1</x-button>
                    <x-button>菜单2</x-button>
                    <x-button @click.native="popUpLeft = false" type="warn">关闭</x-button>
                </div>
            </popup>
        </div>
        <!-- popUp：右侧 -->
        <div v-transfer-dom>
            <popup v-model="popUpRight" position="right" width="100%">
                <div style="width: 100%; padding: 0.1rem;">
                    <x-button @click.native="popUpRight = false" type="warn">关闭</x-button>
                </div>
            </popup>
        </div>
        <!-- popUp：顶部 -->
        <div v-transfer-dom>
            <popup v-model="popUpTop" position="top" :show-mask="false">
                <div class="popup-position-vertical">
                    顶部popUp 2秒后隐藏
                </div>
            </popup>
        </div>
        <!-- popUp：底部 -->
        <div v-transfer-dom>
            <popup v-model="popUpBottom" position="bottom">
                <div class="popup-position-vertical">
                    底部popUp 2秒后隐藏
                </div>
            </popup>
        </div>
        <!-- popUp：底部往上全高 -->
        <div v-transfer-dom>
            <popup v-model="popUpFull" height="80%">
                <div style="position: absolute; right: 0.1rem; top: 0.1rem; font-size: 0.14rem;">
                    <x-button @click.native="popUpFull = false" mini type="warn">X</x-button>
                </div>
                <div class="popup-content-box">
                    <div v-for="v in 30" :key="v" class="li-box">内容{{ v }}</div>
                </div>
            </popup>
        </div>

        <!--  -->
    </div>
</template>
<style src="./vuxDemo.scss" lang="scss" scoped></style>
