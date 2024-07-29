'use client';

function getScreenType() {
  const width = window.innerWidth;

  if (width < 576) {
    return 'smallPhone';
  } else if (width >= 576 && width < 768) {
    return 'phone';
  } else if (width >= 768 && width < 992) {
    return 'tablet';
  } else if (width >= 992 && width < 1200) {
    return 'desktop';
  } else {
    return 'largeDesktop';
  }
}

// Example usage:
const screenType = getScreenType();
console.log(screenType); // Will print the screen type based on the current screen width
