<template>
  <c-layout>
    <c-content>
      <!-- 今日必抢 -->
      <c-header class="header" pa24>
        <c-magazine
          radius6
          ph12
          pv20
          image="https://s10.mogucdn.com/mlcdn/c45406/201015_45l80j09ebiaki64i8d5309j1hg83_702x426.png"
        >
          <c-columns>
            <span mr14 font-tertiary fs40 font-feichi>今日必抢</span>
            <c-box-center class="header__tips" font-quaternary bg-primary>
              一件也是批发价
            </c-box-center>
          </c-columns>

          <c-row gutter="6" mt20>
            <c-col span="8" v-for="(item, index) in hotGoodList" :key="index">
              <c-box-skin radius4 class="good">
                <c-magazine :image="item.image" class="good__image">
                  <c-box-center
                    class="good__number"
                    bga5
                    font-tertiary
                    pv4
                    ph10
                    >{{ item.sell }}</c-box-center
                  >
                </c-magazine>
                <div ellipsis-1 pa8 class="good__des">{{ item.des }}</div>
                <c-columns pb20>
                  <div pl4 flex1>
                    <div font-quaternary fontW600>{{ item.price }}</div>
                    <div decoration font-secondary>{{ item.oldprice }}</div>
                  </div>
                  <c-box-center mr10 circle font-tertiary class="good__buy"
                    >抢</c-box-center
                  >
                </c-columns>
              </c-box-skin>
            </c-col>
          </c-row>
        </c-magazine>
      </c-header>

      <!-- 时间轴 -->
      <c-magazine
        image="https://s10.mogucdn.com/mlcdn/c45406/201104_872b0le054e822e6hh4fcjf95fl92_750x117.png"
      >
        <c-columns class="time">
          <c-box-center
            v-for="(item, index) in time"
            :key="index"
            class="time__container"
          >
            <b
              fs34
              font-tertiary
              class="time__t"
              :class="{ 'time__t--active': item.active }"
              >{{ item.t }}</b
            >
            <c-box-center
              font-tertiary
              class="time__status"
              :class="{ 'time__status--active': item.active }"
              >{{ item.status }}</c-box-center
            >
          </c-box-center>
        </c-columns>
      </c-magazine>

      <!-- 倒计时 -->
      <c-box-center class="count">
        <span pr8>——</span>
        <span pr8>距离本场活动开始还有</span>
        <c-box-center bga10 radius4 font-tertiary class="count__time"
          >01</c-box-center
        >
        <span ph8>:</span>
        <c-box-center bga10 radius4 font-tertiary class="count__time"
          >01</c-box-center
        >
        <span ph8>:</span>
        <c-box-center bga10 radius4 font-tertiary class="count__time"
          >01</c-box-center
        >
        <span pl8>——</span>
      </c-box-center>

      <c-goods :list="fastBuyGoods"></c-goods>
    </c-content>

    <c-footer><c-footer-nav :list="footerList"></c-footer-nav></c-footer>
  </c-layout>
</template>

<script>
import { getHotGoods, getFastBuyGoods } from '@/api/promotion';
import { onMounted, reactive, toRefs } from 'vue';
import CGoods from './goods';
// import Toast from 'vant/lib/toast';

export default {
  name: "FastBuy",
  components: { CGoods },
  setup() {
    const data = reactive({
      hotGoodList: [],
      hour: '',
      min: '',
      second: '',
      time: 10000000,
      active: 0,
      fastBuyGoods: []
    });
    let t = '';

    const timeDown = () => {
      const nowTime = new Date();
      const endTime = new Date();
      let leftTime = parseInt((endTime.getTime() + data.time - nowTime.getTime()) / 1000)
      let d = parseInt(leftTime / (24 * 60 * 60))
      let h = formate(parseInt(leftTime / (60 * 60) % 24))
      let m = formate(parseInt(leftTime / 60 % 60))
      let s = formate(parseInt(leftTime % 60))
      data.hour = h;
      data.min = m;
      data.second = s;
    }

    const formate = (time) => {
      if (time >= 10) {
        return time
      } else {
        return `0${time}`
      }
    }

    const changeTime = (i, t) => {
      data.active = i;
      restart();
      getFastBuyGoods({ time: t }).then((res) => {
        data.fastBuyGoods = res.data;
      })
    }

    const start = () => {
      timeDown();
      t = setInterval(() => {
        data.time -= 1000;
        timeDown()
      }, 1000)
    }

    const restart = () => {
      data.time = 10000000;
      clearInterval(t);
      start();
    }

    onMounted(() => {

      //   Toast.loading({
      //     message: '加载中...',
      //     forbidClick: true
      //   });

      start();
      getHotGoods().then((res) => {
        data.hotGoodList = res.data;
      })

      getFastBuyGoods({ time: '00:00' }).then((res) => {
        data.fastBuyGoods = res.data;
      })
    })

    const footerList = [
      {
        path: '/promotion/fast-buy',
        text: '限时快抢',
        active: true
      }, {
        path: '/promotion/last-crazy',
        text: '即将售罄'
      }, {
        path: '/promotion/my-reminder',
        text: '我的快抢'
      }
    ];

    const time = [
      {
        t: '00:00',
        status: '未开抢',
        active: true
      }, {
        t: '03:00',
        status: '未开抢'
      }, {
        t: '06:00',
        status: '未开抢'
      }, {
        t: '09:00',
        status: '未开抢'
      }, {
        t: '12:00',
        status: '未开抢'
      }, {
        t: '15:00',
        status: '未开抢'
      }, {
        t: '18:00',
        status: '未开抢'
      }, {
        t: '21:00',
        status: '未开抢'
      }, {
        t: '24:00',
        status: '未开抢'
      }
    ]

    return {
      ...toRefs(data),
      footerList,
      time,
      changeTime
    }
  }
}
</script>

<style lang="scss" scoped>
@include b(header) {
  background: url("https://s10.mogucdn.com/mlcdn/c45406/201103_154d6c9b491c6d29af5l9a5487h6i_750x225.png")
    no-repeat top center/contain;
  @include e(tips) {
    @include dimensions(200px, 34px);
    border-radius: 30px 17px 17px 0/30px 17px 17px 0;
  }
}

@include b(good) {
  @include e(image) {
    @include dimensions(100%, 214px);
  }
  @include e(number) {
    border-radius: 0 10px 10px 0 / 0 10px 10px 0;
    @include position(absolute, left 0 bottom 10px);
  }
  @include e(des) {
    box-sizing: border-box;
  }
  @include e(buy) {
    @include dimensions(44px);
    background-image: linear-gradient(-154deg, #ff5d74, #ed2c48);
  }
}

@include b(time) {
  overflow: auto;
  white-space: nowrap;
  scroll-snap-type: x mandatory;
  @include e(container) {
    scroll-snap-align: center;
    scroll-snap-stop: always;
    @include dimensions(160px, 110px);
    flex-direction: column;
    flex-shrink: 0;
  }
  @include e(t) {
    opacity: 0.8;
    @include m(active) {
      opacity: 1;
    }
  }
  @include e(status) {
    @include dimensions(120px, 36px);
    border-radius: (36px/2);
    opacity: 0.8;
    @include m(active) {
      opacity: 1;
      background-image: linear-gradient(-126deg, #f7e6d4 7%, #fdd09f);
      color: #cd2123;
    }
  }
}

@include b(count) {
  height: 86px;
  color: #999;
  @include e(time) {
    @include dimensions(40px);
  }
}
</style>
