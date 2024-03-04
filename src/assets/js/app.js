class App {
  constructor() {
    this.addEvent();
  }

  addEvent() {
    $(document).on("click", ".qna__item", this.qnaToggle)
  }

  qnaToggle = (e) => {
    const $this = $(e.currentTarget);
    const $answer = $this.find(".qna__answer");
    const $icon = $this.find(".qna__icon");
    const $qna = $this.closest(".qna");

    if ($this.hasClass("active")) {
      $answer.slideUp(300);
      $icon.removeClass("active");
      $this.removeClass("active");
    } else {
      $qna.find(".qna__item").removeClass("active");
      $qna.find(".qna__answer").slideUp(300);
      $qna.find(".qna__icon").removeClass("active");
      $answer.slideDown(300);
      $icon.addClass("active");
      $this.addClass("active");
    }
  } 
}

$(document).ready(() => {
  const app = new App();
});