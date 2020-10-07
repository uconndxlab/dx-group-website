var p = document.getElementById('text');
p.innerHTML = '';
var n = 0;
var str = 'Digital Experience Group';
var typeTimer = setInterval(function() {
  n = n + 1;
  p.innerHTML = str.slice(0, n);
  if (n === str.length) {
    clearInterval(typeTimer);
    p.innerHTML = str;
    n = 0;
    setInterval(function() {
      if (n === 0) {
        p.innerHTML = str + "|"
        n = 1;
      } else {
        p.innerHTML = str
        n = 0;
      };
    }, 400);
  };
}, 90)


/**
 * AOS v2 Initialization
 * @url https://github.com/michalsnik/aos/tree/v2#init-aos
 */
AOS.init({
  duration: 1000,
  disable: Boolean(window.innerWidth < 1024),
  delay: 200,
  once: true
});