<<<<<<< HEAD
let buttonGueset = document.querySelector("#buttonguest");
buttonGueset.addEventListener("click", function () {
  alert("ti pidor");
=======
// добавление текста который написали в гостевой книге.
$(function () {
  $("#buttonguest").click(function () {
    $.get(
      "http://data.fixer.io/api/latest",
      { acces_key: "7556a4a9e24d262b95e2bdc7193a5b65" },
      function (response) {
        console.log(response);
      }
    );
  });
>>>>>>> bc6a6114f9d0c493c9a4f6e6be6346e3fce85039
});
