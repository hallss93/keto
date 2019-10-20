<template>
  <div class="b-months">
    <div class="b-stats--header">
      <p>{{month1.name}}</p>
      <p>
        <b>{{month2.name}}</b>
      </p>
    </div>
    <div class="b-stats--results">
      <div class="b-stats--results--from">
        {{month1.value}}
        <span>kg</span>
      </div>
      <div class="b-stats--results--to">
        {{month2.value}}
        <span>kg</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "KetoButtonMax",
  props: {
    month1: {
      type: Object,
      default: () => {
        return { name: "Month", value: 0 };
      }
    },
    month2: {
      type: Object,
      default: () => {
        return { name: "Month", value: 0 };
      }
    }
  }
};
</script>