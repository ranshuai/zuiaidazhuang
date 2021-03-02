<template>
    <div class="home-container">
        <!-- 轮播 -->
        <section class="my-swipe-wrapper">
            <van-swipe
                class="my-swipe"
                :autoplay="3000"
                indicator-color="white"
            >
                <van-swipe-item>1</van-swipe-item>
                <van-swipe-item>2</van-swipe-item>
                <van-swipe-item>3</van-swipe-item>
                <van-swipe-item>4</van-swipe-item>
            </van-swipe>
        </section>
        <!-- 专题导航 -->
        <section class="my-nav-wrapper">
            <van-grid :column-num="3">
                <van-grid-item icon="photo-o" text="文字" />
                <van-grid-item icon="photo-o" text="文字" />
                <van-grid-item icon="photo-o" text="文字" />
            </van-grid>
            <div class="my-nav-wrapper-message">
                <div></div>
            </div>
        </section>
        <!-- 轮播 -->
        <section class="my-swipe-wrapper">
            <van-swipe
                class="my-swipe my-swipe2"
                :autoplay="3000"
                indicator-color="white"
            >
                <van-swipe-item>1</van-swipe-item>
                <van-swipe-item>2</van-swipe-item>
                <van-swipe-item>3</van-swipe-item>
                <van-swipe-item>4</van-swipe-item>
            </van-swipe>
        </section>
        <!-- title -->
        <section class="my-title-wrapper">
            <div>热销商品</div>
            <div>更多商品</div>
        </section>
        <section class="goods-card-small">
            <div></div>
        </section>
    </div>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
        return {};
    },
    watch: {},
    computed: {},
    methods: {},
    created() {},
    mounted() {},
};
</script>
<style lang="scss" scoped>
@import "~@/styles/index.scss";
.home-container {
    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 210px;
        text-align: center;
        background-color: #39a9ed;
    }
    .my-swipe2 .van-swipe-item {
        line-height: 130px;
        @include marginBottom();
    }
    .my-nav-wrapper {
        height: 120px;
        background: $white;
        @include marginBottom();
        .my-nav-wrapper-message {
            :first-child {
                width: 330px;
                height: 30px;
                border-radius: 30px;
                border: 1px solid $borderColor;
            }
            @include flexbox(center);
        }
    }
    .my-title-wrapper {
        @include flexbox();
        height: 56px;
        background: $white;
        :first-child {
            font-size: 18px;
            color: $titleFontColor;
        }
        :last-child {
            font-size: 12px;
            color: $fontTwo;
        }
    }
    .goods-card-small {
        :first-child {
            width: 130px;
            height: 130px;
            background: #ccc;
        }
        // :last-child {
        //     height: 70px;
        //     background: $white;
        // }
    }
}
</style>