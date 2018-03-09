$( function () {

  //根据屏宽改变根字体大小
  myJS.htmlFontSize();
  $( window ).resize( function () {
    myJS.htmlFontSize();
    var rootRem = $( "html" ).css( "font-size" );
  } )




} )