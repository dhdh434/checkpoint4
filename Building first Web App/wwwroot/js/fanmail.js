////document.getElementById("btnsend").addEventListener("click", function () {
////    alert("From: " + document.getElementById("frm").value + ", Subject: " +
////        document.getElementById("sbj").value + ", Message: " +
////        document.getElementById("txtmess").value);
////})

//create a function to calculate the grade
$("#btnsend").click(function () {
    var grade;
    grade = ((parseFloat($("#as").val())) * 0.5) + ((parseFloat($("#gp").val())) * 0.1) +
        ((parseFloat($("#q").val())) * 0.1) + ((parseFloat($("#me").val())) * 0.1) +
        ((parseFloat($("#gp").val())) * 0.1) + ((parseFloat($("#gp").val())) * 0.1);
    grade = grade.toFixed(2);

    //assign the correct grade letter to the correct score
    var gradeLetter = "";
    if (grade >= 0.94) {
        gradeLetter = "A";
    } else if (grade >= 0.9) {
        gradeLetter = "A-";
    } else if (grade >= 0.87) {
        gradeLetter = "B+";
    } else if (grade >= 0.84) {
        gradeLetter = "B";
    } else if (grade >= 0.8) {
        gradeLetter = "B-";
    } else if (grade >= 0.77) {
        gradeLetter = "C+";
    } else if (grade >= 0.74) {
        gradeLetter = "C";
    } else if (grade >= 0.7) {
        gradeLetter = "C-";
    } else if (grade >= 0.67) {
        gradeLetter = "D+";
    } else if (grade >= 0.64) {
        gradeLetter = "D";
    } else if (grade >= 0.6) {
        gradeLetter = "D-";
    } else {
        gradeLetter = "E";
    }

    //output
    output.innerHTML = gradeLetter;

})