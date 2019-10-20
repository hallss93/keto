<template>
  <a href="#" class="btn btn-primary" data-name="seemore" name="email">
    <span>{{title}}</span>
  </a>
</template>
<script>
export default {
  name: "KetoButtonTag",
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>