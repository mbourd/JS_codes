function isElementInViewport(elem) {
  const $elem = $(elem);
  const docViewTop = $(window).scrollTop();
  const docViewBottom = docViewTop + $(window).height();
  const docViewLeft = $(window).scrollLeft();
  const docViewRight = docViewLeft + $(window).width();
  const elemTop = $elem.offset().top;
  const elemBottom = elemTop + $elem.height();
  const elemLeft = $elem.offset().left;
  const elemRight = elemLeft + $elem.width();

  return (
      elemBottom >= docViewTop &&
      elemTop <= docViewBottom &&
      elemRight >= docViewLeft &&
      elemLeft <= docViewRight
  );
}

// Usage:
if (isElementInViewport('#myElement')) {
  // Element is currently in the viewport after vertical and horizontal scroll
} else {
  // Element is not in the viewport after vertical and horizontal scroll
}
