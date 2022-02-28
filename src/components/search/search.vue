<template>
  <c-columns>
    <hamburger-button
      theme="two-tone"
      size="24"
      :fill="['#9b9b9b', '#9b9b9b']"
      :strokeWidth="2"
      ml30
      mr20
    />
    <c-columns class="search" mt14 mb14 radius4>
      <search
        theme="outline"
        size="16"
        fill="#9b9b9b"
        :strokeWidth="3"
        ml20
        mr10
      />
      <span>睡衣</span>
    </c-columns>
    <more-two
      theme="two-tone"
      size="24"
      :strokeWidth="2"
      :fill="['#9b9b9b', '#ffffff']"
      ml20
      mr30
    />
  </c-columns>
</template>

<script>
import { HamburgerButton, MoreTwo, Search } from '@icon-park/vue-next';
export default {
  name: "CSearch",
  components: { HamburgerButton, MoreTwo, Search }
}
</script>

<style lang="scss">
@include b(search) {
  flex: 1;
  @include dimensions($height: 60px);
  box-shadow: 0 0 8px #ff5777;
  background-color: $background-color-primary;
}
</style>
