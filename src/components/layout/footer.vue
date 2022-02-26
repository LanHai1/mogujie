<template>
  <footer class="c-footer">
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: "cFooter"
}
</script>

<style lang="scss">
@include b(c-footer) {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 10;
}
</style>
