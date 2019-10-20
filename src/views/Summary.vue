<template>
  <div>
    <keto-nav-bar :styles="{'margin-top':'10px'}" :brand_style="{'margin': 'auto'}" :back="false"></keto-nav-bar>
    <div id="app" class="results-2 results-3 c-content" data-gender="male">
      <div class="summary-container c-maincontent">
        <div class="container container-intro">
          <h3 style="max-width: 740px;">Get your personalized Keto Diet</h3>
          <p class="subheading">Based on your answers, you will be...</p>
          <div class="b-blocks-featured">
            <div class="b-result b-result--weight">
              <div class="b-stats">
                <div class="b-stats--header">
                  <p>62</p>
                  <p>61</p>
                  <p class="e-special">
                    60
                    <span>kg</span>
                  </p>
                  <p>59</p>
                  <p>58</p>
                </div>
                <div class="b-stats--footer">
                  <p>
                    by
                    <span class="e-month">October</span>,
                    <span class="e-year">2019</span>
                  </p>
                </div>
              </div>
              <graph :month1="month1" :month2="month2" />
            </div>
            <div class="b-result b-result--text">
              <div class="b-stats--header">
                87
                <span>%</span>
              </div>
              <div class="b-stats--footer">
                Similar people
                <b>lost</b> more than
                <span class="e-special">10</span>
                <b>kg</b>
                on Keto
              </div>
            </div>
            <div class="b-result b-result--firstweek">
              <div class="b-stats--header">
                <div class="b-days">
                  <div class="b-day">
                    <span class="e-name">Mon</span>
                    <span class="e-number">1</span>
                  </div>
                  <div class="b-day">
                    <span class="e-name">Tue</span>
                    <span class="e-number">2</span>
                  </div>
                  <div class="b-day">
                    <span class="e-name">Web</span>
                    <span class="e-number">3</span>
                  </div>
                  <div class="b-day">
                    <span class="e-name">Thu</span>
                    <span class="e-number">4</span>
                  </div>
                  <div class="b-day">
                    <span class="e-name">Fri</span>
                    <span class="e-number">5</span>
                  </div>
                  <div class="b-day">
                    <span class="e-name">Sat</span>
                    <span class="e-number">6</span>
                  </div>
                  <div class="b-day">
                    <span class="e-name">Sun</span>
                    <span class="e-number">7</span>
                  </div>
                </div>
              </div>
              <div class="b-stats--footer">
                <div class="e-special">
                  <span>-3</span> kg
                </div>
                <p>After first week</p>
              </div>
            </div>
            <keto-button-max title="Get your plan" />
          </div>
          <div class="summary">
            <h2>Personal summary</h2>
            <div class="row">
              <div class="col-12 col-md-6">
                <div id="bmi" class="b-result results-box">
                  <div class="e-row">
                    <span class="e-value">
                    </span>
                    <span class="e-name">Overweight</span>
                  </div>
                  <div class="e-row is-selected">
                    <span class="e-value">
                      <span class="e-number">23.94</span> BMI
                    </span>
                    <span class="e-name">Normal</span>
                  </div>
                  <div class="e-row">
                    <span class="e-value">
                    </span>
                    <span class="e-name">Underweight</span>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div id="intake" class="b-result results-box">
                  <div class="e-heading">Daily calorie intake</div>
                  <div class="e-value">
                    <div class="daily-norm">
                      <span>1125-1275</span>
                    </div>
                  </div>
                  <div class="e-measurement">kCal</div>
                  <img src="https://ketocycle.diet/images/daily-calorie.png" alt />
                </div>
              </div>
              <div class="col-12 col-md-6 cr">
                <div id="body-parts" class="b-result results-box">
                  <div class="e-heading">Body change estimations</div>
                  <img src="https://ketocycle.diet/images/body-change-estimations.png" alt />
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div id="meals" class="results-box">
                  <div
                    class="meal-count"
                    style="max-width: 240px;width: 100%;margin: auto;left: 0;right: 0;"
                  >
                    <span>1000+</span>
                  </div>
                  <img src="./../assets/images/unique-recipes.png" />
                  <p>Unique food variations for you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <covered heading="Keto Diet was covered in">
          <template slot="body">
            <img src="../assets/images/covered-1.png" alt="Health Insider" />
            <img src="../assets/images/covered-2.png" alt="Business Insider" />
            <img src="../assets/images/covered-3.png" alt="New york times" />
          </template>
        </covered>
        <div class="container" id="summary-footer">
          <div class="row">
            <div class="container">
              <div class="b-ourpromise">
                <h2>OUR PROMISE</h2>
                <p class="e-text">
                  We believe in a balanced way to lose weight and keep the weight off. We know that most
                  of the diets or weight loss programs that you have tried in the past don’t work - they
                  are just too hard to follow. Enormous food cravings, friends that visit you with a
                  bottle of wine, that freshly baked cheesecake… Everything affects your journey and if
                  your diet is not easy-to-follow, you are not going to achieve your results.
                  <br />
                  <br />Don’t blame yourself. It’s really hard. That’s why our nutritionists and personal
                  coaches work around the clock to prepare the most personalized plans you love. We want
                  to make sure that it becomes a part of your life. We don’t change habits, we help you to
                  improve them.
                  <br />
                  <br />Try it out and we guarantee you will be satisfied.
                </p>
                <div
                  class="b-namesurname"
                  style="display:flex;align-items: center;justify-content: flex-start;"
                >
                  <div class="b-namesurname-namesurname" style="padding-right: 30px;">
                    <p class="e-heading">Head of Nutrition,</p>
                    <p class="e-subtitle">Christine Ellis</p>
                  </div>
                  <img
                    style="margin-left: 0;margin-right: auto;left: 0;position: relative;    margin-top: 30px;"
                    src="https://ketocycle.diet/images/signature.png"
                    alt
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container e-actionbar">
          <div class="e-actionbar-inner" style="max-width: 400px;margin: auto;margin-bottom: 60px;">
            <keto-button-link title="Get it now" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KetoNavBar from "./../components/NavBar";
import KetoButtonMax from "./../components/ButtonMax";
import KetoButtonLink from "./../components/ButtonLink";
import Covered from "./../components/Covered";
import Graph from "./../components/Graph";
export default {
  name: "quiz2",
  data() {
    return {
      month1: {
        name: "Nov",
        value: 67
      },
      month2: {
        name: "Dec",
        value: 60
      },
      gender: this.$route.params.gender
    };
  },
  components: { KetoNavBar, KetoButtonMax, KetoButtonLink, Covered, Graph },
  created() {
    $("body").removeClass("desktop-bg");
  }
};
</script>
<style scoped src="./../assets/css/summary.css">
</style>