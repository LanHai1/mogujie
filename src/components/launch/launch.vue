<template>
  <c-box-skin type="bottom">
    <c-columns class="c-launch">
      <img
        class="c-launch__logo"
        src="https://s10.mogucdn.com/mlcdn/c45406/190219_4ii32ja6gi9hdeb56k2487ce7eh24_60x60.png"
        ml30
        mr20
      />
      <div class="c-launch__download">
        <span>蘑菇街 总有高手帮你挑</span>
        <c-columns mt10>
          <a>star</a>
          <span ml20>超过2亿用户已下载</span>
        </c-columns>
      </div>
      <c-box-center class="c-launch__button" bg-tertiary font-tertiary radius4
        >打开App</c-box-center
      >
    </c-columns>
  </c-box-skin>
</template>

<script>
export default {
  name: "CLaunch"
}
</script>

<style lang="scss">
@include b(c-launch) {
  @include dimensions($height: 94px);
  @include e(logo) {
    @include dimensions(60px);
  }
  @include e(download) {
    span {
      &:first-child {
        color: #000;
      }
      &:last-child {
        color: #8e8e92;
      }
    }
  }
  @include e(button) {
    @include dimensions(150px, 50px);
    margin-left: 120px;
  }
}
</style>
