let answer;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '54df141db5msh2aac95101b50e9ap1632b0jsn877ec64b46af',
    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
  }
};



function getD(response) {

  var a = document.getElementById("age").value;
  var h = document.getElementById("height").value;
  var w = document.getElementById("weight").value;
  var g = document.getElementById("gender").value;
  var x = document.getElementById("goat").value;
  var y;


  fetch('https://fitness-calculator.p.rapidapi.com/dailycalorie?age=' + a + '&gender=' + g + '&height=' + h + '&weight=' + w + '&activitylevel=level_1', options)

    .then(response => response.json())
    .then(response => {
      answer = response
      console.log(answer.data)

      if (x == "maintain weight") {
        y = answer.data.goals[x]
        console.log(y)
        

      }
      else {
        y = answer.data.goals[x].calory
      
      }
      localStorage.setItem('calgoal', y);
      let next = document.querySelector('#next')
      next.style.display = 'block';
    })

}