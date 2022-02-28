<template>
  <div class="c-box-center">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CBoxCenter"
}
</script>

<style lang="scss">
@include b(c-box-center) {
  @include box-center;
}
</style>
