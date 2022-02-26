<template>
  <!-- <c-layout class="home__layout">
    <c-header style="background: #ff5777">header</c-header>

    <c-content style="background: #ff0">
      <div style="height: 2000px">123123</div>
    </c-content>

    <c-footer style="background: #666">footer</c-footer>
  </c-layout> -->

  <c-layout horizontal class="home__layout">
    <c-aside style="background: #ff5777">123</c-aside>
    <c-content style="background: #ff0">
      <div style="height: 2000px">123123</div>
    </c-content>
  </c-layout>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
@include b(home) {
  @include e(layout) {
    height: 100vh;
  }
}
</style>
