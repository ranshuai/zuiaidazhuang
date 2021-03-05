<template>
    <div class="car-container" :class="classObject2">
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
        <!-- 购物车商品 -->
        <div
            v-for="(item, index) in cartList"
            :key="index"
            class="store-wrapper"
        >
            <van-checkbox
                v-model="item.checked"
                @change="handleCheckboxChange(item.checked, 1)"
                class="car-title padding-10"
                >{{ item.title }}</van-checkbox
            >
            <van-checkbox-group
                v-model="result"
                ref="checkboxGroup"
                v-for="(_item, _index) in item.children"
                :key="index + _index"
            >
                <van-swipe-cell
                    class="self-swipe-cell padding-left-10"
                    stop-propagation
                >
                    <van-checkbox name="b"></van-checkbox>
                    <van-card
                        :price="_item.price"
                        :desc="_item.decs"
                        :title="_item.title"
                        class="goods-card"
                        thumb="https://img01.yzcdn.cn/vant/cat.jpeg"
                    >
                        <template #tags>
                            <van-tag plain type="danger" @click="tagClick">
                                标签
                                <van-icon name="arrow-down" />
                            </van-tag>
                        </template>

                        <template #num>
                            <div class="buy-num-wrapper">
                                <van-button
                                    size="small"
                                    icon="minus"
                                    type="default"
                                ></van-button>
                                <van-field v-model="_item.buyNum"> </van-field>
                                <van-button
                                    icon="plus"
                                    size="small"
                                    type="default"
                                ></van-button>
                            </div>
                        </template>
                    </van-card>
                    <template #right>
                        <van-button
                            square
                            text="删除"
                            type="danger"
                            class="delete-button"
                            @click="handleDelete"
                        />
                        <van-button
                            square
                            type="primary"
                            text="收藏"
                            class="delete-button"
                            @click="handleCollection"
                        />
                    </template>
                </van-swipe-cell>
                <van-divider
                    v-if="_index != item.children.length - 1"
                    :style="{
                        borderColor: '#bbb',
                        padding: '0 20px',
                        margin: 0,
                    }"
                />
            </van-checkbox-group>
        </div>

        <van-submit-bar
            :price="3050"
            button-text="提交订单"
            @submit="onSubmit"
            :class="classObject"
        >
            <van-checkbox v-model="checked" @change="handleCheckedAll"
                >全选</van-checkbox
            >
        </van-submit-bar>
    </div>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
        return {
            cartList: [
                {
                    checked: false,
                    title: "遇见自然",
                    children: [
                        {
                            title: "123231",
                            buyNum: 2,
                            price: 3.12,
                            decs: "商品描述商品描述商品描述商品描述",
                        },
                        {
                            title: "1232332123211",
                            buyNum: 2,
                            price: 3.12,
                            decs: "商品描述商品描述商品描述商品描述",
                        },
                    ],
                },
                {
                    checked: false,
                    title: "遇见自然2",
                    children: [
                        {
                            title: "123231",
                            buyNum: 2,
                            price: 3.12,
                            decs: "商品描述商品描述商品描述商品描述",
                        },
                        {
                            title: "1232332123211",
                            buyNum: 2,
                            price: 3.12,
                            decs: "商品描述商品描述商品描述商品描述",
                        },
                    ],
                },
                {
                    checked: false,
                    title: "遇见自然3",
                    children: [
                        {
                            title: "123231",
                            buyNum: 2,
                            price: 3.12,
                            decs: "商品描述商品描述商品描述商品描述",
                        },
                        {
                            title: "1232332123211",
                            buyNum: 2,
                            price: 3.12,
                            decs: "商品描述商品描述商品描述商品描述",
                        },
                    ],
                },
            ],
            classObject: { bottom50: true },
            classObject2: { bottom100: true },
            result: [],
            checked: false,
            checked1: true,
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
        handleDelete() {
            console.log("删除商品");
        },
        handleCollection() {
            console.log("收藏商品");
        },
        handleCheckboxChange(b, i) {
            console.log(b, i);
        },
        handleCheckedAll(b) {
            console.log(b);
        },
        tagClick(event) {
            console.log(event);
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
    //如果是点击底部导航切换的就显示这个class
    &.bottom100 {
        padding-bottom: 100px;
    }

    .delete-button {
        height: 100%;
    }
    .store-wrapper {
        background: #fff;
        margin-bottom: 10px;
    }

    .self-swipe-cell {
        background: #fff;
        /deep/ .van-swipe-cell__wrapper {
            display: flex;
        }
        /deep/ .van-checkbox {
            background: #fff;
            padding-right: 2px;
        }
        .goods-card {
            width: 100%;
            margin-top: 0;
            /deep/ .van-card__price {
                height: 36px;
                line-height: 36px;
            }
        }
        /deep/ .van-card {
            background: #fff;
        }
    }
    .car-title {
        height: 52px;
        line-height: 52px;
        background: $white;
    }
    .padding-10 {
        padding: 0 10px;
    }
    .padding-left-10 {
        padding-left: 10px;
    }
    .change-buyNum {
    }
    .buy-num-wrapper {
        @include flexbox();
        /deep/ .van-field {
            width: 50px;
            padding: 0 10px;
        }
        /deep/ .van-field__control {
            text-align: center;
        }
    }
}
</style>