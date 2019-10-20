<template>
  <div class="covered">
    <div class="heading">{{heading}}</div>
    <div class="covered-logos">
      <slot name="body"/>
    </div>
  </div>
</template>
<script>
export default {
  name: "KetoButtonMax",
  props: {
    heading: {
      type: String,
      default: ""
    }
  }
};
</script>