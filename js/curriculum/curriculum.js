$( function () {

  // 无数据时显示
  myJS.emptyDataImg($(".curriculum .main"),{
    str:"还没有课程，选课报班的课程会在这里显示哦~",
    href:"../../pages/choice-curriculum/choice-curriculum.html", // 可链接传参
    btnStr:"+立即选课"
  })

  // 下拉刷新
  $(".curriculum").pullToRefresh({
    onRefresh: function () { /* 当下拉刷新触发的时候执行的回调 */

      setTimeout(function () { // 模拟异步
        console.log(new Date())
        $(".curriculum").pullToRefreshDone(); // 完成刷新后需重置！
      },1500)

    },
    onPull: function (percent) { /* 用户下拉过程中会触发，接收一个百分比表示用户下拉的比例 */
      console.log(percent)
    }
  });

  // 点击涟漪
  myJS.rippleAn($(".tabs > li > a"))

  // tab 切换重置
  tabInit( 0 );

  // tab 点击切换
  $( ".tabs > li" ).on( "click", function () {
    if ( $( this ).hasClass( "act" ) ) {
      return;
    } else {

      tabInit( $(this).index() )

    }
  } )

  // tab 切换
  function tabInit( n ) {
    $( ".tabs > li" ).removeClass( "act" ); // 选中去除
    $( ".tabs > li" ).eq( n ).addClass( "act" ); // 选中添加
    $( ".con-list" ).hide(); // 未选中隐藏
    $( ".con-list" ).eq( n ).fadeIn(); // 选中显示
  }

} )
