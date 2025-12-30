$(function () {
    // alert('dddddddddddddddddddddddddd')

    // 윈도우 스크롤 했을 때 할일
    $(window).scroll(function () {
        // 만약에 윈도우 스크롤탑이 300이상이면
        if ($(window).scrollTop() >= 300) {
            // 고탑이 스르륵 나와
            $('.gotop').fadeIn()
        } else { // 아니면
            // 고탑이 스르륵 사라져
            $('.gotop').fadeOut()
        }
    })

    // 고탑버튼 클릭했을 때 할일
    $('.gotop').click(function(e){
        e.preventDefault() // 이벤트 차단
        // 고탑버튼누르면 => scrollTop : 0 이동
        $('html, body').animate({
            scrollTop : 0
        },700)
    })
})