var textArray = ["Digital Experience Group"];
var textPosition = 0;
var speed = 100;
var span

typewriter = () => {
  document.querySelector('#text').innerHTML = textArray[0].substring(0,textPosition) + "<span class='blink'>|</span>"

  if(textPosition++ != textArray[0].length)
    setTimeout(typewriter,speed);
}

window.addEventListener("load", typewriter)



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