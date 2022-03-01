<template>
  <c-box-skin type="top">
    <c-row>
      <c-col
        :span="24 / list.length"
        v-for="(item, index) in list"
        :key="index"
      >
        <c-box-center
          class="c__footer"
          fs32
          :class="{ 'c__footer--active': item.active }"
          >{{ item.text }}</c-box-center
        >
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
    @include m(active) {
      color: $color-text-quaternary;
    }
  }
}
</style>
