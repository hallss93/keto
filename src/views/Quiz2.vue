<template>
  <div id="desktop-container" class="desktop-container">
    <keto-nav-bar></keto-nav-bar>
    <sub-header></sub-header>
    <div class="container">
      <div
        id="step-1"
        class="step active"
        data-mode="question"
        data-type="familiar_question"
        data-answer="single"
      >
        <div class="question">How familiar are you with the Keto diet?</div>
        <div class="fancy-radio-holder">
          <input type="hidden" name="answer" value="0" />
          <div class="fancy-radio" data-answer="3">
            Expert
            <div class="status"></div>
            <div class="status-icon">-</div>
          </div>
          <div class="fancy-radio" data-answer="2">
            I've heard a thing or two
            <div class="status"></div>
            <div class="status-icon">-</div>
          </div>
          <div class="fancy-radio" data-answer="1">
            Beginner
            <div class="status"></div>
            <div class="status-icon">-</div>
          </div>
        </div>
        <div class="error-msg"></div>
        <button class="btn btn-primary btn-next-step">Next</button>
      </div>
      <div
        id="step-2"
        class="step info-slide"
        style="display:none;"
        data-mode="question"
        data-answer="none"
      >
        <div class="question">What is Keto diet?</div>
        <p>The ketogenic diet is a very low-carb, high-fat diet. To achieve positive results, this diet has to be very low in carbohydrates, high in dietary fat and include a moderate amount of proteins. This reduction in carbs puts your body into a metabolic state called ketosis. When this happens, your body becomes incredibly efficient at burning fat for energy. Ketogenic diet can cause massive reductions in blood sugar, insulin levels and help with weight loss.</p>
        <h3 class="question">Benefits of keto diet:</h3>
        <ul>
          <li>
            <i class="la la-check-circle-o"></i>
            Weight loss
          </li>
          <li>
            <i class="la la-check-circle-o"></i>
            Reduced blood pressure
          </li>
          <li>
            <i class="la la-check-circle-o"></i>
            Slower ageing process
          </li>
          <li>
            <i class="la la-check-circle-o"></i>
            Improved sleep and mood
          </li>
          <li>
            <i class="la la-check-circle-o"></i>
            Increased energy efficiency
          </li>
        </ul>
        <button class="btn btn-primary btn-next-step">Got it</button>
      </div>
      <div
        id="step-3"
        class="step"
        style="display:none;"
        data-type="first_question"
        data-mode="question"
        data-answer="single"
      >
        <div class="question">How much time do you have for meal preparation each day?</div>
        <div class="fancy-radio-holder">
          <input type="hidden" name="answer" value="0" />
          <div class="fancy-radio" data-answer="1">
            Up to 30 minutes
            <div class="status"></div>
            <div class="status-icon">-</div>
          </div>
          <div class="fancy-radio" data-answer="2">
            Up to 1 hour
            <div class="status"></div>
            <div class="status-icon">-</div>
          </div>
          <div class="fancy-radio" data-anser="3">
            More than 1 hour
            <div class="status"></div>`
            <div class="status-icon">-</div>
          </div>
        </div>
        <div class="error-msg"></div>
        <button class="btn btn-primary btn-next-step">Next</button>
      </div>

      <div
        class="step"
        id="step-4"
        data-type="meat_question"
        style="display:none;"
        data-mode="question"
        data-answer="multiple"
      >
        <div class="question">Meat</div>
        <div
          class="question-description"
        >Please select which products you would like included in the plan?</div>
        <div class="fancy-checkbox-holder">
          <input type="hidden" name="answer" value="0" />
          <div class="fancy-radio with-icon" data-answer="chicken">
            <div class="icon">
              <i class="chicken"></i>
            </div>Chicken
            <div class="status"></div>
            <div class="status-icon">-</div>
          </div>
          <div class="fancy-radio with-icon" data-answer="pork">
            <div class="icon">
              <i class="pork"></i>
            </div>Pork
            <div class="status"></div>
            <div class="status-icon">-</div>
          </div>
          <div class="fancy-radio with-icon" data-answer="beef">
            <div class="icon">
              <i class="beef"></i>
            </div>Beef
            <div class="status"></div>
            <div class="status-icon">-</div>
          </div>
          <div class="fancy-radio with-icon" data-answer="fish">
            <div class="icon">
              <i class="fish"></i>
            </div>Fish
            <div class="status"></div>
            <div class="status-icon">-</div>
          </div>
          <div class="fancy-radio with-icon" data-answer="lamb">
            <div class="icon">
              <i class="lamb"></i>
            </div>Lamb
            <div class="status"></div>
            <div class="status-icon">-</div>
          </div>
          <div class="fancy-radio with-icon" data-answer="veal">
            <div class="icon">
              <i class="veal"></i>
            </div>Veal
            <div class="status"></div>
            <div class="status-icon">-</div>
          </div>
          <div class="fancy-radio with-icon" data-answer="vegetarian">
            I am vegetarian
            <div class="status"></div>
            <div class="status-icon">-</div>
          </div>
        </div>
        <div class="error-msg"></div>
        <button class="btn btn-primary btn-next-step">Next</button>
      </div>

      <div
        class="step"
        id="step-5"
        data-type="products_question"
        style="display:none;"
        data-mode="question"
        data-answer="multiple"
      >
        <div class="question">Products</div>
        <div
          class="question-description"
        >Please select which products you would like included in the plan?</div>
        <div class="fancy-checkbox-holder">
          <input type="hidden" name="answer" value="0" />
          <div class="fancy-radio with-icon" data-answer="onions">
            <div class="icon">
              <i class="onions"></i>
            </div>Onions
            <div class="status"></div>
            <div class="status-icon">-</div>
          </div>
          <div class="fancy-radio with-icon" data-answer="mushrooms">
            <div class="icon">
              <i class="mushroom"></i>
            </div>Mushrooms
            <div class="status"></div>
            <div class="status-icon">-</div>
          </div>
          <div class="fancy-radio with-icon" data-answer="eggs">
            <div class="icon">
              <i class="egg"></i>
            </div>Eggs
            <div class="status"></div>
            <div class="status-icon">-</div>
          </div>
          <div class="fancy-radio with-icon" data-answer="nuts">
            <div class="icon">
              <i class="nuts"></i>
            </div>Nuts
            <div class="status"></div>
            <div class="status-icon">-</div>
          </div>
          <div class="fancy-radio with-icon" data-answer="cheese">
            <div class="icon">
              <i class="cheese"></i>
            </div>Cheese
            <div class="status"></div>
            <div class="status-icon">-</div>
          </div>
          <div class="fancy-radio with-icon" data-answer="butter">
            <div class="icon">
              <i class="butter"></i>
            </div>Butter
            <div class="status"></div>
            <div class="status-icon">-</div>
          </div>
          <div class="fancy-radio with-icon" data-answer="milk">
            <div class="icon">
              <i class="milk"></i>
            </div>Milk
            <div class="status"></div>
            <div class="status-icon">-</div>
          </div>
          <div class="fancy-radio with-icon" data-answer="avocado">
            <div class="icon">
              <i class="avocado"></i>
            </div>Avocados
            <div class="status"></div>
            <div class="status-icon">-</div>
          </div>
          <div class="fancy-radio with-icon" data-answer="seafood">
            <div class="icon">
              <i class="seafood"></i>
            </div>Seafood
            <div class="status"></div>
            <div class="status-icon">-</div>
          </div>
          <div class="fancy-radio with-icon" data-answer="olives">
            <div class="icon">
              <i class="olives"></i>
            </div>Olives
            <div class="status"></div>
            <div class="status-icon">-</div>
          </div>
          <div class="fancy-radio with-icon" data-answer="capers">
            <div class="icon">
              <i class="capers"></i>
            </div>Capers
            <div class="status"></div>
            <div class="status-icon">-</div>
          </div>
          <div class="fancy-radio with-icon" data-answer="coconut">
            <div class="icon">
              <i class="coconut"></i>
            </div>Coconut
            <div class="status"></div>
            <div class="status-icon">-</div>
          </div>
          <div class="fancy-radio with-icon" data-answer="goat">
            <div class="icon">
              <i class="goat-cheese"></i>
            </div>Goat cheese
            <div class="status"></div>
            <div class="status-icon">-</div>
          </div>
        </div>
        <div class="error-msg"></div>
        <button class="btn btn-primary btn-next-step">Next</button>
      </div>
      <div
        id="step-6"
        class="step"
        data-type="howactive_question"
        style="display:none;"
        data-mode="question"
        data-answer="single"
      >
        <div class="question">How physically active are you?</div>
        <div class="fancy-radio-holder">
          <input type="hidden" name="answer" value="0" />
          <div class="fancy-radio" data-answer="3">
            Workout hero (3-5 workouts / week)
            <div class="status"></div>
            <div class="status-icon">-</div>
          </div>
          <div class="fancy-radio" data-answer="2">
            Light-mode (1-2 workouts /week)
            <div class="status"></div>
            <div class="status-icon">-</div>
          </div>
          <div class="fancy-radio" data-answer="1">
            A newbie (Just starting)
            <div class="status"></div>
            <div class="status-icon">-</div>
          </div>
        </div>
        <div class="error-msg"></div>
        <button class="btn btn-primary btn-next-step">Next</button>
      </div>
      <div
        id="step-7"
        class="step"
        style="display:none;"
        data-type="willing_question"
        data-mode="question"
        data-answer="single"
      >
        <div class="question">How willing are you to lose weight?</div>
        <div class="fancy-radio-holder">
          <input type="hidden" name="answer" value="0" />
          <div class="fancy-radio" data-answer="1">
            I just want to try the Keto diet
            <div class="status"></div>
            <div class="status-icon">-</div>
          </div>
          <div class="fancy-radio" data-answer="2">
            I want to try it and lose some weight
            <div class="status"></div>
            <div class="status-icon">+</div>
          </div>
          <div class="fancy-radio" data-answer="3">
            I want to lose the maximum amount of weight
            <div class="status"></div>
            <div class="status-icon">-</div>
          </div>
        </div>
        <div class="error-msg"></div>
        <button class="btn btn-primary btn-next-step">Next</button>
      </div>
      <div
        id="step-8"
        class="step"
        style="display:none;"
        data-type="units_question"
        data-mode="question"
      >
        <div class="units-toggler">
          <button class="btn active" data-type="imperial">Imperial</button>
          <button class="btn" data-type="metric">Metric</button>
        </div>
        <div class="question">Measurements</div>
        <div class="input-holder">
          <input id="age-value" type="number" name="age" placeholder="Age" />
          <div class="units">years</div>
        </div>
        <div class="metric-height" style="display:none;">
          <div class="input-holder">
            <input id="metric-height-value" type="number" name="height" placeholder="Height" />
            <div class="units height">cm</div>
          </div>
        </div>
        <div class="imperial-height row">
          <div class="col-xs-6">
            <div class="input-holder">
              <input id="feet-value" type="number" name="height" placeholder="Ft" />
              <div class="units height">ft</div>
            </div>
          </div>
          <div class="col-xs-6">
            <div class="input-holder">
              <input id="inch-value" type="number" name="height" placeholder="In" />
              <div class="units height">in</div>
            </div>
          </div>
        </div>
        <div class="input-holder">
          <input id="weight-value" type="number" name="weight" placeholder="Weight" />
          <div class="units weight">lb</div>
        </div>
        <div class="input-holder">
          <input
            id="targetWeight-value"
            type="number"
            name="target_weight"
            placeholder="Target weight"
          />
          <div class="units weight">lb</div>
        </div>
        <div class="error-msg"></div>
        <button class="btn btn-primary btn-next-step">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import KetoButton from "./../components/Button";
import KetoNavBar from "./../components/NavBar";
import SubHeader from "./../components/SubHeader";
export default {
  name: "quiz2",
  data() {
    return {
      gender: this.$route.params.gender
    };
  },
  components: { KetoNavBar, SubHeader, KetoButton },
  created() {
    $("body").addClass("desktop-bg");

    $(".e-btn-readmore").click(function() {
      $(this).hide();
      $(".story-block .e-description").addClass("is-open");
    });

    $.ajaxSetup({
      headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
      }
    });
    window.currentStep = 1;
    window.height = 0;
    window.weight = 0;
    window.gender = "male";
    window.preparation = null;
    window.targetWeight = 0;
    window.unitSystem = "imperial";
    let that = this;

    $(document).ready(function() {
      $(".fancy-radio-holder .fancy-radio").click(function() {
        $(".fancy-radio .status-icon").html("-");
        $(".fancy-radio").removeClass("active");
        $(this).addClass("active");
        $(this)
          .find(".status-icon")
          .html("+");
      });
      $(".fancy-checkbox-holder .fancy-radio").click(function() {
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
          $(this)
            .find(".status-icon")
            .html("+");
        } else {
          $(this)
            .find(".status-icon")
            .html("-");
        }
      });

      $(".units-toggler .btn").click(function() {
        $(".units-toggler .btn").removeClass("active");
        $(this).addClass("active");
        if ($(this).data("type") == "imperial") {
          window.unitSystem = "imperial";
          $(".metric-height").hide();
          $(".imperial-height").show();
          $(".units.height").html("ft");
          $(".units.weight").html("lb");
        } else {
          window.unitSystem = "metric";
          $(".metric-height").show();
          $(".imperial-height").hide();
          $(".units.height").html("cm");
          $(".units.weight").html("kg");
        }
      });

      var questions_amount = $('.step[data-mode="question"]').length + 1;
      var slider_indicator = 100 / questions_amount;
      var slider_current_amount = slider_indicator;

      $(".btn-back").click(function() {
        var slide_parent = $(".step.active");

        slider_current_amount = slider_current_amount - slider_indicator;
        $(".progress-bar .progress").animate(
          { width: slider_current_amount + "%" },
          750
        );

        //back to landing page
        if (slide_parent.data("type") === "familiar_question") {
          window.location = document.referrer;
          return true;
        }

        if (slide_parent.data("type") === "email") {
          $(".step")
            .hide()
            .removeClass("active");
          $(".step.results")
            .fadeIn()
            .addClass("active");
          slide_parent.removeClass("active").hide();
          $(".mainNavbar").hide();
          $("#desktop-container").removeClass("desktop-container");
        } else if (slide_parent.data("type") !== "familiar_question") {
          $(".step")
            .removeClass("active")
            .hide();
          window.currentStep--;
          window.location.hash =
            "#/quiz2/" + that.gender + "#step" + window.currentStep;
          if (slide_parent.prev().data("type") === "units_question") {
            $(".units-toggler").show();
          } else {
            $(".units-toggler").hide();
          }
          if (window.currentStep == 9) {
            $("nav, .subheader").hide();
          }
          $(slide_parent)
            .prev()
            .fadeIn()
            .addClass("active");
        }
      });

      $(".scroll-btn").click(function() {
        $([document.documentElement, document.body]).animate(
          {
            scrollTop: $("#summary-footer").offset().top - 20
          },
          1000
        );
      });

      function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }

      function mail_autocorrect($this) {
        $this.mailcheck({
          suggested: function(element, suggestion) {
            $("#suggest").html(
              "Did you mean: <b class='e-emailsuggestion'>" +
                suggestion.full +
                "</b>?"
            );
          },
          empty: function(element) {
            $("#suggest").html("");
          }
        });
        setTimeout(function() {
          $("#suggest .e-emailsuggestion").on("mousedown click", function() {
            var value = $(this).text();
            $("#email-value").val(value);
            $("#suggest").html("");
          });
        }, 100);
      }

      $("#email-value").on("blur", function() {
        mail_autocorrect($(this));
      });

      var typingTimer; //timer identifier
      var doneTypingInterval = 600; //time in ms, 5 second for example
      var $input = $("#email-value");

      $input.on("keyup", function() {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(doneTyping, doneTypingInterval);
      });

      $input.on("keydown", function() {
        clearTimeout(typingTimer);
      });

      function doneTyping() {
        mail_autocorrect($input);
      }

      var slick_initialized = false;
      $(".progress-bar .progress").animate(
        { width: slider_current_amount + "%" },
        750
      );
      $(".btn-next-step").click(function() {
        var slider_parent = $(this).closest(".step");
        var current_slide = $(".step.active");

        if (
          slider_parent.data("answer") === "single" ||
          slider_parent.data("answer") === "multiple"
        ) {
          if ($(".step.active .fancy-radio.active").length == 0) {
            $(this).html("Next");
            $(".error-msg")
              .html("Please select an answer")
              .fadeIn();
            return false;
          }
        }

        if (
          slider_parent.next().data("type") === "testimonials" &&
          !slick_initialized
        ) {
          $(".step .b-slides").slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true,
                  arrows: false
                }
              }
            ]
          });
          slick_initialized = true;
        }

        if (slider_parent.next().data("type") === "units_question") {
          $(".units-toggler").show();
        }

        if (slider_parent.data("type") === "email") {
          $("#desktop-container").addClass("desktop-container");
          if (!validateEmail($("#email-value").val())) {
            $(".error-msg")
              .html("Please enter your email")
              .fadeIn();
            $(this).html("Next");
            return false;
          }
          $('.step[data-type="email"] .btn-next-step')
            .text("Loading")
            .css("pointer-events", "none");
        }

        $(".error-msg").hide();

        if (slider_parent.data("type") === "first_question") {
          window.preparationTime = $(".step.active .fancy-radio.active").data(
            "answer"
          );
          window.dataLayer.push({
            question: "preparationTime",
            questionAnswer: window.preparationTime,
            event: "quizQuestionAnswered",
            preparationTime: window.preparationTime
          });
        }

        if (slider_parent.data("type") === "meat_question") {
          var meats = [];
          $(".step.active .fancy-radio.active").each(function() {
            meats.push($(this).data("answer"));
          });

          window.meats = meats.join(",");
          window.dataLayer.push({
            question: "meats",
            questionAnswer: window.meats,
            event: "quizQuestionAnswered",
            meats: window.meats
          });
        }
        if (slider_parent.data("type") === "products_question") {
          var products = [];
          $(".step.active .fancy-radio.active").each(function() {
            products.push($(this).data("answer"));
          });

          window.products = products.join(",");
          window.dataLayer.push({
            question: "products",
            questionAnswer: window.products,
            event: "quizQuestionAnswered",
            products: window.products
          });
        }
        if (slider_parent.data("type") === "howactive_question") {
          window.activityLevel = $(".step.active .fancy-radio.active").data(
            "answer"
          );
          window.dataLayer.push({
            question: "activityLevel",
            questionAnswer: window.activityLevel,
            event: "quizQuestionAnswered",
            activityLevel: window.activityLevel
          });
        }
        if (slider_parent.data("type") === "familiar_question") {
          window.familiar = $(".step.active .fancy-radio.active").data(
            "answer"
          );
          window.dataLayer.push({
            question: "familiar",
            questionAnswer: window.familiar,
            event: "quizQuestionAnswered",
            familiarity: window.familiar
          });
        }
        if (slider_parent.data("type") === "willing_question") {
          window.willingness = $(".step.active .fancy-radio.active").data(
            "answer"
          );
          window.dataLayer.push({
            question: "willingness",
            questionAnswer: window.willingness,
            event: "quizQuestionAnswered",
            willingness: window.willingness
          });
        }

        if (slider_parent.data("type") === "units_question") {
          window.weight = $("#weight-value").val();

          if (window.weight.length == 0) {
            $(".error-msg")
              .html("Please select your weight")
              .fadeIn();
            $(this).html("Next");
            return false;
          }

          window.targetWeight = $("#targetWeight-value").val();

          if (window.targetWeight.length == 0) {
            $(".error-msg")
              .html("Please select your target weight")
              .fadeIn();
            $(this).html("Next");
            return false;
          }

          if (window.unitSystem == "metric") {
            window.height = $("#metric-height-value").val();
          } else {
            var ft = parseInt($("#feet-value").val());
            var inch = parseInt($("#inch-value").val());
            window.height = Math.round((ft + inch * 0.0833333) * 100) / 100;
          }

          if (window.height < 2 || Number.isNaN(window.height)) {
            $(".error-msg")
              .html("Please select your height")
              .fadeIn();
            $(this).html("Next");
            return false;
          }

          window.age = $("#age-value").val();
          window.dataLayer.push({
            question: "age",
            questionAnswer: window.age,
            event: "quizQuestionAnswered",
            age: window.age
          });

          if (window.age.length == 0) {
            $(".error-msg")
              .html("Please select your age")
              .fadeIn();
            $(this).html("Next");
            return false;
          }
        }

        if (slider_parent.data("type") === "units_question") {
          slider_parent.find(".btn-next-step").text("Processing...");
          saveData();
          return false;
        }

        if (slider_parent.data("type") === "results") {
          $(".step").removeClass("active");
          $("nav").show();
          $("#desktop-container").addClass("desktop-container");
          $("body").addClass("desktop-bg");
          $("#email-value").focus();
          $(".step.results").fadeOut();
          $('.step[data-type="email"]')
            .fadeIn()
            .addClass("active");
          window.location.hash = "#/quiz2/" + that.gender + "#emailInput";
        }

        if (slider_parent.data("type") === "email") {
          var emailEntered = $("#email-value").val();
          window.emailValid = true;

          if (window.emailValid) {
            slider_parent.find(".btn-next-step").text("Processing...");
            saveEmail(emailEntered);
          } else {
            window.currentStep -= 1;
            $(this).html("Next");
            $(".error-msg")
              .html("Please enter valid email address")
              .fadeIn();
            return false;
          }
        }

        slider_current_amount = slider_current_amount + slider_indicator;
        $(".progress-bar .progress").animate(
          { width: slider_current_amount + "%" },
          750
        );

        if (
          slider_parent.data("mode") === "question" &&
          slider_parent.data("type") !== "units_question"
        ) {
          $(".step")
            .removeClass("active")
            .hide();
        }
        $(current_slide)
          .next()
          .fadeIn()
          .addClass("active");

        $([document.documentElement, document.body]).animate(
          {
            scrollTop: 0
          },
          600
        );

        window.currentStep++;
        window.location.hash =
          "#/quiz2/" + that.gender + "#step" + window.currentStep;
      });

      $(".gender-buttons .btn").click(function() {
        window.gender = $(this).data("gender");
        $("#landing").hide();
        $("nav, .subheader").fadeIn();
        $("#step-1")
          .fadeIn()
          .addClass("active");
        $("#desktop-container").addClass("desktop-container");
        $("body").addClass("desktop-bg");
        window.location.hash = "#/quiz2/" + that.gender + "#step1";
        $([document.documentElement, document.body]).animate(
          {
            scrollTop: 0
          },
          600
        );
      });
    });

    function saveData() {
      //create client
      var clientData = {
        status: "free",
        gender: window.gender,
        age: window.age,
        height: window.height,
        weight: window.weight,
        target_weight: window.targetWeight,
        unit_system: window.unitSystem
      };

      var settings = {
        willingness: window.willingness,
        activityLevel: window.activityLevel,
        preparationTime: window.preparationTime,
        familiar: window.familiar,
        meats: window.meats,
        products: window.products
      };

      /* $.post(
        "https://ketocycle.diet/clients/save",
        { client: clientData, settings: settings },
        function(response) {
          window.clientCode = response.client.code;
          window.location = "/summary/" + window.clientCode;
        },
        "json"
      ); */
      that.$router.push({ name: "summary" });
    }

    function saveEmail(email) {
      $.post(
        "/clients/update",
        { code: window.clientCode, email: email },
        function(response) {
          fbq("track", "LeftEmail");
          window.location = "/billing/" + window.clientCode;
        },
        "json"
      );
    }

    function ftToCm(ft) {
      return Math.round(ft * 30.48);
    }

    function kgToLb(kg) {
      return Math.round((kg / 0.453592) * 10) / 10;
    }

    function lbToKg(lb) {
      return Math.round(lb * 0.453592 * 10) / 10;
    }
  }
};
</script>