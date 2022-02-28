<template>
  <c-layout class="home__layout">
    <c-header>
      <c-launch></c-launch>
    </c-header>

    <c-content style="background: #ff0">
      <!-- <p v-for="(item, index) in list" :key="index" fs12>{{ item }}</p> -->
    </c-content>

    <c-footer style="background: #666">footer</c-footer>
  </c-layout>

  <!-- <c-layout horizontal class="home__layout">
    <c-aside style="background: #ff5777">123</c-aside>
    <c-content>
      <div style="height: 2000px">
        <div class="home__box" bg-tertiary circle></div>
        <p v-for="(item, index) in list" :key="index" fs12>{{ item }}</p>
      </div>
    </c-content>
  </c-layout> -->
</template>

<script>
import { getRecommendatoryCategorys } from "@/api/mall.js"
import { onMounted, reactive, toRefs } from "vue"
export default {
  name: 'Home',
  setup() {
    const data = reactive({
      list: []
    })
    onMounted(() => {
      getRecommendatoryCategorys().then(res => {
        data.list = res.data
      })
    })
    return {
      ...toRefs(data),
    }
  }
}
</script>

<style lang="scss">
@include b(home) {
  @include e(layout) {
  }
  @include e(box) {
    width: 50px;
    height: 50px;
  }
}
</style>
