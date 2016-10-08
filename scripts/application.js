function displayResult(answer) {  //This is the function that shows the result
  $("#display span").html(answer)
}

var operator; //variable that tells whether to append input or to clear it

$(document).ready(function() {
  $(".container button").addClass("child-div")
  $(".number").on("click", function() {
    if ($("#display span").text().length < 14) {
      var value = $(this).text()
      if (operator === undefined) {
        $("#display span").text($("#display span").text() + value)
      } else {
        $("#display span").text(value)
        operator = undefined
      }
    } else {
      alert("There are too many numbers, you might want to break your calculations into smaller bits")
    }
  })
  $("#clear").click(function() {
    $("#display span").text("")//html($("#display span").text().slice(0, -1))
  })
  calculator();
})

function calculator() {
  var operation;  // variable that shows the operator sign used
  var num1;
  var operatorCount = 0
  $(".operator").on("click", function() {
    operatorCount += 1
    if (operator === undefined) {
      operator = true
      if (operatorCount < 2) {
        operation = $(this).text()
        num1 = parseFloat($("#display span").text());
      } else {
        equal(num1);
        operation = $(this).text()
        num1 = parseFloat($("#display span").text());
      }
    }
  })

  $("#equal").on("click", function() {
    equal(num1);
    operatorCount = 0;
  })

  function equal(first) {
    var num2 = parseFloat($("#display span").text())
    switch (operation) {
      case "+":
        displayResult(first + num2)
        break;
      case "-":
        displayResult(first - num2)
        break;
      case "/":
        displayResult(first/num2)
        break;
      default:
        displayResult(first * num2);
    }
    operator = true
  }
}