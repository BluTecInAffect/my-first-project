$(".title-1").click(function () {
  $(".text-1").toggle();
  $(".rightArrow-1").toggle();
  $(".downArrow-1").toggle();
});

$(".title-2").click(function () {
  $(".text-2").toggle();
  $(".rightArrow-2").toggle();
  $(".downArrow-2").toggle();
});

$(".title-3").click(function () {
  $(".text-3").toggle();
  $(".rightArrow-3").toggle();
  $(".downArrow-3").toggle();
});
$("#Personal-reason").click(function () {
  $("#email-button").html("Email personal request");
});
$("#Professional-reason").click(function () {
  $("#email-button").html("Email professional request");
});
$("#email-body").keypress(function () {
  $("#email-button").removeAttr("disabled");
});
$("#are-you-human").click(function () {
  $("#are-you-human").removeClass("is-invalid");
});
$("#email-button").click(function () {
  window.open(
    "mailto:grayblue27@gmail.com?subject=Hello&body=" + $("#email-body").val(),
    "_blank"
  );
});

/*
  $("").click(function(){
    $("").html("");
  });
  */
