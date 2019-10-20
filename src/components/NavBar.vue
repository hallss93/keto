<template>
  <nav class="mainNavbar navbar navbar-expand-lg" style="display:block" :style="styles">
    <div class="container">
      <a class="navbar-brand" :style="brand_style" href="/">
        <img v-if="back" src="@/assets/images/icons/back.svg" alt="Back" class="btn-back" />
        <img src="@/assets/images/logo.svg?v2" alt="KetoCycle.Diet" class="regular-logo" />
      </a>
    </div>
  </nav>
</template>
<script>
export default {
  name: "KetoNavBar",
  props: {
    gender: {
      type: String,
      default: ""
    },
    gender_name: {
      type: String,
      default: ""
    },
    styles: {
      type: Object
    },
    brand_style: {
      type: Object
    },
    back: {
      type: Boolean,
      default: true
    }
  }
};
</script>
<style scoped>
h2 {
  font-family: Karla, Arial;
}
</style>