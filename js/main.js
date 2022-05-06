$(function () {
  if($(window).scrollTop() >= $('.icon_wrap').offset().top) {
    $('header').addClass('bg_on')
 }
 if($(window).scrollTop() < $('.icon_wrap').offset().top) {
    $('header').removeClass('bg_on')
 }
  $(window).scroll(function() {
    if($(window).scrollTop() >= $('.icon_wrap').offset().top) {
       $('header').addClass('bg_on')
    }
    if($(window).scrollTop() < $('.icon_wrap').offset().top) {
       $('header').removeClass('bg_on')
    }
  })

  for(let g = 0;g < 4;g++) {
   $('#gnb .g1>li').eq(g).hover(function() {
    $('#gnb .g2').removeClass('on')
    $('#gnb .g2').eq(g).addClass('on')
   }, function() {
    $('#gnb .g2').removeClass('on')
   }) 
  }
  $('#gnb').hover(function() {
    $('header .gnb_bg').stop().animate({'height' : '35vh'}, 200)
  }, function() {
    $('header .gnb_bg').stop().animate({'height' : '0'}, 200)
  })
  

   $('.allmenu_wrap .allmenu_btn').click(function() {
     $(this).toggleClass('close')
    $('.allmenu_bg').toggle()
    $('.allmenu_wrap .allmenu_box').toggle()
    if ($('body').width() > 1299 + 'px') {
      $('#gnb').toggle()
    }
   })//click

   
    if($('body').width() < 1300 + 'px') {
      $('.allmenu_box .a1>li').has('ul').addClass('dep1');
      $('.allmenu_box .a2>li').has('ul').addClass('dep2');
      // $('.allmenu_box .a1>li>a').click(function() {
      //   $('.allmenu_box .a1>li>a').not(this).next().slideUp()
      //   $(this).next().slideToggle();
      //   $('.dep1>a::before').hide()
      // })      
    } 

  $('.allmenu_box .a1>li>a').click(function() {
    //window.alert()
    $('.allmenu_box .a1>li>a').not(this).next().slideUp()
    $(this).next().slideToggle()
  })

  // $('.brand_box .brand_slider ul').slick({
  //   slidesToShow : 2,
  //   autoplay : true,
  //   dots : true,
  //   setPosition: 0,
  //   responsive : [{
  //     breakpoint : 720,
  //     settings : {
  //       slidesToShow : 1,
  //       centerMode: false,
  //     }
  //   }]
  // });

  $('.brand_wrap .mo_logo_btns').slick({
    slidesToShow : 3,
    dots : false,
    arrows : false,
    responsive : [{
      breakpoint : 580,
      settings : {
        slidesToShow : 2,
      }
    }]
    });
    
    $('.pc_logo_btns button').click(function() {
      $('.pc_logo_btns button').removeClass('on')
      $(this).addClass('on');
      //window.alert($(this).height())

      $('.tab_arrow').stop().animate({'margin-top' : $(this).index() * 72})
      $('.brand_box>ul>li').hide()
      $('.brand_box>ul>li').eq($(this).index()).show();
      $('.brand_box .brand_slider ul').resize()
      $('.brand_box .brand_slider ul').slick('refresh')
    })
      $('.brand_box .brand_slider ul').slick({
        slidesToShow : 2,
        autoplay : true,
        dots : true,
        setPosition: 0,
        responsive : [{
          breakpoint : 720,
          settings : {
            slidesToShow : 1,
            centerMode: false,
          }
        }]
      });
    
  // var pclobtn = $('.brand_wrap .pc_logo_btns button');
  // for(let lobtn = pclobtn.index();lobtn <= 4;lobtn++) {
  //   pclobtn.eq(lobtn - 1).click(function() {
  //     //logo버튼 색 변경
  //     pclobtn.removeClass('on')
  //     pclobtn.eq(lobtn - 1).addClass('on')
  //     //탭
  //     $('.brand_wrap .brand_box>ul>li').removeClass('on')
  //     $('.brand_wrap .brand_box>ul>li').eq(lobtn - 1).addClass('on')
  //     //arrow 위치 변경 - XXXXX!!!!!왜안되죠..ㅠ
  //     $('.brand_wrap .tab_arrow').stop().animate({'margin-top' : (50 * lobtn) + 'px'})
  //     //slick 깨짐방지 - 작동 안함..ㅠ
  //     $('.brand_box .brand_slider ul').resize()
  //     $('.brand_box .brand_slider ul').slick('refresh')
  //   })
  // }

   $('.global_wrap .slider_box').slick({
      autoplay : true,
      slidesToShow : 1,
      dots : true,
      centerMode : true,
      centerPadding : '400px',
      appendDots : $('.global_btns'),
      appendArrows : $('.global_arrow'),
      responsive : [
         {
           breakpoint : 1299,
           settings : {
             centerPadding : '100px'
           }
         }, {
            breakpoint : 1200,
            settings : {
              centerPadding : '0px',
            }
         },{
           breakpoint : 720,
           settings : {
            dots : true,
            centerPadding : '30px'
           }
         }
       ]
   });


   $('.vis_slider ul').slick({
      slidesToShow : 1,
      autoplay : true,
      autoplaySpeed : 5000,
      dots : true,
      appendDots : $('.vis_btns'),
      appendArrows : $('.vis_arrow')
   })


   $('.yong_slider').slick({
    slidesToShow : 2,
    autoplay : true,
    dots : true,
  })
   
   $('.news_slider ul').slick({
      slidesToShow : 3,
      autoplay : true,
      dots : true,
      responsive : [{
        breakpoint : 1299,
        settings : {
          slidesToShow : 3
        },
        breakpoint : 920,
        settings : {
          slidesToShow : 2
        }
      }],
   })
  //  $('news_slider .slick-dots li').

   $('.news_slider li').each(function() {
    let elm = $(this).find('strong')
    let elmTxt = elm.text().substr(0, 40).concat('...')
    if(elm.text().length > 40) {
      elm.text(elmTxt)
    }
   })
   $(window).resize(function() {
    if ($('.sns_wrap').width() < 1299) {
     $('.sns_slider li').each(function() {
      let elm = $(this).find('p')
      let elmTxt = elm.text().substr(0, 30).concat('...')
      if(elm.text().length > 30) {elm.text(elmTxt)}
    })
   }
   })
   
   

   $('.sns_slider ul').slick({
    slidesToShow : 2,
    autoplay : true,
    dots : true,
    appendDots : $('.sns_btns'),
    appendArrows : $('.sns_arrow'),
    // responsive : [{
    //   breakpoint : 1299,
    //   settings : {
    //     slidesToShow : 4,
    //     centerMode : true,
    //   },
    //   breakpoint : 720,
    //   settings : {
    //     slidesToShow : 2
    //   }
    // }]
  })

  $('.familysite button').click(function() {
    $('.familysite ul').slideToggle()
    $('.familysite button span').toggleClass('on')
  })
})//ready()

