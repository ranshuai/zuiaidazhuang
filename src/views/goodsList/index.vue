<template>
    <div class="goods-list-container">
        <van-nav-bar
            fixed
            title="商品列表"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            z-index=10
        />
        <section>
            <van-tabs v-model="active" @click="onClick">
                <van-tab v-for="(item, index) in navList" :key="index">
                    <template #title>
                        {{ item.title }}
                        <van-icon v-if="item.icon" :name="item.icon" />
                    </template>
                    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
                        <van-list
                            v-model="loading"
                            :finished="finished"
                            finished-text="没有更多了"
                            @load="onLoad"
                            class="goods-card-big-wrapper"
                        >
                            <!-- <van-cell
                            v-for="item in list"
                            :key="item"
                            :title="item"
                        /> -->
                            <div
                                class="goods-card-big"
                                v-for="(item, index) in list"
                                :key="index"
                            >
                                <div></div>
                                <div>
                                    <div>
                                        {{ item.title }}
                                    </div>
                                    <div>起批量：100</div>
                                    <div>¥39.00</div>
                                </div>
                            </div>
                        </van-list>
                    </van-pull-refresh>
                </van-tab>
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
            list: [],
            loading: false,
            finished: false,
            refreshing: false,
            active: 0,
            navList: [
                {
                    title: "默认",
                },
                {
                    title: "销量",
                },
                {
                    icon: "arrow-up",
                    title: "价格",
                },
            ],
        };
    },
    watch: {},
    computed: {},
    methods: {
        onClick() {},
        onClickLeft() {
            this.$router.go(-1);
        },
        onLoad() {
            // 异步更新数据
            // setTimeout 仅做示例，真实场景中一般为 ajax 请求
            setTimeout(() => {
                for (let i = 0; i < 4; i++) {
                    this.list.push({
                        title: "123",
                    });
                }

                // 加载状态结束
                this.loading = false;

                // 数据全部加载完成
                if (this.list.length >= 10) {
                    this.finished = true;
                }
            }, 1000);
        },
        onRefresh() {
            // 清空列表数据
            this.finished = false;

            // 重新加载数据
            // 将 loading 设置为 true，表示处于加载状态
            this.loading = true;
            this.onLoad();
        },
    },
    created() {},
    mounted() {},
};
</script>
<style lang="scss" secoped>
@import "~@/styles/index.scss";
.goods-list-container {
    padding-top:46px;
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