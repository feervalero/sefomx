/*window.$(window).scroll(testScroll);
var viewed = false;

function isScrolledIntoView(elem) {
  var docViewTop = window.$(window).scrollTop();
  var docViewBottom = docViewTop + window.$(window).height();

  var elemTop = window.$(elem).offset().top;
  var elemBottom = elemTop + window.$(elem).height();

  return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

function testScroll() {
  if (isScrolledIntoView(window.$(".numbers")) && !viewed) {
    
    viewed = true;
    window.$(".value").each(function() {
      window.$(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: window.$(this).text()
          },
          {
            duration: 3000,
            easing: "swing",
            step: function(now) {
              console.log(Math.ceil(now));
              window.$(this).text(Math.ceil(now));
            }
          }
        );
    });
  }
}*/
