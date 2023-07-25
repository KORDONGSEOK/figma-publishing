$(function() {
  /* Include html Files */
  $('.gnb-include').load('/include/gnb.html');
  $('.main-header-include').load('/include/main-header.html')

  /* Category Accordion */
  $('.category-accordion .detail').eq(0).show()
  $('.category-accordion .title').click(function(){
    // 누르는 것 모두 펼치기
    // $(this).next().show()
    // $(this).next().stop().slideDown()
    // $(this).next().stop().fadeIn()
    // 누르는 것 모두 펼치기 & 펼쳐진 것 누르면 접히기
    // $(this).next().stop().slideToggle()

    // 누르는 것만 펼쳐지고 기존에 펼쳐진 것은 접히게
    $(this).next().stop().slideDown()
    $(this).siblings('.category-accordion .title').next().stop().slideUp()

    $(this).addClass('active')
    $(this).siblings('.category-accordion .title').removeClass('active')
  });

  /* Front Slider */
  $('.fornt-slider').slick({
    slidesToShow: 1, /*화면에 출력할 슬라이드 수 */
    dots: false, /*하단의 도트 네이게이션 출력 */
    arrows: true, /*좌우 화살표 네비게이션 출력 */
    autoplay: false, /*자동재생 */
    autopalySpeed: 3000 /*자동재생 속도*/
  });

  /* Goods Suggestion Slider */
  $('.goods-suggestion-items').slick({
    slidesToShow: 3, /*화면에 출력할 슬라이드 수 */
    dots: false, /*하단의 도트 네이게이션 출력 */
    arrows: true, /*좌우 화살표 네비게이션 출력 */
    slidesToScroll: 2 /*드래그시 몇개 슬라이드*/
  })

  /* Wish */
  $('.wish').click(function() { 
    $(this).toggleClass('active')
  });

  /* Front Footer */
  $('.btn-view-more').click(function(){
    // $('.company-info-more').show()
    $('.company-info-more').toggle()
  });



})
