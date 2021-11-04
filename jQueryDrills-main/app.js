$("<ul></ul>").appendTo("body");

$("#btnSubmit").on("click", function (e) {
  e.preventDefault();
  alert("js is working");
  let $text = $('input[type="text"]').val();
  alert($text);
  // $("<h2>" + $text + "</h2>").appendTo("div");
  // addColor();
  $("<li>" + $text + "</li>").appendTo("ul");
  onClick();
  removeOnDblClick();
});

$(':input[type="submit"]').prop("disabled", true);
$('input[type="text"]').keyup(function () {
  if ($(this).val() != "") {
    $(':input[type="submit"]').prop("disabled", false);
  }
});

function randomNumber() {
  return Math.floor(Math.random() * 255);
}

function randomColor() {
  let r = randomNumber();
  let g = randomNumber();
  let b = randomNumber();
  color = "rgb(" + r + ", " + g + ", " + b + ")";
  return color;
}

function onClick() {
  $("li").click(function () {
    $(this).css("color", randomColor());
  });
}

function removeOnDblClick() {
  $("li").dblclick(function () {
    $(this).remove();
  });
}
// function addColor() {
//   $("div").hover(function () {
//     $("div").mouseover(function () {
//       $("h2").css("color", "blue");
//     });
//     $("div").mouseleave(function () {
//       $("h2").css("color", "black");
//     });
//   });
// }
