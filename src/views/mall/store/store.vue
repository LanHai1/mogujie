<template>
  <c-layout>
    <c-header>
      <c-launch></c-launch>
      <c-box-skin>
        <c-search></c-search>
      </c-box-skin>
    </c-header>

    <c-content class="home__content">
      <c-box-skin>
        <c-row pt8 pb18 pl12 pr12>
          <c-col :span="6" v-for="(item, index) in promotionList" :key="index">
            <c-box-center>
              <c-magazine :image="item.image" radius4 class="promotion">
                <p text-c fs28 font-tertiary ma0 class="promotion__title">
                  {{ item.title }}
                </p>
              </c-magazine>
            </c-box-center>
          </c-col>
        </c-row>
      </c-box-skin>

      <!-- 列表导航  -->
      <c-box-skin class="nav">
        <div
          class="nav__item"
          v-for="(item, index) in categoryList"
          :key="index"
          pt10
          pb10
        >
          <c-box-center>
            <img
              :src="item.image"
              alt="navItemImg"
              class="nav__item--img"
              pb10
            />
          </c-box-center>
          <p text-c lh1 ma0>{{ item.title }}</p>
        </div>
      </c-box-skin>

      <!-- 商品列表 -->
      <c-row class="good" pa12>
        <c-col span="12">
          <div
            class="good__item"
            v-for="(item, index) in brandList[0].list"
            radius4
            mb12
            mr6
            bg-secondary
          >
            <img :src="item.image" alt="" />
            <div class="good__box">
              <p ellipsis-2 ma0>{{ item.des }}</p>
              <c-columns mt10>
                <img
                  :src="item.avatarImage"
                  class="good__avatarImage"
                  circle
                  oh
                  pr10
                  alt="avatarImage"
                />
                <span ellipsis-1>{{ item.avatarDes }}</span>
              </c-columns>
            </div>
          </div>
        </c-col>
        <c-col span="12">
          <div
            class="good__item"
            v-for="(item, index) in brandList[1].list"
            radius4
            mb12
            ml6
            bg-secondary
          >
            <img :src="item.image" alt="" />
            <div class="good__box">
              <p ellipsis-2 ma0>{{ item.des }}</p>
              <c-columns mt10>
                <img
                  :src="item.avatarImage"
                  class="good__avatarImage"
                  circle
                  oh
                  pr10
                  alt="avatarImage"
                />
                <span ellipsis-1>{{ item.avatarDes }}</span>
              </c-columns>
            </div>
          </div>
        </c-col>
      </c-row>
    </c-content>

    <c-footer>
      <c-footer-nav :list="list"></c-footer-nav>
    </c-footer>
  </c-layout>
</template>

<script>
// import CAvatar from '@/components/avatar';
// import { Swipe, SwipeItem } from '@/components/swipe';
import { onMounted, reactive, toRefs } from 'vue';
import { getRecommendatoryCategorys, getBanners, getBrandVideos, getPromotions } from '@/api/mall';
import { getChats } from '@/api/me';
import { useRouter } from 'vue-router';
// import Toast from 'vant/lib/toast';
export default {
  name: "MallStore",
  setup() {
    const router = useRouter();
    const data = reactive({
      isShow: false,
      categoryList: [],
      swipeList: [],
      brandList: [
        { list: [] },
        { list: [] }
      ],
      promotionList: []
    })

    const goGoods = (id, title) => {
      router.push({ path: '/mall/goods', query: { id: id, des: title } })
    }

    const goChat = () => {
      getChats().then(res => {
        // Toast(res.data);
      })
    }

    onMounted(() => {

      //   Toast.loading({
      //     message: '加载中...',
      //     forbidClick: true
      //   });

      getPromotions().then((res) => {
        data.promotionList = res.data;
      })

      getRecommendatoryCategorys().then((res) => {
        data.categoryList = res.data;
      })

      getBanners().then((res) => {
        data.swipeList = res.data;
      })

      getBrandVideos().then((res) => {
        data.brandList = res.data;
      })

    })

    const list = [
      {
        path: '/mall/home',
        text: '首页',
      }, {
        path: '/mall/store',
        text: '商城',
        active: true
      }, {
        path: '/live/home',
        text: '直播'
      }, {
        path: '/me/me',
        text: '我'
      }
    ];

    return {
      ...toRefs(data),
      list,
      goGoods,
      goChat
    }
  }
}
</script>

<style lang="scss">
@include b(home__content) {
  padding-bottom: 100px;
}

@include b(promotion) {
  @include dimensions(165px);
  @include e(title) {
    width: 100%;
    @include position(absolute, bottom 5px);
  }
}

@include b(nav) {
  @include e(item) {
    width: 20%;
    display: inline-block;
    flex-direction: row-reverse;
    @include m(img) {
      @include dimensions(100px);
    }
  }
}

@include b(good) {
  @include e(item) {
    overflow: hidden;
  }
  @include e(box) {
    padding: 24px 12px;
    span {
      font-weight: 800;
      flex: 1;
    }
  }
  @include e(avatarImage) {
    @include dimensions(50px);
  }
}

@include b(main) {
  @include e(footer) {
    height: 100px;
    @include m(active) {
      color: $color-text-quaternary;
    }
  }
}
</style>

