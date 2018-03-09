$( function () {

  // 选区开启
  $( ".select-city-bar" ).on( "click", function () {
    $( ".select-city-fixbox" ).slideToggle();
    $( ".fix-black-mask" ).fadeToggle();
  } )

  // 选区
  $( ".area-list >ul >li" ).on( "click", function () {
    if ( $( this ).hasClass( "act" ) ) {
      return;
    } else {
      $( ".area-list >ul >li" ).removeClass( "act" );
      $( this ).addClass( "act" );
      $( ".street-list >ul" ).removeClass( "act" );
      $( ".street-list >ul" ).eq( $( this ).index() ).addClass( "act" );
    }
  } )

  // 选街道
  $( ".street-list >ul >li" ).on( "click", function () {
    if ( $( this ).hasClass( "act" ) ) {
      return;
    } else {
      $( ".street-list >ul >li" ).removeClass( "act" );
      $( this ).addClass( "act" );
      $( ".select-city-fixbox" ).slideToggle();
      $( ".select-city-bar" ).html( $( this ).html() );

      $( ".fix-black-mask" ).fadeToggle();
      console.log($( this ).html())
    }

  } )

  // 点击黑遮罩
  $( ".fix-black-mask" ).on( "click", function () {
    $( this ).fadeToggle();
    $( ".select-city-fixbox" ).slideUp();
  } )

  // 获取当天日期
  function getToDayDate() {

    var d = new Date();
    var toDay = "";

    var str = d.getFullYear() + "-";
    str += ( d.getMonth() + 1 ) + "-";
    str += d.getDate() + "";
    return str;
  }

  // 日历设置
  var dateRange = new pickerDateRange( 'pickdate', {
    success: function ( obj ) {
      console.log( obj );
      console.log(obj.startDate)
    }, // 选择后的回调，可在此处传值到后台
    theme: 'ta', // 样式
    isSingleDay: true, // 只能选择单日
    shortOpr: true, // 显示单日
    autoSubmit: true, // 无确定按钮
  } );

  // console.log(getToDayDate())

  // 预约按钮
  $( ".teacher-list > li > .task > input[type='button']" ).on( "click", function () {
    $( ".bn-mask" ).fadeToggle();
    $( ".fix-black-mask" ).fadeToggle();
  } )

  // 预约弹框 关闭按钮
  $( ".close-btn" ).on( "click", function () {
    $( this ).parents( ".bn-mask" ).fadeToggle();
    $( ".fix-black-mask" ).fadeToggle();
  } )

} )