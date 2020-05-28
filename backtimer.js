
const deadline = '2020-05-29T16:12:26';

function getTimeRemaining ( endtime ) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor((t / (1000 * 60 * 60) % 24)),
          minutes = Math.floor((t / (1000 * 60) % 60),
          seconds = Math.floor((t / 1000) % 60));

          return{
              'total' : t,
              'days' : days,
              'hours' : hours,
              'minutes' : minutes,
              'seconds' : seconds
          };
        }

        function getZero( num ) {
            if ( num >= 0 && num < 10 ) {
                return `0${num}`;
            } else {
                return num;
            }
        }

          function setClock(selector, endtime) {
              const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hourd = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timerInterval = setInterval(upDataClock, 1000);

              upDataClock();

            function upDataClock() {
                const t = getTimeRemaining(endtime);

                days.innerHTML = getZero(t.days);
                hours.innerHTML = getZero(t.hours);
                minutes.innerHTML = getZero(t.minutes);
                seconds.innerHTML = getZero(t.seconds);
                
                if( t.total <= 0 ) {
                    clearInterval(timerInterval);
                }

            }
            
          } setClock('.timer', deadline);

          /*let now = new Date();
          console.log(Date.parse(now));

          const low = '2020-05-29';
          console.log(Date.parse(low));

          let i = Date.parse(low) - Date.parse(now);
          console.log(i);

          let time = new Date();
          console.log(time);*/

    
     