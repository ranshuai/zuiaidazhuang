<template>
    <div class="user-container">
        <section class="user-bg-wrapper">
            <div class="image-wrapper">
                <van-image round src="https://img01.yzcdn.cn/vant/cat.jpeg" />
            </div>
            <div class="user-title">123</div>
            <div class="user-bg-bottom">
                <div>
                    <span> ￥0.00 </span>
                    <span> 余额 </span>
                </div>
                <div>
                    <span> 0 </span>
                    <span> 关注 </span>
                </div>
                <div>
                    <span> 0 </span>
                    <span> 粉丝 </span>
                </div>
            </div>
        </section>
        <section class="user-main-content">
            <div>
                <div class="item">
                    <div>
                        <van-icon name="orders-o" />
                        <span> 我的订单 </span>
                    </div>
                    <div style="font-size: 12px">
                        <span>查看全部订单</span>
                        <van-icon name="arrow" />
                    </div>
                </div>
                <van-divider
                    :style="{
                        borderColor: '#bbb',
                        padding: '0 20px',
                        margin: 0,
                    }"
                />
                <div class="item">
                    <div class="card-wrapper">
                        <span>
                            <van-icon name="pending-payment" size="24" />
                        </span>
                        <span> 待付款 </span>
                    </div>
                    <div class="card-wrapper">
                        <span>
                            <van-icon name="pending-payment" size="24" />
                        </span>
                        <span> 待发货 </span>
                    </div>
                    <div class="card-wrapper">
                        <span>
                            <van-icon name="pending-payment" size="24" />
                        </span>
                        <span> 待收货 </span>
                    </div>
                    <div class="card-wrapper">
                        <span>
                            <van-icon name="pending-payment" size="24" />
                        </span>
                        <span> 评价 </span>
                    </div>
                    <div class="card-wrapper">
                        <span> <van-icon name="play" size="24" /> </span>
                        <span> 售后 </span>
                    </div>
                </div>
            </div>
            <div class="item">
                <div>
                    <van-icon name="orders-o" />
                    <span> 我的钱包 </span>
                </div>
                <div style="font-size: 12px">
                    <span></span>
                    <van-icon name="arrow" />
                </div>
            </div>
            <div class="item">
                <div>
                    <van-icon name="orders-o" />
                    <span> 我的收藏 </span>
                </div>
                <div style="font-size: 12px">
                    <span></span>
                    <van-icon name="arrow" />
                </div>
            </div>
            <div class="item">
                <div>
                    <van-icon name="orders-o" />
                    <span> 地址管理 </span>
                </div>
                <div style="font-size: 12px">
                    <span></span>
                    <van-icon name="arrow" />
                </div>
            </div>
            <div class="item">
                <div>
                    <van-icon name="orders-o" />
                    <span> 优惠券 </span>
                </div>
                <div style="font-size: 12px">
                    <span></span>
                    <van-icon name="arrow" />
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
    methods: {},
    created() {},
    mounted() {},
};
</script>
<style lang="scss" scoped>
@import "~@/styles/index.scss";
.user-container {
    .user-bg-wrapper {
        // @include flexbox(space-between, center, column);
        padding-top: 44px;
        height: 228px;
        background: #ccc;
        .image-wrapper {
            display: flex;
            justify-content: center;
            /deep/ .van-image {
                border: 1px solid #fff;
                img {
                    width: 80px;
                    height: 80px;
                }
            }
        }

        .user-title {
            font-size: 14px;
            color: #fff;
            line-height: 40px;
            text-align: center;
        }
        .user-bg-bottom {
            font-size: 12px;
            color: #fff;
            @include flexbox(space-around);
            text-align: center;
            > div {
                @include flexbox(space-between, center, column);
            }
        }
    }
    .user-main-content {
        > :first-child {
            background: #fff;
        }
        .item {
            @include flexbox();
            background: #fff;
            padding: 0 10px;
            height: 55px;
            font-size: 14px;
            color: $fontOne;
            .van-icon,
            span {
                vertical-align: middle;
            }
            .card-wrapper {
                @include flexbox(space-between, center, column);
            }
        }
        > div {
            margin-bottom: 5px;
        }
    }
}
</style>