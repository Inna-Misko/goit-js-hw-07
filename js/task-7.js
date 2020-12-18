const inputRef = document.getElementById("font-size-control");

const spanRef = document.getElementById("text");
inputRef.addEventListener("input", handleInputRange);
function handleInputRange(event) {
  spanRef.style.fontSize = event.currentTarget.value + "px";
}
