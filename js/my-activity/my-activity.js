$(function () {

  console.log(" is my-activity");

  var aTabBtn = $( ".tab-bar > li" );
  var aTabCon = $( ".tab-con > li" );

  // tab 初始化
  tabInit( 0 )

  function tabInit( n ) {
    aTabBtn.eq( n ).addClass( "act" );
    aTabCon.eq( n ).show()
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


})
