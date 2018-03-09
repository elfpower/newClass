$( function () {

  // 无数据显示
  emptyInit()
  function emptyInit() {
    if ($(".order-list").children().length > 0) {
      return;
    }else {
      myJS.emptyDataImg($(".order-list"),{
        str:"报名成功后，课程会出现在这里"
      })

      $(".bot-bar-pay, .bot-bar-edit, .top-bar").hide()

    }
  }




  // 编辑
  $( ".edit-btn" ).on( "click", function () {
    $( ".edit" ).addClass( "edit-on" )
  } )

  // 完成编辑
  $( ".finish-btn" ).on( "click", function () {
    $( ".edit" ).removeClass( "edit-on" )
  } )

  // 全选
  $( ".btn-all" ).on( "click", function () {
    if ( $( this ).hasClass( "all" ) ) {
      $( ".checkbox > input[type='checkbox']" ).prop( "checked", false );
      isAllPick()
    } else {
      $( ".checkbox > input[type='checkbox']" ).prop( "checked", true );
      isAllPick()
    }
  } )

  // 单选
  $( ".checkbox > input[type='checkbox']" ).on( "change", function () {
    var pick = $( ".checkbox > input[type='checkbox']" ).is( "checked" );
    isAllPick()
  } )

  // 检查是否全选
  function isAllPick() {
    var len = $( ".checkbox > input[type='checkbox']" ).size();
    var clen = $( ".checkbox > input[type='checkbox']:checked" ).size();
    if ( clen == len ) {
      $( ".btn-all" ).html( "取消全选" + "(" + clen + ")" ).addClass( "all" );
    } else {
      $( ".btn-all" ).html( "全选" + "(" + clen + ")" ).removeClass( "all" );
    }
    isLenNotZero();
  }

  // 检查选中个数是否大于 0
  function isLenNotZero() {
    var clen = $( ".checkbox > input[type='checkbox']:checked" ).size();
    if ( clen > 0 ) {
      $( ".btn-del" ).removeClass( "ban" );
    } else {
      $( ".btn-del" ).addClass( "ban" );
    }
  }

  // 点击删除
  $( ".btn-del" ).on( "click", function () {
    if ( $( this ).hasClass( "ban" ) ) {
      return;
    } else {
      var clen = $( ".checkbox > input[type='checkbox']:checked" ).size();
      if ( clen <= 0 ) {
        return;
      } else {
        $( ".bn-mask" ).fadeToggle();
        $( ".fix-black-mask" ).fadeToggle();
      }
    }

  } )

  // 弹框 关闭按钮 取消删除按钮
  $( ".close-btn, .btn-no" ).on( "click", function () {
    $( this ).parents( ".bn-mask" ).fadeToggle();
    $( ".fix-black-mask" ).fadeToggle();
  } )

  // 确认删除按钮 可在此处与后台交互数据
  $( ".btn-yes" ).on( "click", function () {
    $( ".checkbox > input[type='checkbox']:checked" ).parents( "li" ).remove();
    $( this ).parents( ".bn-mask" ).fadeToggle();
    $( ".fix-black-mask" ).fadeToggle();

    myJS.fixText( "已从购物车删除" );

    // if ( $( ".order-list > li" ).size() <= 0 ) {
      // $( ".bot-bar-pay" ).find( ".price" ).html( "合计: ￥0" )
      // // 后期需更改文本以及添加样式
      // $( ".order-list" ).append( '<div class="empty-tips">购物车为空（开发环境提示文本，生产环境请替换更生动词句）</div>' );
    // }
    isAllPick();
    emptyInit();
  } )

} )