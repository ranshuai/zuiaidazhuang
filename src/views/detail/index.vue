<template>
    <div class="goods-container">
        <!-- 商品图片 -->
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
        <!-- 商品介绍 -->
        <section class="goods-descrbe">
            <div>精品小贝贝南瓜🎃 五斤包邮包售后秒杀</div>
            <div>¥39.00</div>
            <div>运费 : 免运费</div>
        </section>
        <van-divider
            :style="{ borderColor: '#bbb', padding: '0 20px', margin: 0 }"
        />
        <section class="goods-sku" @click="handleSKUChange">
            <div>请选择商品规格</div>
            <div><van-icon name="arrow" /></div>
        </section>
        <!-- 店铺简介 -->
        <section class="goods-shop">
            <div></div>
            <div>
                <div>遇见自然</div>
                <div>销量139 商品共7</div>
                <div>好评率</div>
            </div>
            <div>进店</div>
        </section>
        <!-- 商品详情 -->
        <section class="goods-detail-title">详情</section>
        <section class="goods-detail">
            精品小贝贝-250g-500g每个，包邮包售后！
        </section>
        <van-goods-action>
            <van-goods-action-icon
                icon="wap-home-o"
                text="主页"
                color="#ee0a24"
            />
            <van-goods-action-icon icon="cart-o" text="购物车" />
            <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
            <van-goods-action-button type="warning" text="加入购物车" />
            <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
        <van-sku
            v-model="goodsSKUShow"
            :sku="sku"
            :goods="goods"
            :quota="quota"
            :quota-used="quotaUsed"
            @buy-clicked="onBuyClicked"
            @add-cart="onAddCartClicked"
        />
    </div>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
        return {
            goodsSKUShow: false,
            sku: {
                // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
                // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
                tree: [
                    {
                        k: "颜色", // skuKeyName：规格类目名称
                        k_s: "s1", // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                        v: [
                            {
                                id: "1", // skuValueId：规格值 id
                                name: "红色", // skuValueName：规格值名称
                                imgUrl: "https://img01.yzcdn.cn/1.jpg", // 规格类目图片，只有第一个规格类目可以定义图片
                                previewImgUrl: "https://img01.yzcdn.cn/1p.jpg", // 用于预览显示的规格类目图片
                            },
                            {
                                id: "1",
                                name: "蓝色",
                                imgUrl: "https://img01.yzcdn.cn/2.jpg",
                                previewImgUrl: "https://img01.yzcdn.cn/2p.jpg",
                            },
                        ],
                        largeImageMode: true, //  是否展示大图模式
                    },
                ],
                // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
                list: [
                    {
                        id: 2259, // skuId
                        s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
                        s2: "1", // 规格类目 k_s 为 s2 的对应规格值 id
                        price: 100, // 价格（单位分）
                        stock_num: 110, // 当前 sku 组合对应的库存
                    },
                ],
                price: "1.00", // 默认价格（单位元）
                stock_num: 227, // 商品总库存
                collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
                none_sku: false, // 是否无规格商品
                messages: [
                    {
                        // 商品留言
                        datetime: "0", // 留言类型为 time 时，是否含日期。'1' 表示包含
                        multiple: "0", // 留言类型为 text 时，是否多行文本。'1' 表示多行
                        name: "留言", // 留言名称
                        type: "text", // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
                        required: "1", // 是否必填 '1' 表示必填
                        placeholder: "", // 可选值，占位文本
                    },
                ],
                hide_stock: false, // 是否隐藏剩余库存
            },
            goods: {},
            quota: 2,
            quotaUsed: 0,
        };
    },
    watch: {},
    computed: {},
    methods: {
        handleSKUChange() {
            this.goodsSKUShow = true;
        },
        onBuyClicked() {},
        onAddCartClicked() {},
    },
    created() {},
    mounted() {},
};
</script>
<style lang="scss" scoped>
@import "~@/styles/index.scss";
.goods-container {
    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 375px;
        text-align: center;
        background-color: #39a9ed;
    }
    .goods-descrbe {
        padding: 10px;
        background: $white;
        > :nth-child(1) {
            line-height: 38px;
            font-size: 14px;
            color: $fontOne;
        }
        > :nth-child(2) {
            font-size: 18px;
            color: $fontThree;
        }
        > :nth-child(3) {
            font-size: 14px;
            color: $fontTwo;
            line-height: 38px;
        }
    }
    .goods-sku {
        padding: 10px;
        height: 52px;
        background: $white;
        font-size: 12px;
        color: $fontOne;
        @include flexbox();
        @include marginBottom(4px);
    }
    .goods-shop {
        padding: 16px 10px;
        background: $white;
        @include marginBottom(4px);
        @include flexbox();
        > :first-child {
            width: 67px;
            height: 67px;
            background: $placeholder;
        }
        > :nth-child(2) {
            margin-left: 10px;
            font-size: 12px;
            line-height: 22px;
            color: $fontTwo;
            :nth-child(1) {
                color: $fontOne;
            }
        }
        > :nth-child(3) {
            width: 60px;
            height: 30px;
            border: 1px solid #f2786b;
            border-radius: 6px;
            font-size: 14px;
            text-align: center;
            line-height: 30px;
            color: #f2786b;
            margin-left: auto;
        }
    }
    .goods-detail-title {
        color: #f2786b;
        line-height: 42px;
        font-size: 14px;
        text-align: center;
        background: $white;
    }
    .goods-detail {
        padding: 0 10px;
        background: $white;
        font-size: 14px;
    }
}
</style>