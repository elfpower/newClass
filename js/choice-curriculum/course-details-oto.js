$( function () {

  var aTabBtn = $( ".tit-list > li" );
  var aTabCon = $( ".con-list > li" );

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

  // 课程表手风琴效果
  $( ".syllabus > dl" ).on( "click", function () {
    $( this ).toggleClass( "act" );
  } )

} )