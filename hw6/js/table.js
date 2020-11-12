/* Joe Ganley UMass Lowell 2020*/

var num2;
var num3;
var num4;

var _num1;
var _num2;
var _num3;
var _num4;

var list1 = [];
var list2 = [];

function checker (x) {
  if ((x < -50 || x > 50) || (isNaN(x) == true))  {
  //  alert("Enter a NUMBER in between -50 and 50");
  console.log("djgfhdkjfg");
  document.getElementById("error").textContent="Enter a NUMBER in between -50 and 50";
  clear();
  return false;
  }
}
function clear() {
  var myTable = document.getElementById('mult_table');
  for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 5; j++) {
              myTable.rows[j].cells[i].innerHTML = ' ';
            }
          }
      }
//this is where i begin to use the jquery validation
      $(document).ready(function() {
        $("#frm1").validate({
          rules: {
            num1: {
              required: true,
              number: true,
              range: [-50, 50]
            },
            num2: {
              required: true,
                number: true,
                range: [-50, 50]
            },
            num3: {
              required: true,
                number: true,
                range: [-50, 50]
            },
            num4: {
              required: true,
                number: true,
                range: [-50, 50]
            },
          //the error messages i will use
          messages: {
            num1: {
              required: "Please enter a number between -50 and 50",
              minlength: "Your password must be at least 5 characters long",
              number: "Must be a number between -50 and 50",
              range: "Must be a number between -50 and 50"
            },
            num2: {
              required: "Please enter a number between -50 and 50",
              minlength: "Your password must be at least 5 characters long",
              number: "Must be a number between -50 and 50",
              range: "Must be a number between -50 and 50"
            },
            num3: {
              required: "Please enter a number between -50 and 50",
              minlength: "Your password must be at least 5 characters long",
              number: "Must be a number between -50 and 50",
              range: "Must be a number between -50 and 50"
            },
            num4: {
              required: "Please enter a number between -50 and 50",
              minlength: "Your password must be at least 5 characters long",
              number: "Must be a number between -50 and 50",
              range: "Must be a number between -50 and 50"
            },
        },
      },
    })
  });


//does the same but for my second form
  $(document).ready(function() {
    $("#frm2").validate({
      rules: {
        _num1: {
          required: true,
          number: true,
          range: [-50, 50]
        },
        _num2: {
          required: true,
          number: true,
          range: [-50, 50]
        },
        _num3: {
          required: true,
          number: true,
          range: [-50, 50]
        },
        _num4: {
          required: true,
        number: true,
        range: [-50, 50]
        },
      // Specify validation error messages
      messages: {
        _num1: {
          required: "Please enter a number between -50 and 50",
          number: "Must be a number between -50 and 50",
          range: "Must be a number between -50 and 50"
        },
        _num2: {
          required: "Please enter a number between -50 and 50",
          minlength: "Your password must be at least 5 characters long",
          number: "Must be a number between -50 and 50",
          range: "Must be a number between -50 and 50"
        },
        _num3: {
          required: "Please enter a number between -50 and 50",
          minlength: "Your password must be at least 5 characters long",
          number: "Must be a number between -50 and 50",
          range: "Must be a number between -50 and 50"
        },
        _num4: {
          required: "Please enter a number between -50 and 50",
          minlength: "Your password must be at least 5 characters long",
          number: "Must be a number between -50 and 50",
          range: "Must be a number between -50 and 50"
        },
    },
  },
})
});


function getNumH() {

  num1 = document.forms["frm1"]["num1"].value;
  if (checker(num1) == false) {
    console.log("sjdhgkaj");
    document.forms["frm1"]["num1"].value = '';
    return false;
  }
  num2 = document.forms["frm1"]["num2"].value;
  if (checker(num2) == false) {
    document.forms["frm1"]["num2"].value = '';
    return false;
  }
  num3 = document.forms["frm1"]["num3"].value;
  if (checker(num3) == false) {
    document.forms["frm1"]["num3"].value = '';
    return false;
  }
  num4 = document.forms["frm1"]["num4"].value;
  if (checker(num4) == false) {
    document.forms["frm1"]["num4"].value = '';
    return false;
  }


  list1[0] = num1;
  list1[1] = num2;
  list1[2] = num3;
  list1[3] = num4;
  console.log(list1);
  /*
  console.log(num1);
  console.log(num2);
  console.log(num3);
  console.log(num4);
  */

  return true;
}

//get the numbers from my second form
function getNumV() {


  _num1 = document.forms["frm2"]["_num1"].value;
  if (checker(_num1) == false) {
    document.forms["frm2"]["_num1"].value = '';
    return false;
  }
  _num2 = document.forms["frm2"]["_num2"].value;
  if (checker(_num2) == false) {
    document.forms["frm2"]["_num2"].value = '';
    return false;
  }
  _num3 = document.forms["frm2"]["_num3"].value;
  if (checker(_num3) == false) {
    document.forms["frm2"]["_num3"].value = '';
    return false;
  }
  _num4 = document.forms["frm2"]["_num4"].value;
  if (checker(_num4) == false) {
    document.forms["frm2"]["_num4"].value = '';
    return false;
  };

 list2[0] = _num1;
 list2[1] = _num2;
 list2[2] = _num3;
 list2[3] = _num4;

 console.log(list2);
 /*console.log(_num2);
 console.log(_num3);
 console.log(_num4);
 */

 return true;
}

function computeTable() {
  document.getElementById("error").textContent=" ";
  if(!getNumH()) {
    return false;
  }
  if (!getNumV()) {

    return false;
  }

  var myTable = document.getElementById('mult_table');

  //calculate and fill table
  var result = '\n';
  for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 5; j++) {
          if (i == 0 && j > 0 ) {
            myTable.rows[i].cells[j].innerHTML = list1[j-1] * 1;
          }
          else {
            if (j == 0 && i > 0) {
              myTable.rows[i].cells[j].innerHTML = list2[i-1] * 1;
            }
            else {
              if (i == 0 && j == 0) {
                continue;
              }
              console.log('%s, %s == %s * %s', i, j, list1[i-1], list2[j-1]);
              myTable.rows[j].cells[i].innerHTML = list1[i-1] * list2[j-1];
            }
          }

      }
      result += '\n'
  }
  console.log();

}
