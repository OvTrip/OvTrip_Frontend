<template>
  <div class="tabs">
    <input type="radio" name="tabs" id="tabone" />
    <label for="tabone" id="tabone-content">나의 여행</label>
    <div class="tab" id="tabone-content">
      <div class="background-color-1">
        <h1>Tab One Content</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>

    <input type="radio" name="tabs" id="tabtwo" checked="checked" />
    <label for="tabtwo" id="tabtwo-content">친구 목록</label>
    <div class="tab" id="tabtwo-content">
      <h1>IMPLEMENT</h1>
      <p>
        Our operations team gets to work and completes the initial deep cleaning
        to set the new cleaning standards. We use this opportunity to fully
        document the work loading plan and cleaning requirements, along with
        cross training for future coverage. Sick days, vacation, or turnover
        will no longer matter to you because we cross-train back up staff so you
        simply experience consistent spotless cleaning. Our job is to keep your
        facility clean, healthy, safe, and making your job easier.
      </p>
    </div>

    <input type="radio" name="tabs" id="tabthree" />
    <label for="tabthree" id="tab3-content">TRACK PROGRESS</label>
    <div class="tab" id="tab3-content">
      <h1>No Copy or Content in PSD</h1>
      <p>Ah Yeah Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </div>

    <input type="radio" name="tabs" id="tab4" />
    <label for="tab4" id="tabfour-content">AJUST</label>
    <div class="tab" id="tabfour-tab">
      <h1>Copy Wasnt in PSD</h1>
      <p>
        Cotton candy candy canes jelly-o caramels. Pie gingerbread topping
        bonbon sweet sweet brownie. Toffee muffin pie chocolate jujubes danish
        cotton candy pie danish. Liquorice liquorice sugar plum. Pudding dragée
        pastry macaroon fruitcake icing dragée. Dragée cookie biscuit jelly
        candy. Macaroon gummies tiramisu cookie chocolate cake fruitcake. Jelly
        pudding donut chocolate oat cake jelly soufflé chocolate cake. Gummi
        bears topping candy soufflé bonbon. Lollipop wafer jelly beans candy
        croissant muffin. Oat cake chocolate sesame snaps dragée. Chocolate bar
        macaroon soufflé macaroon carrot cake candy canes. Sweet tiramisu cake
        danish.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyPageTab",
  components: {},
  data() {
    return {
      message: "",
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
* {
  font-family: "Pretendard";
}
.tabs {
  display: flex;
  flex-wrap: wrap;
  background: #b0daff;
}
.tabs label {
  order: 1;
  display: block;
  padding: 1rem 2rem;
  margin-right: 0.2rem;
  cursor: pointer;
  background: #b0daff;
  font-weight: bold;
  transition: background ease 0.2s;
}
.tabs .tab {
  order: 99;
  flex-grow: 1;
  width: 100%;
  display: none;
  padding: 1rem;
  background: #fff;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.tabs input[type="radio"] {
  display: none;
}
.tabs input[type="radio"]:checked + label {
  background: #fff;
}
.tabs input[type="radio"]:checked + label + .tab {
  display: block;
}

@media (max-width: 45em) {
  .tabs .tab,
  .tabs label {
    order: initial;
  }
  .tabs label {
    width: 100%;
    margin-right: 0;
    margin-top: 0.2rem;
  }
}

/**
 * Generic Styling
*/
body {
  background: #eee;
  min-height: 100vh;
  box-sizing: border-box;
  padding-top: 10vh;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue",
    Helvetica, Arial, "Lucida Grande", sans-serif;
  font-weight: 300;
  line-height: 1.5;
  /*max-width: 60rem;*/
  margin: 0 auto;
  font-size: 112%;
}

/*****color****/
/* #tabone-content {
  color: white;
  background: red;
}

#tabtwo-content {
  color: white;
  background: #f7961d;
}

#tab3-content {
  color: white;
  background: #8bc53e;
}

#tab3-tab {
  color: white;
  background: #8bc53e;
}

#tabfour-tab {
  color: white;
  background: #00abc9;
}

#tabfour-content {
  color: white;
  background: #00abc9;
} */
</style>
