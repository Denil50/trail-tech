const animLines = document.querySelectorAll('.animLines');

$(function () {
    let w = $(window);

    w.on('scroll', function () {
        let top = $(this).scrollTop();
        parallax(top);
    });
});

function parallax(top) {
    $('.works__item-line__top').css(
        'transform', 'translateX(' + (top / 10) + 'px)'
    );
    $('.works__item-line__bottom').css(
        'transform', 'translateX(' + (top / -12) + 'px)'
    );
}

if (animLines.length > 0) { 
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < animLines.length; index++) {
            const animLine = animLines[index];
            const animLineHeight = animLine.offsetHeight;
            const animLineOffset = offset(animLine).top;
            const animStart = 4;

            let animLinePoint = window.innerHeight - animLineHeight / animStart;

            if(animLineHeight > window.innerHeight) {
                animLinePoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((pageYOffset > animLineOffset - animLinePoint) && pageYOffset < (animLineOffset + animLineHeight)){
                animLine.classList.add('works__item-line__img-m-active');
            } else {
                if(!animLine.classList.contains('anim-no-hide')){
                    animLine.classList.remove('works__item-line__img-m-active');
                }
            }
        }
    }

    function offset (el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
}