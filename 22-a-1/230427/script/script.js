//jquery() == $()
// hide() == display=none과 같다.
$('.sub').hide()
$('#popup').hide()
$('.gallery').hide()
$('nav > ul > li').on('mouseover',()=>{
    $('.sub').stop(true).slideDown()
})
$('nav > ul > li').on('mouseout',()=>{
    $('.sub').stop(true).slideUp()
})

//공지사항 첫 글 클릭 시 팝업 보이기
$('.notice a:first-child').on('click',()=>{
    $('#popup').show()
})

$('#popup a').on('click',()=>{
    $('#popup').hide()
})

//공지사항 제목 클릭 시 공지사항 내용만 보이기
$('.tab_wrap .title a:first-child').on('click',()=>{
    $('.notice').show()
    $('.gallery').hide()
    // classList.remove 제이쿼리버전
    $('.tab_wrap .title a').removeClass() 
    // classList.add() 제이쿼리버전
    $('.tab_wrap .title a:first-child').addClass('active')
})

//갤러리 제목 클릭 시 갤러리 내용만 보이기 
$('.title a:last-child').on('click',()=>{
    $('.notice').hide()
    $('.gallery').show()
    $('.tab_wrap .title a').removeClass() 
    $('.tab_wrap .title a:last-child').addClass('active')
})


// slide
// 위 -> 아래 또는 아래 -> 위 
// 3초 간격
// 마지막이미지 -> 첫번째이미지
// 자동시작 

// 매초마다 자동으로 반복 == setInterval()


// let count = 0
// setInterval(()=>{
//     count++
//     if(count>2){count=0}
//     console.log(count) //120120120120....
//     //$('대상').css('속성','값')
//     $('#slide_container').css('transform',`translateY(-${300*count}px)`)
//     // $('#slide_container')
// },3000)

let count = 0
$('#slide_container').css('transition','all 0.3s')
setInterval(()=>{
    count++
    if(count>2){count=0}
    console.log(count)
    $('#slide_container').css('transform',`translateX(-${1200*count}px)`)
},1000)
