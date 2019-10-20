<template>
  <button v-if="max" class="btn btn-primary scroll-btn">
    <span>{{title}}</span>
  </button>
  <a v-else href="#" class="btn btn-primary" data-name="seemore" name="email">
    <span>{{title}}</span>
  </a>
</template>
<script>
export default {
  name: "KetoButtonMax",
  props: {
    max:{
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ""
    }
  }
};
</script>