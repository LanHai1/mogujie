<template>
  <c-layout>
    <c-header fixed>
      <c-launch></c-launch>
    </c-header>

    <c-content class="live">
      <c-box-skin
        ph24
        v-for="(item, index) in liveList"
        :key="index"
        class="live__skin"
        pb10
      >
        <c-magazine :image="item.background" class="live__container">
          <c-columns class="live__avatar">
            <img
              :src="item.avatar"
              alt="avatar"
              class="live__avatar--circle"
              circle
              oh
            />
            <span font-primary ml14>{{ item.name }}</span>
          </c-columns>
          <div class="live__title" font-tertiary>
            <div ph10 pv2 bga2 radius4 class="live__watchnum">
              直播中 | {{ item.watchNum }}
            </div>
            <div fs32 mv24>{{ item.liveTitle }}</div>
            <c-columns class="live__product">
              <c-magazine
                v-for="(v, i) in item.goods"
                :key="i"
                :image="v['image']"
                class="live__product--goodimage"
                mr10
              >
                <span class="live__product--price" font-tertiary>{{
                  v["price"]
                }}</span>
              </c-magazine>
            </c-columns>
          </div>
        </c-magazine>
      </c-box-skin>
    </c-content>

    <c-footer>
      <c-footer-nav :list="list"></c-footer-nav>
    </c-footer>
  </c-layout>
</template>

<script>
import { getLives } from '@/api/live';
import { onMounted, reactive, toRefs } from 'vue';
export default {
  name: "LiveHome",
  setup() {
    const data = reactive({
      liveList: []
    });

    onMounted(() => {

      //   Toast.loading({
      //     message: '加载中...',
      //     forbidClick: true
      //   });

      getLives().then((res) => {
        data.liveList = res.data;
      })
    })

    const list = [
      {
        path: '/mall/home',
        text: '首页'
      }, {
        path: '/mall/store',
        text: '商城'
      }, {
        path: '/live/home',
        text: '直播',
        active: true
      }, {
        path: '/me/me',
        text: '我'
      }
    ];

    return {
      ...toRefs(data),
      list
    }
  }
}
</script>

<style lang="scss" scoped>
@include b(live) {
  margin: 94px 0 100px;
  @include e(skin) {
    padding-top: 84px;
  }
  @include e(container) {
    height: 400px;
    border-radius: 10px 10px 0 0/10px 10px 0 0;
  }
  @include e(avatar) {
    @include position(absolute, top -64px left 24px);
    @include m(circle) {
      @include dimensions(90px);
      border: 2px solid #fff;
    }
  }
  @include e(title) {
    @include position(absolute, left 24px bottom 24px);
  }
  @include e(watchnum) {
    display: inline-block;
  }
  @include e(product) {
    @include m(goodimage) {
      @include dimensions(120px);
    }
    @include m(price) {
      text-shadow: 0 1px 2px rgb(0 0 0 / 35%);
      @include position(absolute, left 10px bottom 10px);
    }
  }
}
</style>
