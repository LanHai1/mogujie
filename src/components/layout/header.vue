<template>
  <header class="c-header" :class="fixed && 'c-header--fixed'">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: "CHeader",
  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@include b(c-header) {
  @include m(fixed) {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
  }
}
</style>
