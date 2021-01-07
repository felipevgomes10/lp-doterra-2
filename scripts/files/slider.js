/* eslint-disable no-param-reassign */
export default function slider() {
  const wrapper = document.querySelector('.slider-wrapper');
  const slide = document.querySelector('.slider');
  const comments = document.querySelectorAll('.comment');
  const btnLeft = document.querySelector('.btn-left');
  const btnRight = document.querySelector('.btn-right');
  const length = comments.length - 1;
  let index = 0;
  let width;

  const activeClass = () => {
    comments.forEach((comment, indexComment) => {
      if (index === indexComment) {
        comment.style.border = '2px solid #91cc14';
      } else {
        comment.style.border = '2px solid transparent';
      }
    });
  };
  activeClass();

  btnLeft.addEventListener('click', () => {
    width = wrapper.offsetWidth;
    if (index > 0) {
      index -= 1;
      slide.style.transform = `translateX(-${width * index}px)`;
    } else {
      index = length;
      slide.style.transform = `translateX(-${width * index}px)`;
    }
    activeClass();
  });

  btnRight.addEventListener('click', () => {
    width = wrapper.offsetWidth;
    if (index < length) {
      index += 1;
      slide.style.transform = `translateX(-${width * index}px)`;
    } else {
      slide.style.transform = `translateX(0)`;
      index = 0;
    }
    activeClass();
  });

  window.addEventListener('resize', () => {
    setTimeout(() => {
      width = wrapper.offsetWidth;
      slide.style.transform = `translateX(-${width * index}px)`;
    }, 3000);
  });
}
