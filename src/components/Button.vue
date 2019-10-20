<template>
  <button
    class="btn"
    :class="{'btn-male':gender=='male', 'btn-female':gender=='female'}"
    :data-gender="gender"
  >
    <span class="icon">
      <i :class="gender"></i>
    </span>
    {{gender_name}}
    <i v-if="gender=='male'" class="forward-male forward"></i>
    <i v-if="gender=='female'" class="forward-female forward"></i>
  </button>
</template>
<script>
export default {
  name: "KetoButton",
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