<template>
    <div class="store-container">
        <section class="store-bg">
            <van-search
                v-model="value"
                shape="round"
                background="transparent"
                placeholder="请输入搜索关键词"
            />
        </section>
        <section class="store-detail">
            <div>1</div>
            <div>花生米</div>
            <div>返璞归真，遇见自然，内心丰盈，福乐自来</div>
            <div>
                <div>收藏者 10</div>
                <div>未收藏</div>
            </div>
        </section>
        <section>
            <van-tabs @click="onClick">
                <van-tab title="商品">内容 1</van-tab>
                <van-tab title="专题">内容 2</van-tab>
            </van-tabs>
        </section>
    </div>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
        return {
            value: "",
        };
    },
    watch: {},
    computed: {},
    methods: {
        onClick() {},
    },
    created() {},
    mounted() {},
};
</script>
<style lang="scss" scoped>
@import "~@/styles/index.scss";
.store-container {
    .store-bg {
        height: 200px;
        background: $placeholder;
    }
    .store-detail {
        position: relative;
        font-size: 14px;
        color: $fontTwo;
        padding: 20px 0;
        text-align: center;
        > :nth-child(1) {
            width: 67px;
            height: 67px;
            background: $placeholder;
            position: absolute;
            left: 50%;
            top: 0;
            margin-left: -0.9rem;
            margin-top: -0.9rem;
            border-radius: 5px;
        }
        > :nth-child(2) {
            margin-top: 10px;
            color: $fontOne;
            line-height: 40px;
        }
        > :nth-child(3) {
            margin-bottom: 20px;
            font-size: 12px;
        }
        > :last-child {
            @include flexbox(space-around);
            div {
                width: 136px;
                height: 36px;
                border: 1px solid #a3a3a3;
                border-radius: 4px;
                line-height: 36px;
            }
        }
    }
}
</style>