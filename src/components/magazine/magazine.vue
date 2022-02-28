<template>
  <div
    :style="
      'position: relative; background: url(' +
      image +
      ') center; background-size: cover;'
    "
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CMagazine",
  props: {
    image: { type: String }
  }
}
</script>

<style lang="scss">
</style>
