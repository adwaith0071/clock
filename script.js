getClock=()=>{
    const dt=new Date()
    const hr=dt.getHours()
    const min=dt.getMinutes()
    const sec=dt.getSeconds()
    hour=(hr%12)<10?"0"+hr%12:hr%12||12
   clk.textContent=`${hour}:${min}:${sec} ${hr>12? 'pm':"am"}`
   setTimeout(() => {
    getClock()
   });
}
getClock()