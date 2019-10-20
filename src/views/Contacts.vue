<template>
  <div>
    <keto-nav-bar></keto-nav-bar>
    <sub-header></sub-header>
    <div class="container">
      <div class="b-contacts">
        <div class="b-contacts-contacts">
          <h2>Contact us</h2>
          <div class="text-wrapper">
            <div class="col-6">
              <strong>Company</strong>
              <br />KetoCycle.Diet.
              <br />
              <strong>Company code</strong>
              <br />303157579
              <br />
              <strong>Address of registration</strong>
              <br />Ramybės g. 4-70, Vilnius
              <br />Lithuania
              <br />European Union
              <br />
            </div>
            <div class="col-6">
              <strong>Address</strong>
              <br />Antakalnio g. 17, Vilnius
              <br />Lithuania
              <br />European Union
              <br />
              <strong>Email</strong>
              <br />hello@ketocycle.diet
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import KetoNavBar from "./../components/NavBar";
import SubHeader from "./../components/SubHeader";
export default {
  name: "ProtectionPolicy",
  components: { KetoNavBar, SubHeader }
};
</script>
<style scoped src="../assets/css/generalpage.css">
</style>