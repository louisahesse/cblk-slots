function toggleAnswer(id) {
  console.log("hello");
  const answer = document.getElementById("answer" + id);
  console.log(answer);
  answer.style.display = "block";
  answer.style.height = "100px";

  // if (answer.style.display === "none") {
  // } else {
  //   answer.style.display = "none";
  // }
}
