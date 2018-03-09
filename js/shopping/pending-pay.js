$( function () {
  var oCancel = "";

  // 无数据显示
  emptyInit()
  function emptyInit() {
    myJS.emptyDataImg($(".order-list"),{
      src:"../../img/public-img/empty/pending@3x.png",
      str:"您还没有待付款课程"
    })
  }

  $( ".btn-cancel" ).on("click",function () {
    var that = $(this)

    myJS.modalBox({
      headerStr:"确定取消订单？",
      okBtnStr:"是",
      noBtnStr:"否",
      runCB:function(){ // 触发时
        oCancel = that.parents( "li" ); // 绑定被删除对象
      },
      okBtnCB:function(){ // 点击 “是” 按钮时 ,
        oCancel.remove(); // 删除被绑定对象
        myJS.fixText( "订单已取消" );
        emptyInit();
        console.log(that)
      },
      noBtnCB:function(){ // 点击 “否” 按钮时
        oCancel = ""; // 重置被删除对象为空
      }
    })

  })




} )