function setTime()
{
          
function leadingZero(value) {
  if (value < 10) {
    return "0" + value.toString();
  }
  return value.toString();
}

        var hours = new Date().getHours();
        var minutes = new Date().getMinutes();
        var seconds = new Date().getSeconds();
        let time = (hours - 12 + ":" + leadingZero(minutes) + ":" + leadingZero(seconds))
        var fullHours = hours % 12 + minutes / 60 + seconds / 3600;

        var hoursAngle = fullHours * 2 * Math.PI / 12;
        var minutesAngle = minutes * 2 * Math.PI / 60;
        var secondsAngle = seconds * 2 * Math.PI / 60;
        var canvas = document.getElementById("clock");
        var ctx = canvas.getContext("2d");
        var clockRadius = canvas.width/4;

        function myFunction() {
  return time;
}

document.getElementById("timeDiv").innerHTML = myFunction();
          
        ctx.beginPath();

        ctx.fillStyle = "#111111";
        ctx.arc(clockRadius, clockRadius, clockRadius / .8, 0, 2*Math.PI);
        ctx.fill();

        ctx.fillStyle = "rgba ( 0,0,0,0)";
        ctx.stroke(); 
        
          ctx.beginPath();
        
        
        ctx.fill();
        ctx.fillStyle = "hsl(339, 100%, 56%)";
    


        ctx.font = clockRadius / 9 + "px arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        for (var i = 1; i <= 12; i++) {

        ctx.fillText(i, clockRadius + clockRadius * 0.9 * Math.sin(i * 2*Math.PI / 12), clockRadius - (clockRadius * 0.9 * Math.cos(i * 2 * Math.PI / 12)));

        }

        ctx.arc(clockRadius, clockRadius, 3, 0, 2*Math.PI);



        ctx.strokeStyle = "hsl(339, 100%, 56%) ";
        ctx.moveTo(clockRadius, clockRadius);
        ctx.lineTo(clockRadius + clockRadius * 0.6 * Math.sin(hoursAngle), clockRadius - (clockRadius * 0.6 * Math.cos(hoursAngle)));
        ctx.lineWidth = 5;
        ctx.stroke();    

        ctx.moveTo(clockRadius, clockRadius);
        ctx.lineTo(clockRadius + clockRadius * 0.8 * Math.sin(minutesAngle), clockRadius - (clockRadius * 0.8 * Math.cos(minutesAngle)));
        ctx.lineWidth = 3;
        ctx.stroke(); 
        

      ctx.moveTo(clockRadius, clockRadius);
        ctx.lineTo(clockRadius + clockRadius * 0.9 * Math.sin(secondsAngle), clockRadius - (clockRadius * 0.9 * Math.cos(secondsAngle)));
        ctx.lineWidth = 1;
          ctx.stroke();
          ctx.restore();
 
ctx.beginPath();
 ctx.arc(clockRadius, clockRadius, 13, 0, 2*Math.PI);
ctx.stroke();





        }


setInterval( setTime, 1000 );


