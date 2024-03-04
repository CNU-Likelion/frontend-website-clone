class App {
  constructor() {
    this.addEvent();
    this.slide();
  }

  addEvent() {
    $(document).on("click", ".qna__item", this.qnaToggle);
  }

  slide() {
    const $images = $(".gallery__image");
    const $texts = $(".gallery__text");
    const $buttons = $(".gallery__button");

    let currentSlide = 0;

    $images.eq(0).show();
    $texts.eq(0).show();

    // const showNextSlide = () => {
    //   $images.eq(currentSlide).fadeOut(1000);
    //   $texts.eq(currentSlide).fadeOut(1000);
    //   $buttons.eq(currentSlide).removeClass("gallery__button--active");
  
    //   currentSlide = (currentSlide + 1) % $images.length;

    //   $images.eq(currentSlide).fadeIn(1000);
    //   $texts.eq(currentSlide).fadeIn(1000);
    //   $buttons.eq(currentSlide).addClass("gallery__button--active");
    // }

    // setInterval(showNextSlide, 3000);

    // $(document).on("click", ".gallery__button", (e) => {
    //   const $this = $(e.currentTarget);
    //   const index = $this.index();

    //   $images.eq(currentSlide).fadeOut(1000);
    //   $texts.eq(currentSlide).fadeOut(1000);
    //   $buttons.eq(currentSlide).removeClass("gallery__button--active");

    //   currentSlide = index;

    //   $images.eq(currentSlide).fadeIn(1000);
    //   $texts.eq(currentSlide).fadeIn(1000);
    //   $buttons.eq(currentSlide).addClass("gallery__button--active");
    // });

    const showSlide = (index) => {
      $images.eq(currentSlide).fadeOut(1000);
      $texts.eq(currentSlide).fadeOut(1000);
      $buttons.eq(currentSlide).removeClass("gallery__button--active");

      currentSlide = index;

      $images.eq(currentSlide).fadeIn(1000);
      $texts.eq(currentSlide).fadeIn(1000);
      $buttons.eq(currentSlide).addClass("gallery__button--active");
    }

    setInterval(() => {
      showSlide((currentSlide + 1) % $images.length);
    }, 3000);

    $(document).on("click", ".gallery__button", (e) => {
      const $this = $(e.currentTarget);
      const index = $this.index();

      showSlide(index);
    });
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