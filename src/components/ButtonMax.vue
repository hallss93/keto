<template>
  <button class="btn btn-primary scroll-btn">
    <span>{{title}}</span>
  </button>
</template>
<script>
export default {
  name: "KetoButtonMax",
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>