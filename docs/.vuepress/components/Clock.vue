<template>
  <div id="clock">
      <p class="date">{{ date }}</p>
      <p class="time">{{ time }}</p>
  </div>
</template>

<script>
	export default {
      name:'Time',
	 	  data() {
	 	  	return {
	 	  		time: '',
          date: '',
          week : ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
	 	  	}
	 	  },
	      methods: {
          updateTime() {
              const { zeroPadding  } = this
              var cd = new Date();
              this.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
              this.date = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth()+1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + this.week[cd.getDay()];
          },
          zeroPadding(num, digit) {
              var zero = '';
              for(var i = 0; i < digit; i++) {
                  zero += '0';
              }
              return (zero + num).slice(-digit);
          }
        },
	      watch: {},
	      mounted() {
          var timerID = setInterval(this.updateTime, 1000);
          this.updateTime();
	      }
	}
</script>

<style lang="stylus" scoped>
p{
  
  margin: 0;
  padding: 0
}
#clock{
  font-family: 'Share Tech Mono', monospace;
  color: #daf6ff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
  margin-top: 20px;
  .time{
    letter-spacing: 0.05em;
    font-size: 50px;
    padding: 5px 0;
  }
  .date{
    letter-spacing: 0.1em;
    font-size: 24px;
  }
  .text{
    letter-spacing: 0.1em;
    font-size: 12px;
    padding: 20px 0 0;
  }
}
</style>