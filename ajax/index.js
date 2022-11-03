    const cli = document.querySelector('header > .trigger');
    const sub = document.querySelector('header > .menu');

    // cli.addEventListener('click', function(){
    //     sub.classList.add('active');
    // }); //클릭시 서브메뉴 옆에서 나옴

    cli.onclick = function(){
        sub.classList.toggle('active');
    };
    //메뉴

    let num = 0,inter,fadeFun;
    $('.imgSlide img').not(":first-child").hide();
    fadeFun = function(param){
        $('.imgSlide img').eq(num).fadeOut(3000);
        if(param=='next'){
            (num !=2) ? num++ : num=0;
        }else{
            (num !=0) ? num-- : num=2;
        }
        $('.imgSlide img').eq(num).fadeIn(3000);
    }
    inter = setInterval(fadeFun,4000);
    //이미지슬라이드
    const content = document.querySelectorAll('.sli');
    let offset;

    $('.sli > main, .page2, .page3').on('wheel', function(){
        let delta = event.wheelDelta;
        if(delta < 0){
            offset = $(this).next().offset().top;
        }else{
            offset = $(this).prev().offset().top;
        }
        $('html').animate({
            scrollTop : offset
        },{queue:false})
        });
    //스크롤
    
    //애니스크롤
        
    //데이터제이슨~