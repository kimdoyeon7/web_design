/* 필수로 나오는 기능들 */
//nav-sub 
// 메인 메뉴를 마우스로 올리면(mouse over) 서브 메뉴 영역이 부드럽게 나타나면서,(처음 숨기기) 서브 메뉴가 보이도록 한다.
$('.sub').hide()
//메인 메뉴를 마우스로 올리면(mouseover)
$('nav > ul > li').on('mouseover',()=>{
    //서브 메뉴 영역이 부드럽게 나타나면서, 서브 메뉴가 보이도록 
    // 밑에 버전은 서브 한꺼번에 내리기버전
    // $('.sub').stop().slideDown() // 부드럽게 나타나면서

    // 두번째, 메뉴 하나씩 나오는 방법
    // $('nav > ul > li').find('.sub').show()
    //find = 자식이라는 뜻 / 하지만 이렇게 하면 아까와 다를바가 없음 그래서
    $(this).find('.sub').show()
})


/* 메인 메뉴에서 마우스커서가 벗어가면(mouse out) */
$('nav > ul > li').on('mouseout',()=>{
    /* 서브 메뉴 영역은 부드럽게 사라져야 한다. */
    // $('.sub').stop().slideUp()
})


/* 두번쨰 방법 */
$('nav > ul > li').on('mouseover',function(){
    $(this).find('.sub').stop().slideDown()
})
$('nav > ul > li').on('mouseout',function(){
    $(this).find('.sub').stop().slideUp()
})


//공지사항, 갤러리 탭 이동 
// 각 탭을 클릭(Click) 시 해당 탭에 대한 내용이 보여야 한다. 
// 해당되지 않는 탭의 내용은 숨겨야 한다.
$('.c1 .title h2:first-child').on('click',function(){
    // $('.c1 .contents .notice').show() //display:block일 경우 
    $('.c1 .contents .notice').css('display','flex')
    $('.c1 .contents .gallery').hide()
    //활성화 active 클래스 
    $('.c1 .title h2').removeClass()
    $(this).addClass('active')
})
$('.c1 .title h2:last-child').on('click',function(){
    $('.c1 .contents .notice').hide()
    $('.c1 .contents .gallery').css('display','flex')
    // $('.c1 .contents .gallery').show()
    $('.c1 .title h2').removeClass()
    $(this).addClass('active')
})




//공지사항 첫 글 클릭 -팝업

// 팝업을 미리 숨기기 
$('#popup').hide()
// 공지사항의 첫 번째 콘텐츠를 클릭(Click)할 경우 
$('.c1 .notice a:first-child').on ('click',function(){
    $('#popup').show()// 레이어 팝업창(Layer Pop_up)이 나타나며, 
})
// 팝업 닫기 기능
// 레이어 팝업창 내에 닫기 버튼을 두어서 클릭하면 해당 팝업창이 닫혀야 한다.
$('#popup .close').on('click',function(){
    // 해당 팝업창이 닫혀야 한다.
    $('#popup').hide()
})

//팝업 닫기 기능




//슬라이드 애니메이션 (제자리,좌-우,상-하) -> 이건 안하면 실격처리됨.
// 이미지만 바뀌면 안 되고, 이미지가 좌에서 우 또는 우에서 좌로 이동하면서 전환되어야 한다. ==== (translateX)
// 슬라이드는 매 3초 이내로 하나의 이미지에서 다른 이미지로 전환되어야 한다. ==== (setInterval - duration)
// 웹사이트를 열었을 때 자동으로 시작되어 반복적으로(마지막 이미지가 슬라이드 되면 다시 첫 번째 이미지가 슬라이드 되는 방식) 슬라이드 되어야한다. ==== (if)
// 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 ... (012반복)
// 0px 1200px 2400px 
let num = 0 
setInterval(function(){ //반복적으로
    num++
    if(num>2){num=0}
    console.log(num)
    //이미지가 좌에서 우 또는 우에서 좌 
    $('#slide_container').css('transform',`translateX(-${1200*num}px)`)
},3000) // 매 3초 이내로
