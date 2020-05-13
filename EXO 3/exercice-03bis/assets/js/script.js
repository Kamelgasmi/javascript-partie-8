const options = {
    root: null,
    rootMargin: '0px',
    threshold: .1
  }
  const handleIntersect = function () {
      console.log('handleIntersect');
  }
  const observer = new IntersectionObserver( handleIntersect , options)
  observer.observe(document.querySelector('.reveal'))