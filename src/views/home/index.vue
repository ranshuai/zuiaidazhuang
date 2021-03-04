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
        <section class="goods-card-small-wrapper">
            <div class="goods-card-small" @click="goToDetail('detail')">
                <div></div>
                <div>
                    <div class="title">
                        双击编辑文本双击编双击编辑文本双击编双击编辑文本双击编双击编辑文本双击编
                    </div>
                    <div class="price">¥39.00</div>
                </div>
            </div>
            <div class="goods-card-small">
                <div></div>
                <div>
                    <div class="title">
                        双击编辑文本双击编双击编辑文本双击编双击编辑文本双击编双击编辑文本双击编
                    </div>
                    <div class="price">¥39.00</div>
                </div>
            </div>
            <div class="goods-card-small">
                <div></div>
                <div>
                    <div class="title">
                        双击编辑文本双击编双击编辑文本双击编双击编辑文本双击编双击编辑文本双击编
                    </div>
                    <div class="price">¥39.00</div>
                </div>
            </div>
        </section>
        <!-- title -->
        <section class="my-title-wrapper">
            <div>热门店铺</div>
            <div>更多店铺</div>
        </section>
        <section class="shops-card-wrapper">
            <div class="shops-card" @click="goToDetail('store')">
                <div></div>
                <div>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>进入店铺</div>
                </div>
            </div>
            <div class="shops-card">
                <div></div>
                <div>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>进入店铺</div>
                </div>
            </div>
        </section>
        <!-- title -->
        <section class="my-title-wrapper">
            <div>推荐商品</div>
            <div>更多商品</div>
        </section>
        <section class="goods-card-big-wrapper">
            <div class="goods-card-big">
                <div></div>
                <div>
                    <div>双击编辑文本辑文本辑文本辑辑文本文本辑文本双击编</div>
                    <div>起批量：100</div>
                    <div>¥39.00</div>
                </div>
            </div>
            <div class="goods-card-big">
                <div></div>
                <div>
                    <div>双击编辑文本辑文本辑文本辑辑文本文本辑文本双击编</div>
                    <div>起批量：100</div>
                    <div>¥39.00</div>
                </div>
            </div>
            <div class="goods-card-big">
                <div></div>
                <div>
                    <div>双击编辑文本辑文本辑文本辑辑文本文本辑文本双击编</div>
                    <div>起批量：100</div>
                    <div>¥39.00</div>
                </div>
            </div>
            <div class="goods-card-big">
                <div></div>
                <div>
                    <div>双击编辑文本辑文本辑文本辑辑文本文本辑文本双击编</div>
                    <div>起批量：100</div>
                    <div>¥39.00</div>
                </div>
            </div>
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
    methods: {
        goToDetail($name) {
            this.$router.push({ path: $name, params: { userId: 123 } });
        },
    },
    created() {},
    mounted() {},
};
</script>
<style lang="scss" scoped>
@import "~@/styles/index.scss";
.home-container {
    @include paddingBottom();
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
        > :first-child {
            font-size: 18px;
            color: $titleFontColor;
        }
        > :last-child {
            font-size: 12px;
            color: $fontTwo;
        }
    }
    .goods-card-small-wrapper {
        @include marginBottom();
        overflow: hidden;
        @include flexbox();
        .goods-card-small {
            margin-left: 10px;
            > :first-child {
                width: 130px;
                height: 130px;
                background: #ccc;
            }
            > :last-child {
                padding: 10px;
                height: 70px;
                width: 130px;
                font-size: 12px;
                background: $white;
                @include flexbox(space-between, left, column);
                .title {
                    width: 100%;
                    line-height: 14px;
                    @include textoverflow(2);
                }
                .price {
                    color: #ff0a0a;
                }
            }
        }
    }
    .shops-card-wrapper {
        overflow: hidden;
        @include flexbox();
        @include marginBottom();
        .shops-card {
            margin-left: 10px;
            border-radius: 10px 10px 0 0;
            > :first-child {
                height: 120px;
                background: $placeholder;
            }
            > :last-child {
                padding: 20px 10px;
                height: 150px;
                background: $white;
                > :first-child {
                    @include flexbox();
                    div {
                        width: 64px;
                        height: 64px;
                        background: $placeholder;
                    }
                }
                > :last-child {
                    // padding: 10px 30px;
                    border: 1px solid #ff0a0a;
                    border-radius: 10px;
                    color: #ff0a0a;
                    font-size: 12px;
                    width: 88px;
                    height: 24px;
                    text-align: center;
                    line-height: 24px;
                    margin: 0 auto;
                    margin-top: 20px;
                }
            }
        }
    }
    .goods-card-big-wrapper {
        width: 100%;
        @include flexbox(space-around, center, row, wrap);
        .goods-card-big {
            width: 175px;
            > :first-child {
                height: 130px;
                background: $placeholder;
            }
            > :last-child {
                font-size: 14px;
                padding: 10px;
                > :nth-child(1) {
                    @include textoverflow(2);
                    color: $fontOne;
                }
                > :nth-child(2) {
                    color: $fontTwo;
                    font-size: 12px;
                }
                > :nth-child(3) {
                    color: $fontThree;
                }
            }
        }
    }
}
</style>