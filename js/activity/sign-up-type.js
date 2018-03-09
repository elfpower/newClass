$(function () {

  var aRadio = $( ".type > label" ).find("input[type='radio']");
  var aHref = ["../../pages/activity/single-list.html",
              "../../pages/activity/group-list.html"]

  aRadio.on("change propertychange",function () {
    var index = $(this).parents("label").index();

    $(".btn").attr("href",aHref[index]);
  })

})
