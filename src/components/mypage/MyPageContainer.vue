<template>
  <section>
    <div>
      <div class="row">
        <div class="col col-lg-9 col-xl-7">
          <div class="card">
            <div class="card-background">
              <div class="profile" style="">
                <button type="button" class="btn">
                  <font-awesome-icon
                    icon="fa-solid fa-pen"
                    size="xl"
                    style="color: rgba(0, 0, 0, 0.8)"
                  />
                </button>
                <img src="@/assets/images/user.png" class="img-fluid img-thumbnail" />
              </div>
              <div class="user-info">
                <div>닉네임</div>
                <div class="follow-info">여행 1 팔로워 0 팔로잉 0</div>
              </div>
            </div>
            <div class="card-body" style="padding: 1.5rem !important">
              <div class="d-flex justify-content-between align-items-center" style="">
                <span id="mytrip"
                  >나의 여행
                  <img
                    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Airplane.png"
                    alt="Airplane"
                    width="24"
                    height="24"
                /></span>
              </div>
              <my-page-plan-list></my-page-plan-list>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import MyPageUserInfo from "@/components/mypage/MyPageUserInfo.vue";
// import MyPageTab from "@/components/mypage/MyPageTab.vue";
// MyPageUserInfo, MyPageTab
import MyPagePlanList from "./MyPagePlanList.vue";
export default {
  name: "MyPageContainer",
  components: { MyPagePlanList },
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

.btn {
  position: absolute;
  height: 30px;
  width: 30px;
  top: 3rem;
  right: 0rem;
  z-index: 99;
  background-color: #feff86;
  border: none;
  border-radius: 100px;
}

.btn:active {
  transform: scale(0.95);
}

.row {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

/**유저인포 */
.user-info {
  color: white;
  font-weight: 700;
  font-size: 24px;
  margin-top: 130px;
  margin-left: 1rem !important;
  text-align: left;
}
/**카드 */
.card {
  --mdb-card-spacer-y: 1.5rem;
  --mdb-card-spacer-x: 1.5rem;
  --mdb-card-title-spacer-y: 0.5rem;
  --mdb-card-border-width: 1px;
  --mdb-card-border-color: var(--mdb-border-color-translucent);
  --mdb-card-border-radius: 0.5rem;
  --mdb-card-box-shadow: 0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04);
  --mdb-card-inner-border-radius: calc(0.5rem - 1px);
  --mdb-card-cap-padding-y: 0.75rem;
  --mdb-card-cap-padding-x: 1.5rem;
  --mdb-card-cap-bg: hsla(0, 0%, 100%, 0);
  --mdb-card-bg: #fff;
  --mdb-card-img-overlay-padding: 1.5rem;
  --mdb-card-group-margin: 0.75rem;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: var(--mdb-card-height);
  word-wrap: break-word;
  background-color: var(--mdb-card-bg);
  background-clip: border-box;
  border: var(--mdb-card-border-width) solid var(--mdb-card-border-color);
  border-radius: 30px;
  box-shadow: var(--mdb-card-box-shadow);
}

.card-background {
  background-color: #b0daff;
  height: 210px;
  display: flex;
  flex-direction: row;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}

.profile {
  width: 150px;
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  margin-top: 1.5rem;
  position: relative;
}

.profile > img {
  width: 150px;
  z-index: 1;
  margin-bottom: 0.5rem !important;
  margin-top: 1.5rem;
}

.follow-info {
  font-size: 16px;
  font-weight: 500;
}
.d-flex {
  display: flex;
}

.img-fluid,
.img-thumbnail {
  max-width: 100%;
  height: auto;
}

.justify-content-between {
  justify-content: space-between;
}

.align-items-center {
  align-items: center;
}

.justify-content-end {
  justify-content: end;
}
/**? */
.mypage-container {
  background: white;
  border-radius: 20px;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column !important;
}

/** */

.row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--mdb-gutter-x) * 0.5);
  padding-left: calc(var(--mdb-gutter-x) * 0.5);
  margin-top: var(--mdb-gutter-y);
}

.col {
  flex: 1 0 0%;
}

@media (min-width: 992px) {
  .col-lg-9 {
    flex: 0 0 auto;
    width: 75%;
  }
}

@media (min-width: 1200px) {
  .col-xl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
}

#mytrip {
  font-size: 24px;
  font-weight: 700;
}
</style>
