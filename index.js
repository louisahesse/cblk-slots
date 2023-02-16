function toggleAnswer(id) {
  var question = document.getElementsByClassName("faq-question")[id - 1];
  var answer = document.getElementById("answer" + id);
  question.classList.toggle("open");
  answer.classList.toggle("show");
}
