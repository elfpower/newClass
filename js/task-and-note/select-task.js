$( function () {

  // 作业筛选开启
  $( ".select-type-bar" ).on( "click", function () {
    $( ".select-task-fixbox" ).slideToggle();
    $( ".fix-black-mask" ).fadeToggle();
  } )

  // 选作业类型
  $( ".type-list >ul >li" ).on( "click", function () {
    if ( $( this ).hasClass( "act" ) ) {
      return;
    } else {
      $( ".type-list >ul >li" ).removeClass( "act" );
      $( this ).addClass( "act" );

      $( ".select-task-fixbox" ).slideToggle();
      $( ".fix-black-mask" ).fadeToggle();
      $( ".select-type-bar" ).html( $( this ).html() );
    }
  } )

  // 点击黑遮罩
  $( ".fix-black-mask" ).on( "click", function () {

    $( ".fix-black-mask" ).fadeToggle();
    $( ".select-task-fixbox" ).slideUp();
  } )

  // 日历设置
  var dateRange = new pickerDateRange( 'pickdate', {
    success: function ( obj ) {
      console.log( obj.startDate );
      console.log( obj.endDate );
    }, // 选择后的回调，可在此处传值到后台
  } );

  // 查看作业按钮
  $( ".task-list > li > .task > .btn-get" ).on( "click", function () {
    $( ".bn-mask" ).fadeToggle();
    $( ".fix-black-mask" ).fadeToggle();
  } )

  // 查看作业弹框 关闭按钮
  $( ".close-btn" ).on( "click", function () {
    $( this ).parents( ".bn-mask" ).fadeToggle();
    $( ".fix-black-mask" ).fadeToggle();
  } )

} )