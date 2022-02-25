<template>
  <div class="home">
    <header>css架构</header>
    <input type="text" value="123" />
    <c-row>
      <c-col span="8">span: 8</c-col>
      <c-col span="8">span: 8</c-col>
      <c-col span="8">span: 8</c-col>
    </c-row>
  </div>
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
.home {
  header {
    width: 100px;
    height: 100px;
    background-color: gray;
    color: $color-primary;
    @include box-center(center, center);
  }
  input {
    border: $border-base;
  }
}
</style>
