<template>
  <div id="loader-wrapper">
   <!--  <div class="loader-main">
      <div v-for="item in 4" :key="`out${item}`">
      </div>
    </div> -->
    <h3 class="title" v-if="$frontmatter.home">{{$site.title || $localeConfig.title}}</h3>
    <p class="description" v-if="$frontmatter.home">{{$site.description || $localeConfig.description}}</p>
    <div class="cat">
      <div class="cat__segment"></div>
      <div class="cat__segment"></div>
      <div class="cat__segment"></div>
      <div class="cat__segment"></div>
      <div class="cat__segment"></div>
      <div class="cat__segment"></div>
      <div class="cat__segment"></div>
      <div class="cat__segment"></div>
      <div class="cat__segment"></div>
      <div class="cat__segment"></div>
      <div class="cat__segment"></div>
      <div class="cat__segment"></div>
      <div class="cat__segment"></div>
      <div class="cat__segment"></div>
      <div class="cat__segment"></div>
      <div class="cat__segment"></div>
      <div class="cat__segment"></div>
      <div class="cat__segment"></div>
      <div class="cat__segment"></div>
      <div class="cat__segment"></div>
      <div class="cat__segment"></div>
      <div class="cat__segment"></div>
      <div class="cat__segment"></div>
      <div class="cat__segment"></div>
      <div class="cat__segment"></div>
      <div class="cat__segment"></div>
      <div class="cat__segment"></div>
      <div class="cat__segment"></div>
      <div class="cat__segment"></div>
      <div class="cat__segment"></div>
    </div>
  </div>
</template>

<style lang="css" scoped>
* {
  border: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: #2c4763;
  display: flex;
  font-size: 16px;
  height: 100vh;
  line-height: 1.5;
}

.cat {
  margin: auto;
  position: relative;
  width: 16em;
  height: 16em;
  top: 10%;
}
.cat__segment {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 3em;
  height: 2em;
  transform: translate(-50%, -50%);
}
.cat__segment:before {
  animation: loop 2s cubic-bezier(0.6, 0, 0.4, 1) infinite running;
  background: linear-gradient(90deg, white 20%, #e6e6e6 20% 80%, white 80%);
  border-radius: 0.25em;
  content: "";
  display: block;
  will-change: transform;
  width: 100%;
  height: 100%;
}
.cat__segment:first-of-type {
  width: 4em;
  height: 4em;
  z-index: 1;
}
.cat__segment:first-of-type:before {
  background: radial-gradient(0.25em 0.25em at 1.25em 1.6em, white 48%, rgba(255, 255, 255, 0) 50%), radial-gradient(0.75em 0.75em at 1.25em 1.75em, #1a1a1a 48%, rgba(26, 26, 26, 0) 50%), radial-gradient(0.25em 0.25em at 2.75em 1.6em, white 48%, rgba(255, 255, 255, 0) 50%), radial-gradient(0.75em 0.75em at 2.75em 1.75em, #1a1a1a 48%, rgba(26, 26, 26, 0) 50%), radial-gradient(0.9em 0.8em at 1.5em 2.65em, white 48%, rgba(255, 255, 255, 0) 50%), radial-gradient(0.9em 0.8em at 2.5em 2.65em, white 48%, rgba(255, 255, 255, 0) 50%), radial-gradient(1em 0.8em at 1.6em 2.75em, #cccccc 48%, rgba(204, 204, 204, 0) 50%), radial-gradient(1em 0.8em at 2.4em 2.75em, #cccccc 48%, rgba(204, 204, 204, 0) 50%), radial-gradient(0.75em 0.75em at 50% 2.5em, #e69999 48%, rgba(230, 153, 153, 0) 50%), radial-gradient(4em 3em at 50% 2em, white 48%, rgba(255, 255, 255, 0) 50%), radial-gradient(4em 3em at 50% 2.2em, #cccccc 48%, rgba(204, 204, 204, 0) 50%), radial-gradient(1em 3em at 0.75em 1.5em, #e69999 39%, white 40% 49%, rgba(255, 255, 255, 0) 50%), radial-gradient(1em 3em at 3.25em 1.5em, #e69999 39%, white 40% 49%, rgba(255, 255, 255, 0) 50%), radial-gradient(1em 2em at 0.5em 2.8em, white 48%, rgba(255, 255, 255, 0) 50%), radial-gradient(1em 2em at 0.5em 3em, #cccccc 48%, rgba(204, 204, 204, 0) 50%), radial-gradient(1em 2em at 3.5em 2.8em, white 48%, rgba(255, 255, 255, 0) 50%), radial-gradient(1em 2em at 3.5em 3em, #cccccc 48%, rgba(204, 204, 204, 0) 50%);
  background-repeat: no-repeat;
}
.cat__segment:last-of-type {
  width: 3em;
  height: 4em;
}
.cat__segment:last-of-type:before {
  background: linear-gradient(90deg, white 20%, #e6e6e6 20% 80%, white 80%) 0 1.5em/3em 0.5em, radial-gradient(3em 2em at top center, #e6e6e6 30%, white 31% 48%, rgba(255, 255, 255, 0) 50%) 0 2em/3em 2em, radial-gradient(1em 4em at 0.5em 0, white 48%, rgba(255, 255, 255, 0) 50%) 0 2em/3em 2em, radial-gradient(1em 4em at 2.5em 0, white 48%, rgba(255, 255, 255, 0) 50%) 0 2em/3em 2em;
  background-repeat: no-repeat;
}
.cat__segment:nth-of-type(1) {
  transform: translate(-50%, -50%) rotate(-20deg);
}
.cat__segment:nth-of-type(1):before {
  animation-delay: 0s;
  transform: translateX(6em);
}
.cat__segment:nth-of-type(2) {
  transform: translate(-50%, -50%) rotate(-18.6666666667deg);
}
.cat__segment:nth-of-type(2):before {
  animation-delay: 0.02s;
  transform: translateX(6em);
}
.cat__segment:nth-of-type(3) {
  transform: translate(-50%, -50%) rotate(-17.3333333333deg);
}
.cat__segment:nth-of-type(3):before {
  animation-delay: 0.04s;
  transform: translateX(6em);
}
.cat__segment:nth-of-type(4) {
  transform: translate(-50%, -50%) rotate(-16deg);
}
.cat__segment:nth-of-type(4):before {
  animation-delay: 0.06s;
  transform: translateX(6em);
}
.cat__segment:nth-of-type(5) {
  transform: translate(-50%, -50%) rotate(-14.6666666667deg);
}
.cat__segment:nth-of-type(5):before {
  animation-delay: 0.08s;
  transform: translateX(6em);
}
.cat__segment:nth-of-type(6) {
  transform: translate(-50%, -50%) rotate(-13.3333333333deg);
}
.cat__segment:nth-of-type(6):before {
  animation-delay: 0.1s;
  transform: translateX(6em);
}
.cat__segment:nth-of-type(7) {
  transform: translate(-50%, -50%) rotate(-12deg);
}
.cat__segment:nth-of-type(7):before {
  animation-delay: 0.12s;
  transform: translateX(6em);
}
.cat__segment:nth-of-type(8) {
  transform: translate(-50%, -50%) rotate(-10.6666666667deg);
}
.cat__segment:nth-of-type(8):before {
  animation-delay: 0.14s;
  transform: translateX(6em);
}
.cat__segment:nth-of-type(9) {
  transform: translate(-50%, -50%) rotate(-9.3333333333deg);
}
.cat__segment:nth-of-type(9):before {
  animation-delay: 0.16s;
  transform: translateX(6em);
}
.cat__segment:nth-of-type(10) {
  transform: translate(-50%, -50%) rotate(-8deg);
}
.cat__segment:nth-of-type(10):before {
  animation-delay: 0.18s;
  transform: translateX(6em);
}
.cat__segment:nth-of-type(11) {
  transform: translate(-50%, -50%) rotate(-6.6666666667deg);
}
.cat__segment:nth-of-type(11):before {
  animation-delay: 0.2s;
  transform: translateX(6em);
}
.cat__segment:nth-of-type(12) {
  transform: translate(-50%, -50%) rotate(-5.3333333333deg);
}
.cat__segment:nth-of-type(12):before {
  animation-delay: 0.22s;
  transform: translateX(6em);
}
.cat__segment:nth-of-type(13) {
  transform: translate(-50%, -50%) rotate(-4deg);
}
.cat__segment:nth-of-type(13):before {
  animation-delay: 0.24s;
  transform: translateX(6em);
}
.cat__segment:nth-of-type(14) {
  transform: translate(-50%, -50%) rotate(-2.6666666667deg);
}
.cat__segment:nth-of-type(14):before {
  animation-delay: 0.26s;
  transform: translateX(6em);
}
.cat__segment:nth-of-type(15) {
  transform: translate(-50%, -50%) rotate(-1.3333333333deg);
}
.cat__segment:nth-of-type(15):before {
  animation-delay: 0.28s;
  transform: translateX(6em);
}
.cat__segment:nth-of-type(16) {
  transform: translate(-50%, -50%) rotate(0deg);
}
.cat__segment:nth-of-type(16):before {
  animation-delay: 0.3s;
  transform: translateX(6em);
}
.cat__segment:nth-of-type(17) {
  transform: translate(-50%, -50%) rotate(1.3333333333deg);
}
.cat__segment:nth-of-type(17):before {
  animation-delay: 0.32s;
  transform: translateX(6em);
}
.cat__segment:nth-of-type(18) {
  transform: translate(-50%, -50%) rotate(2.6666666667deg);
}
.cat__segment:nth-of-type(18):before {
  animation-delay: 0.34s;
  transform: translateX(6em);
}
.cat__segment:nth-of-type(19) {
  transform: translate(-50%, -50%) rotate(4deg);
}
.cat__segment:nth-of-type(19):before {
  animation-delay: 0.36s;
  transform: translateX(6em);
}
.cat__segment:nth-of-type(20) {
  transform: translate(-50%, -50%) rotate(5.3333333333deg);
}
.cat__segment:nth-of-type(20):before {
  animation-delay: 0.38s;
  transform: translateX(6em);
}
.cat__segment:nth-of-type(21) {
  transform: translate(-50%, -50%) rotate(6.6666666667deg);
}
.cat__segment:nth-of-type(21):before {
  animation-delay: 0.4s;
  transform: translateX(6em);
}
.cat__segment:nth-of-type(22) {
  transform: translate(-50%, -50%) rotate(8deg);
}
.cat__segment:nth-of-type(22):before {
  animation-delay: 0.42s;
  transform: translateX(6em);
}
.cat__segment:nth-of-type(23) {
  transform: translate(-50%, -50%) rotate(9.3333333333deg);
}
.cat__segment:nth-of-type(23):before {
  animation-delay: 0.44s;
  transform: translateX(6em);
}
.cat__segment:nth-of-type(24) {
  transform: translate(-50%, -50%) rotate(10.6666666667deg);
}
.cat__segment:nth-of-type(24):before {
  animation-delay: 0.46s;
  transform: translateX(6em);
}
.cat__segment:nth-of-type(25) {
  transform: translate(-50%, -50%) rotate(12deg);
}
.cat__segment:nth-of-type(25):before {
  animation-delay: 0.48s;
  transform: translateX(6em);
}
.cat__segment:nth-of-type(26) {
  transform: translate(-50%, -50%) rotate(13.3333333333deg);
}
.cat__segment:nth-of-type(26):before {
  animation-delay: 0.5s;
  transform: translateX(6em);
}
.cat__segment:nth-of-type(27) {
  transform: translate(-50%, -50%) rotate(14.6666666667deg);
}
.cat__segment:nth-of-type(27):before {
  animation-delay: 0.52s;
  transform: translateX(6em);
}
.cat__segment:nth-of-type(28) {
  transform: translate(-50%, -50%) rotate(16deg);
}
.cat__segment:nth-of-type(28):before {
  animation-delay: 0.54s;
  transform: translateX(6em);
}
.cat__segment:nth-of-type(29) {
  transform: translate(-50%, -50%) rotate(17.3333333333deg);
}
.cat__segment:nth-of-type(29):before {
  animation-delay: 0.56s;
  transform: translateX(6em);
}
.cat__segment:nth-of-type(30) {
  transform: translate(-50%, -50%) rotate(18.6666666667deg);
}
.cat__segment:nth-of-type(30):before {
  animation-delay: 0.58s;
  transform: translateX(6em);
}

@keyframes loop {
  from {
    transform: rotate(0) translateX(6em);
  }
  to {
    transform: rotate(-1turn) translateX(6em);
  }
}
</style>

<style lang="stylus" scoped>
#loader-wrapper
  height:100vh;
  width:100vw;
  background #fff
  background var(--background-color)
  .loader-main
    position:fixed;
    width:120px;
    height:50px;
    top:45%;
    left:50%;
    z-index:555;
    transform:translate(-50%,0);
    div
      &:nth-child(2){ animation:pacman-balls 1s 0s infinite linear; }
      &:nth-child(3){ animation:pacman-balls 1s 0.33s infinite linear; }
      &:nth-child(4){ animation:pacman-balls 1s 0.66s infinite linear; }
      &:nth-child(5){ animation:pacman-balls 1s 0.99s infinite linear; }
      &:first-of-type
        width:0px;
        height:0px;
        border-right:25px solid transparent;
        border-top:25px solid $accentColor;
        border-left:25px solid $accentColor;
        border-bottom:25px solid $accentColor;
        border-radius:25px;
        animation:rotate_pacman_half_up 0.5s 0s infinite;
      &:nth-child(2)
        width:0px;
        height:0px;
        border-right:25px solid transparent;
        border-top:25px solid $accentColor;
        border-left:25px solid $accentColor;
        border-bottom:25px solid $accentColor;
        border-radius:25px;
        animation:rotate_pacman_half_down 0.5s 0s infinite;
        margin-top:-50px;
      &:nth-child(3),&:nth-child(4),&:nth-child(5),&:nth-child(6)
        background-color:$accentColor;
        width:15px;
        height:15px;
        border-radius:100%;
        margin:2px;
        width:10px;
        height:10px;
        position:absolute;
        transform:translate(0,-6.25px);
        top:25px;
        left:100px;
  .title
    margin 8rem auto 2rem
    text-align center
    color #2c3e50
    color var(--text-color)
    font-size 30px
    box-sizing: border-box;
    padding: 0 10px;
    text-shadow 0 2px 10px rgba(0,0,0,0.2)
  .description
    margin auto
    text-align center
    color #2c3e50
    color var(--text-color)
    font-size 22px
    box-sizing: border-box;
    padding: 0 10px;
    text-shadow 0 2px 10px rgba(0,0,0,0.2);
  @keyframes pacman-balls
    75%{opacity:0.7;}
    100%{-webkit-transform:translate(-100px,-6.25px);transform:translate(-100px,-6.25px);}
  @keyframes rotate_pacman_half_up
    0%{-webkit-transform:rotate(270deg);transform:rotate(270deg);}
    50%{-webkit-transform:rotate(360deg);transform:rotate(360deg);}
    100%{-webkit-transform:rotate(270deg);transform:rotate(270deg);}
  @keyframes rotate_pacman_half_down
    0%{-webkit-transform:rotate(90deg);transform:rotate(90deg);}
    50%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}
    100%{-webkit-transform:rotate(90deg);transform:rotate(90deg);}
    
</style>
