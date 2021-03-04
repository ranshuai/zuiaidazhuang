<template>
    <div class="car-container">
        <van-nav-bar
            fixed
            title="购物车"
            left-text="返回"
            right-text="编辑"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
            z-index="10"
        />
        <van-swipe-cell>
            <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                class="goods-card"
                thumb="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
            <template #right>
                <van-button
                    square
                    text="删除"
                    type="danger"
                    class="delete-button"
                />
            </template>
        </van-swipe-cell>
        <van-checkbox-group v-model="result">
            <van-checkbox name="b">复选框 b</van-checkbox>
        </van-checkbox-group>
        <van-submit-bar
            :price="3050"
            button-text="提交订单"
            @submit="onSubmit"
            :class="classObject"
        >
            <van-checkbox v-model="checked">全选</van-checkbox>
        </van-submit-bar>
    </div>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
        return {
            classObject: { bottom50: true },
            result: ["b"],
            checked: false,
        };
    },
    watch: {},
    computed: {},
    methods: {
        onClickLeft() {
            this.$router.go(-1);
        },
        onClickRight() {
            console.log("编辑");
        },
        onSubmit() {
            console.log("提交");
        },
    },
    created() {},
    mounted() {},
};
</script>
<style lang="scss" scoped>
@import "~@/styles/index.scss";
.car-container {
    @include paddingBottom();
    @include paddingTop();
    font-size: 14px;
    .bottom50 {
        bottom: 50px;
    }
}
</style>