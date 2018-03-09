$( function () {

  var aTabBtn = $( ".tab-title > li" );
  var aTabCon = $( ".tab-con > li" );

  // tab 初始化
  tabInit( 0 )

  function tabInit( n ) {
    aTabBtn.eq( n ).addClass( "act" );
    aTabCon.eq( n ).show();
  }
  // tab 切换
  aTabBtn.on( "click", function () {
    if ( $( this ).hasClass( "act" ) ) {
      return;
    } else {
      aTabBtn.removeClass( "act" );
      $( this ).addClass( "act" );
      aTabCon.hide();
      aTabCon.eq( $( this ).index() ).fadeIn( 300 );
    }
  } )

  // 地区选择
  $( ".other-area > ul > li" ).on( "click", function () {
    if ( $( this ).hasClass( "act" ) ) {
      return;
    } else {
      $( ".other-area > ul > li" ).removeClass( "act" );
      $( this ).addClass( "act" );

      // 以下只作示范，数据接入后可删除，后台请用异步方式在此接入数据
      $( this ).parents( "li" ).find( ".con-list > ul > li" ).html(
        '<div class="info">'+
          '<h3>'+$(this).find("span").html()+'中心</h3>'+
          '<p>荔湾区丛桂路123号通宝大厦</p>'+
        '</div>'+
        '<div class="tel-icon">'+
          '<a href="tel:13611112222">'+
            '<img src="../../img/service-hall/phone@3x.png"/>'+
          '</a>'+
        '</div>'
      )

    }

  } )

} )