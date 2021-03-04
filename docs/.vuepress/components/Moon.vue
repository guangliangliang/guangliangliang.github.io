<template>
  <div class="moon"></div>
</template>

<script>
	export default {
      name:'Moon',
	}
</script>

<style lang="css" scoped>
.moon {
  height: 100px;
  width: 100px;
  margin: 0 auto;
  position: absolute;
  /* top: calc(50% - 50px); */
  left: calc(50% - 50px);
  -webkit-clip-path: circle(50px at center);
  clip-path: circle(50px, 50px, 50px);
  clip-path: circle(50px at center);
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background: #B5BCC6;
  overflow: hidden;
}
.moon:before, .moon:after {
  border-radius: 50%;
  content: "";
  position: absolute;
  top: -4%;
  left: -4%;
  height: 108%;
  width: 108%;
}
.moon:before {
  background: #04162E;
  -moz-box-shadow: inset -10px 0 7px 0px #B5BCC6;
  -webkit-box-shadow: inset -10px 0 7px 0px #B5BCC6;
  box-shadow: inset -10px 0 7px 0px #B5BCC6;
}
.moon:after {
  background: #B5BCC6;
  -moz-box-shadow: inset -10px 0 7px 0px #B5BCC6;
  -webkit-box-shadow: inset -10px 0 7px 0px #B5BCC6;
  box-shadow: inset -10px 0 7px 0px #B5BCC6;
}

/* Animation */
@keyframes before-fullmoon {
  0%, 50% {
    opacity: 1;
  }
  50.01%, 100% {
    opacity: 0;
  }
  0%, 24.99% {
    background: #04162E;
  }
  25%, 100% {
    background: #B5BCC6;
  }
  0% {
    -moz-box-shadow: inset 0px 0 7px 0px #B5BCC6;
    -webkit-box-shadow: inset 0px 0 7px 0px #B5BCC6;
    box-shadow: inset 0px 0 7px 0px #B5BCC6;
  }
  24.99% {
    -moz-box-shadow: inset 55px 0 7px 0px #B5BCC6;
    -webkit-box-shadow: inset 55px 0 7px 0px #B5BCC6;
    box-shadow: inset 55px 0 7px 0px #B5BCC6;
  }
  25% {
    -moz-box-shadow: inset 55px 0 7px 0px #04162E;
    -webkit-box-shadow: inset 55px 0 7px 0px #04162E;
    box-shadow: inset 55px 0 7px 0px #04162E;
  }
  50%, 100% {
    -moz-box-shadow: inset 0 0 7px 0px #04162E;
    -webkit-box-shadow: inset 0 0 7px 0px #04162E;
    box-shadow: inset 0 0 7px 0px #04162E;
  }
  0%, 50%, 100% {
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
  }
  20%, 30% {
    -moz-border-radius: 10% 10% 10% 10%/50% 50% 50% 50%;
    -webkit-border-radius: 10%;
    border-radius: 10% 10% 10% 10%/50% 50% 50% 50%;
  }
  25% {
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
  }
  0%, 24.99% {
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  25%, 50%, 100% {
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
}
@keyframes after-fullmoon {
  0%, 50% {
    opacity: 0;
  }
  50.01%, 100% {
    opacity: 1;
  }
  0%, 50%, 74.99% {
    background: #B5BCC6;
  }
  75%, 100% {
    background: #04162E;
  }
  0%, 50% {
    -moz-box-shadow: inset 0px 0 7px 0px #04162E;
    -webkit-box-shadow: inset 0px 0 7px 0px #04162E;
    box-shadow: inset 0px 0 7px 0px #04162E;
  }
  74.99% {
    -moz-box-shadow: inset 55px 0 7px 0px #04162E;
    -webkit-box-shadow: inset 55px 0 7px 0px #04162E;
    box-shadow: inset 55px 0 7px 0px #04162E;
  }
  75% {
    -moz-box-shadow: inset 55px 0 7px 0px #B5BCC6;
    -webkit-box-shadow: inset 55px 0 7px 0px #B5BCC6;
    box-shadow: inset 55px 0 7px 0px #B5BCC6;
  }
  100% {
    -moz-box-shadow: inset 0 0 7px 0px #B5BCC6;
    -webkit-box-shadow: inset 0 0 7px 0px #B5BCC6;
    box-shadow: inset 0 0 7px 0px #B5BCC6;
  }
  0%, 50%, 100% {
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
  }
  70%, 80% {
    -moz-border-radius: 10% 10% 10% 10%/50% 50% 50% 50%;
    -webkit-border-radius: 10%;
    border-radius: 10% 10% 10% 10%/50% 50% 50% 50%;
  }
  75% {
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
  }
  0%, 50%, 74.99% {
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  75%, 100% {
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
}
.moon:before {
  -moz-animation: before-fullmoon linear 20s infinite;
  -webkit-animation: before-fullmoon linear 20s infinite;
  animation: before-fullmoon linear 20s infinite;
}
.moon:after {
  -moz-animation: after-fullmoon linear 20s infinite;
  -webkit-animation: after-fullmoon linear 20s infinite;
  animation: after-fullmoon linear 20s infinite;
}

</style>