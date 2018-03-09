$( function () {
  console.log( "is sign-in" )

  // 提示文本悬浮
  $( "input" ).on( "focus", function () {
    if ( $( this ).val() === '' ) {
      $( this ).next().addClass( "fix-input-text" )
    }
  } ).on( "blur", function () {
    if ( $( this ).val() === '' ) {
      $( this ).next().removeClass( "fix-input-text" )
    }
  } )

  // 密码显示切换
  $( ".password-bar > i" ).on( "mousedown touchstart", function () {
    $( ".password-input" ).attr( "type", "text" );
    $( ".password-bar .see" ).addClass( "act" );
  } ).on( "mouseup touchend", function () {
    $( ".password-input" ).attr( "type", "password" );
    $( ".password-bar .see" ).removeClass( "act" );
  } )

} )