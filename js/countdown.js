const getRemainTime = deadline => {
   let now = new Date();
   let remainTime = (new Date(deadline) - now + 1000) / 1000;
   let remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2);
   let remainMinutes = ('0' + Math.floor((remainTime / 60) % 60)).slice(-2);
   let remainHours = ('0' + Math.floor((remainTime / 3600) % 24)).slice(-2);
   let remainDays = Math.floor(remainTime / (3600 * 24));

   return {
      remainTime,
      remainSeconds,
      remainMinutes,
      remainHours,
      remainDays
   }
};

let el = document.getElementById('clock');
let clock = ['spanDays', 'spanHours', 'spanMinutes', 'spanSeconds'];

for (var value of clock) 
{
   clock[value] = document.createElement('span')
}

let days = el.appendChild(clock['spanDays'])
let hours = el.appendChild(clock['spanHours']);
let minutes = el.appendChild(clock['spanMinutes']);
let seconds = el.appendChild(clock['spanSeconds']);

const countdown = (deadline, finalMessage) => {
   const timerUpdate = setInterval(() => {
      let t = getRemainTime(deadline);
      days.innerHTML = `${t.remainDays}`;
      hours.innerHTML = `${t.remainHours}`;
      minutes.innerHTML = `${t.remainMinutes}`;
      seconds.innerHTML = `${t.remainSeconds}`;

      if (t.remainTime <= 1) {
         clearInterval(timerUpdate);
         el.innerHTML = finalMessage;
      }
   }, 1000)

};

countdown('Sun Dec 31 2021 11:59:00 GMT-0600', 'Feliz Año')
