$( function () {
  console.log( "is user-address-manage" )
  myJS.emptyDataImg($(".listwarp > ul"),{
    str:"还没有收货地址"
  });

  var oCancel = "";

  // 点击取消订单
  $( ".delete" ).on( "click", function () {
    $( ".bn-mask" ).fadeToggle();
    $( ".fix-black-mask" ).fadeToggle();
    oCancel = $( this ).parents( "li" ); // 绑定被删除对象
  } )

  // 弹框 关闭按钮 “否”按钮
  $( ".close-btn, .btn-no" ).on( "click", function () {
    $( this ).parents( ".bn-mask" ).fadeToggle();
    $( ".fix-black-mask" ).fadeToggle();
    oCancel = ""; // 重置被删除对象为空
  } )

  // “是” 按钮 可在此处与后台交互数据
  $( ".btn-yes" ).on( "click", function () {
    oCancel.remove(); // 删除被绑定对象
    $( this ).parents( ".bn-mask" ).fadeToggle();
    $( ".fix-black-mask" ).fadeToggle();

    myJS.fixText( "已删除地址" );
    myJS.emptyDataImg($(".listwarp > ul"),{
      str:"还没有收货地址"
    });


  } )


} )