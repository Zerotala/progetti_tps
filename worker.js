
var timerStart = true;

function myTimer(d0)
{
   // ottengo l'ora attuale
   var d=(new Date()).valueOf();

   //calcolo la differenza fra il tempo iniziale e attuale
   var diff = d-d0;
   
   //calcolo dei minuti
   var minutes = Math.floor(diff/1000/60);

   // calcolo dei secondi
   var seconds = Math.floor(diff/1000)-minutes*60;
   var myVar = null;

   //calcolo millisecondi
   var m_sec = Math.floor(diff%1000);

   //aggiunta dello "0" se i minuti/secondi/millisec sono meno di 10
   minutes = minutes.toString();
   if (minutes.length == 1){
      minutes = "0"+minutes;
   }

   seconds = seconds.toString();
   if (seconds.length == 1){
      seconds = "0"+seconds;
   }

   m_sec = m_sec.toString();
   if(m_sec.length == 1) {
      m_sec = "0"+m_sec;
   }

   // return output to Web Worker
   postMessage(minutes+":"+seconds+":"+m_sec);
}
               
if (timerStart){
   // ottengo l'ora corrente 
   var d0=(new Date()).valueOf();
   // ripeto il mio timer
   myVar=setInterval(function(){myTimer(d0)},1);

   timerStart = false;
}