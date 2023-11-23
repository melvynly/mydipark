<template>
  <!-- app -->
  <div id="app">
    <div class="outer-container">
      <div class="inner-container">
        <h1>Not Fancy Countdown Timer</h1>
        <div class="countdown">
          <h2>
            {{ timeLeft }}
          </h2>
          <h3>
            Countdown ends at <span>{{ endTime }}</span>
          </h3>
        </div>

        <ul class="columns is-mobile is-centered">
          <li v-for="(time, index) in times" :key="index" class="column time">
            <a
              v-on:click.prevent="setTime(time.sec)"
              :class="[
                'button',
                'is-link',
                { 'is-active': time.sec === selectedTime && endTime !== 0 }
              ]"
            >
              {{ time.display }}
            </a>
          </li>
        </ul>

        <!-- Social Media Footer -->
        <div class="social-media-footer">
          <div class="columns is-mobile social-columns">
            <div class="column">
              <i class="fa fa-twitter" aria-hidden="true"></i>
              <a href="https://twitter.com/samantha_ming" target="_blank">samantha_ming</a>
            </div>
            <div class="column">
              <i class="fa fa-facebook" aria-hidden="true"></i>
              <a href="https://www.facebook.com/hisamanthaming" target="_blank">hi.samanthaming</a>
            </div>
            <div class="column">
              <i class="fa fa-instagram" aria-hidden="true"></i>
              <a href="https://www.instagram.com/samanthaming/" target="_blank">samanthaming</a>
            </div>
          </div>
        </div>
        <!--end social media-->
      </div>
    </div>
  </div>

  <!-- JavaScript -->
</template>

<style>
/* ==================
 *  BASE
 * ================== */
body {
  font-family: 'Sarpanch', sans-serif;
  color: hsl(0, 0%, 7%);
  background: #f2f1ed;
  background: radial-gradient(hsl(204, 86%, 93%), hsl(204, 86%, 63%));
}
.outer-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
}
/* ==================
 *  APP
 * ================== */
.countdown {
  margin: 5px 0 30px;
}
h1 {
  text-align: center;
  font-size: 18px;
  color: hsl(204, 86%, 43%);
}
h2 {
  font-size: 120px;
  width: 390px;
  line-height: 1;
  text-align: center;
}
h3 {
  font-size: 28px;
  display: flex;
  align-items: baseline;
  justify-content: center;
}
h3 span {
  width: 70px;
  border-bottom: 2px solid hsl(348, 100%, 71%);
  margin-left: 15px;
  text-align: center;
}
.time {
  display: flex;
  justify-content: center;
}
.columns {
  margin-left: 0;
  margin-right: 0;
}
/* ==================
*  SOCIAL MEDIA
* ================== */
.social-media-footer {
  --font-color: hsl(204, 86%, 99%);
  --font-size: 0.8rem;
  margin-top: 1.9375rem;
}
.social-columns {
  display: flex;
  justify-content: center;

  padding-bottom: 0.625rem;
  font-size: var(--font-size);
  color: var(--font-color);
  width: 100%;
}
.social-columns .column {
  padding: 0.4rem;
  text-align: center;

  /* to work with bulma */
  display: flex;
  align-items: center;
  /* justify-content: center; */
}
.social-columns a {
  text-decoration: none;
  color: var(--font-color);

  /* to work with bulma */
  padding-left: 2px;
}
.social-columns a:hover {
  text-decoration: underline;
}
/* GITHUB */
.github-code {
  color: var(--font-color);
  font-size: 0.8rem;
  text-align: center;
  margin-bottom: 0.625rem;
}
.github-code a {
  text-decoration: none;
  color: var(--font-color);
}
.github-code a:hover {
  text-decoration: underline;
}
</style>
