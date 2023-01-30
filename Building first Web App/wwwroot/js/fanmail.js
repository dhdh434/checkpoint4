////document.getElementById("btnsend").addEventListener("click", function () {
////    alert("From: " + document.getElementById("frm").value + ", Subject: " +
////        document.getElementById("sbj").value + ", Message: " +
////        document.getElementById("txtmess").value);
////})

$("#btnsend").click( function () {
    alert("From: " + $("#frm").val() + ", Subject: " +
        $("#sbj").val() + ", Message: " +
        $("#txtmess").val());

    $("#pic").fadeOut();
})