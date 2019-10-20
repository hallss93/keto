<template>
  <div class="subheader" style="display:block;">
    <div class="progress-bar">
      <div class="progress" style="width:100%;"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SubHeader",
  props: {
    gender: {
      type: String,
      default: ""
    },
    gender_name: {
      type: String,
      default: ""
    }
  }
};
</script>