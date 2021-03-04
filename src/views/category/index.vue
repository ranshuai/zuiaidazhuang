<template>
    <div class="category-container">
        <van-search
            v-model="value"
            shape="round"
            background="#fff"
            placeholder="请输入搜索关键词"
        />
        <!-- content -->
        <section class="category-content">
            <van-sidebar v-model="activeKey" @change="onChange">
                <van-sidebar-item title="标签名1" />
                <van-sidebar-item title="标签名2" />
                <van-sidebar-item title="标签名3" />
            </van-sidebar>
            <div>
                <div>
                    <div class="title">厨房/卫浴</div>
                    <div class="category-item-wrapper">
                        <div class="category-item" @click="goToPage('goodsList')">
                            <div></div>
                            <div>清洁用品</div>
                        </div>
                        <div class="category-item">
                            <div></div>
                            <div>清洁用品</div>
                        </div>
                        <div class="category-item">
                            <div></div>
                            <div>清洁用品</div>
                        </div>
                        <div class="category-item">
                            <div></div>
                            <div>清洁用品</div>
                        </div>
                        <div class="category-item">
                            <div></div>
                            <div>清洁用品</div>
                        </div>
                        <div class="category-item">
                            <div></div>
                            <div>清洁用品</div>
                        </div>
                        <div class="category-item">
                            <div></div>
                            <div>清洁用品</div>
                        </div>
                    </div>
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
        return {
            value: "",
            activeKey: 0,
        };
    },
    watch: {},
    computed: {},
    methods: {
        onChange() {},
        goToPage($name){
            this.$router.push({ path:$name, params: { userId: 123 }})
        }
    },
    created() {},
    mounted() {},
};
</script>
<style lang="scss" scoped>
@import "~@/styles/index.scss";
.category-container {
     @include paddingBottom();
    .category-content {
        @include flexbox(space-around,start);
        > :last-child {
            width: 76%;
            font-size: 12px;
            .title {
                line-height: 32px;
            }
            .category-item-wrapper {
                padding-top: 7px;
                background: $white;
                @include flexbox(space-around, center, row, wrap);
                .category-item {
                    margin-bottom: 5px;
                    text-align: center;
                    width: 75px;
                    > :first-child {
                        width: 75px;
                        height: 75px;
                        background: $background-color;
                    }
                    > :last-child {
                        line-height: 34px;
                    }
                }
            }
        }
    }
}
</style>