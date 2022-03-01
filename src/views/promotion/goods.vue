<template>
  <div class="store">
    <c-box-skin mh24 mb18 radius6 oh v-for="(item, index) in list" :key="index">
      <c-columns>
        <c-magazine :image="item['image']" class="store__image"></c-magazine>
        <div flex1 pv24 ph18>
          <div mb30 fs28>{{ item["title"] }}</div>
          <c-columns mb20>
            <div class="store__progress"></div>
            <span ml10>剩余{{ item["progress"] }}件</span>
          </c-columns>
          <c-columns>
            <div class="store__price">
              <div class="store__price--price" mb8>
                <span font-quaternary
                  >¥<b fs40 fontW400 mr4>{{ item["price"] }}</b></span
                >
                <span decoration class="store__price--oldprice"
                  >¥{{ item["oldprice"] }}</span
                >
              </div>
              <div class="store__price--tips">{{ item["tips"] }}</div>
            </div>
            <c-box-center class="store__buy" mt32 font-tertiary
              >立即购买</c-box-center
            >
          </c-columns>
        </div>
      </c-columns>
    </c-box-skin>
  </div>
</template>

<script>
export default {
  name: 'CGoods',
  props: {
    list: Array,
  }
}
</script>

<style lang="scss" scoped>
@include b(store) {
  margin-bottom: 118px;
  @include e(image) {
    @include dimensions(246px);
  }
  @include e(progress) {
    @include dimensions(280px, 28px);
    border-radius: (28px/2);
    background-color: #ffd9de;
    flex: 1;
  }
  @include e(price) {
    flex: 1;
    @include m(oldprice) {
      color: #999;
    }
    @include m(tips) {
      color: #999;
    }
  }
  @include e(buy) {
    @include dimensions(182px, 54px);
    border-radius: (54px/2);
    background-color: #e95160;
  }
}
</style>
