<template>
  <div id="landing">
    <div class="container">
      <img src="../assets/images/logo.svg?v2" alt="KetoCycle.Diet" class="regular-logo" />
      <h1>Get your personalized 28-day Keto diet</h1>
      <div class="gender-description">Select your gender:</div>
      <div class="gender-buttons">
        <router-link :to="{name:'quiz2', params:{gender:'female'}}">
          <keto-button gender="female" gender_name="Female"></keto-button>
        </router-link>
        <router-link :to="{name:'quiz2', params:{gender:'male'}}">
          <keto-button gender="male" gender_name="Male"></keto-button>
        </router-link>
      </div>
      <div class="row">
        <div class="col-xs-6 links col-lg-4">
          <router-link :to="{name:'faq'}">F.A.Q</router-link>
          <router-link :to="{name:'myplan'}">
            <strong>Access my plan</strong>
          </router-link>
          <router-link :to="{name:'general-conditions'}">General conditions</router-link>
          <router-link :to="{name:'data-protection-policy'}">Data protection policy</router-link>
          <router-link :to="{name:'contacts'}">Contact us</router-link>
        </div>
        <div class="col-xs-6 col-lg-4">
          <img src="../assets/images/single-color-logo.svg" class="footer-logo" />
        </div>
        <div class="col-xs-12 col-lg-4 copyright">
          2019 © All rights reserved
          <div class="disclaimer">DISCLAIMER: Results may vary from person to person</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KetoButton from "./../components/Button";
export default {
  name: "home",
  components: { KetoButton }
};
</script>