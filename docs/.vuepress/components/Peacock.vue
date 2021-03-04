<template>
<div class="code_icon">
     <svg class="peacock" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -10 400 190">

  <defs>

    <path id="feather" d="M158 133l-30-100a30 30 0 0160 0ZC185 19 130 21 158 131" fill="#7e00ff" fill-opacity="0.85" />

    <path id="crown" d="M150 76l-2-6a1.25 1.25 0 014 0Z" fill="#ff03af" />

  </defs>

  <g class="p_feathers">
    <use xlink:href="#feather" x="0" y="0" />
    <use xlink:href="#feather" x="0" y="0" />
    <use xlink:href="#feather" x="0" y="0" />
    <use xlink:href="#feather" x="0" y="0" />
    <use xlink:href="#feather" x="0" y="0" />
    <use xlink:href="#feather" x="0" y="0" />
    <use xlink:href="#feather" x="0" y="0" />
    <use xlink:href="#feather" x="0" y="0" />
  </g>

  <g class="p_crown">
    <use xlink:href="#crown" x="3" y="-30" />
    <use xlink:href="#crown" x="-13" y="0" transform="rotate(-12)" />
    <use xlink:href="#crown" x="-46" y="39" transform="rotate(-30)" />
  </g>

  <path d="M 150 169 C 133 191 97 148 105 144 c 60 -18 10 -100 40 -80 l 5 0 c -27 10 40 45 0 105 M 139 66 a 1 1 90 1 0 2 0 a 1 1 90 1 0 -2 0" fill="#81FF00" transform="translate(15, -12)" />

</svg>
</div>
</template>

<script>
    export default {
        name: "Peacock"
    }
</script>



<style lang="css" scoped>
    body {
  background: #000;
}

.p_feathers use {
  transform-origin: 150px 140px;
  animation-direction: alternate;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  z-index: -1;
}
.p_feathers use:nth-child(2) {
  animation-name: anim-feather-2;
}

.p_feathers use:nth-child(3) {
  animation-name: anim-feather-3;
}

.p_feathers use:nth-child(4) {
  animation-name: anim-feather-4;
}

.p_feathers use:nth-child(5) {
  animation-name: anim-feather-5;
}

.p_feathers use:nth-child(6) {
  animation-name: anim-feather-6;
}

.p_feathers use:nth-child(7) {
  animation-name: anim-feather-7;
}

.p_feathers use:nth-child(8) {
  animation-name: anim-feather-8;
}

@keyframes anim-feather-2 {
  from {
    transform: rotate(23deg);
  }
  to {
    transform: rotate(20deg);
  }
}

@keyframes anim-feather-3 {
  from {
    transform: rotate(46deg);
  }
  to {
    transform: rotate(40deg);
  }
}

@keyframes anim-feather-4 {
  from {
    transform: rotate(69deg);
  }
  to {
    transform: rotate(60deg);
  }
}

@keyframes anim-feather-5 {
  from {
    transform: rotate(-23deg);
  }
  to {
    transform: rotate(-20deg);
  }
}

@keyframes anim-feather-6 {
  from {
    transform: rotate(-46deg);
  }
  to {
    transform: rotate(-40deg);
  }
}

@keyframes anim-feather-7 {
  from {
    transform: rotate(-69deg);
  }
  to {
    transform: rotate(-60deg);
  }
}
@keyframes anim-feather-8 {
  from {
    transform: rotate(-92deg);
  }
  to {
    transform: rotate(-80deg);
  }
}

</style>
