<template>
  <div id="my-plan">
    <div class="desktop-container">
      <div class="container plan plan-recovery">
        <img src="@/assets/images/logo.svg?v2" alt="KetoCycle.Diet" class="regular-logo" />
        <h3>My plan</h3>
        <p>If you already bought, but didn't receive your plan, lost your plan access link or face any other problem with your KetoCycle meal plan - enter your email address and we will provide you with a solution.</p>
        <input type="text" class="form-control email" placeholder="Enter your email address" />
        <div class="plan-status"></div>
        <button
          @click="lookup"
          type="button"
          class="btn btn-sm btn-primary plan-lookup"
        >Lookup my plan</button>
        <br />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyPlan",
  methods: {
    lookup() {
      alert("Sem ação");
    }
  }
};
</script>