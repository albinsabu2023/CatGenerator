const catGen = () => {
  var img = document.createElement("img");
  var div = document.getElementById("c-2");
  img.src =
    "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
  div.appendChild(img);
};
