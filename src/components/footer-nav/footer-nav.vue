<template>
  <c-box-skin type="top">
    <c-row>
      <c-col
        :span="24 / list.length"
        v-for="(item, index) in list"
        :key="index"
      >
        <c-box-center class="c__footer" fs32>
          <router-link
            :to="item['path']"
            :class="{ 'c__footer--active': item.active }"
          >
            {{ item["text"] }}
          </router-link>
        </c-box-center>
      </c-col>
    </c-row>
  </c-box-skin>
</template>

<script>
export default {
  name: "CFooterNav",
  props: {
    list: {
      type: Object,
      default: function () {
        return [];
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@include b(c) {
  @include e(footer) {
    height: 100px;
    a {
      color: #333333;
    }
    @include m(active) {
      color: $color-text-quaternary !important;
    }
  }
}
</style>
