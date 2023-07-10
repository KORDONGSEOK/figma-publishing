$(function() {
  /* Include html Files */
  $('.gnb-include').load('/include/gnb.html');
  $('.main-header-include').load('/include/main-header.html')


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
