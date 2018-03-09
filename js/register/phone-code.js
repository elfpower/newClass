$( function () {
  console.log( "is set-password" )

  // 监听手机号输入框
  $( "#phone-input" ).on( "input propertychange", function () {
    if ( $( this ).val().length > 0 ) {
      btnAct();
      $( "#get-code" ).attr( "disabled", false );
      tipsOut( $( this ) )
    } else {
      $( "#get-code" ).attr( "disabled", true );
    }

  } )

  // 监听验证码输入框
  $( "#code-input" ).on( "input propertychange", function () {
    if ( $( this ).val().length > 0 ) {
      btnAct();
      tipsOut( $( this ) );
    }
  } )

  // 获取验证码
  $( "#get-code" ).on( "click", function () {

    // on 为倒计时进行中
    if ( $( this ).hasClass( "on" ) ) {
      return;
    } else {
      var num = 0;
      var maxNum = 60; // 定义倒计时秒数
      var timer = null;
      var that = $( this );
      that.addClass( "on" );
      myJS.fixText( "验证码已发送," + maxNum + "秒后可重新获取" )
      // 触发倒计时
      clearInterval( timer );
      timer = setInterval( function () {

        if ( num < maxNum ) {
          num++
          that.val( num + "s" );
        } else {
          clearInterval( timer );
          that.val( "获取验证码" ).removeClass( "on" );
        }

      }, 1000 )
    }

  } )

  // 下一步 按钮状态
  function btnAct() {
    if ( $( "#phone-input" ).val() !== "" && $( "#code-input" ).val() !== "" ) {
      $( ".btn-next" ).addClass( "act" );
    } else {
      $( ".btn-next" ).removeClass( "act" );
    }
  }

  // 点击下一步
  $( "#btn-next" ).on( "click", function () {
    if ( $( this ).hasClass( "act" ) ) {
      var that = $( this );
      var phomeNum = $( "#phone-input" );
      var codeNum = $( "#code-input" );
      var phoneReg = /^1(3|4|5|7|8)\d{9}$/;
      var codeReg = /^\d{6}$/; // 此处只检测验证码长度，需从后台先获取验证码，再进行比对
      var allTrue = 0;
      if ( !phoneReg.test( phomeNum.val() ) ) { // 检验电话号码
        tipsIn( phomeNum );
        that.removeAttr( "href" );
      } else {
        tipsOut( phomeNum );
        allTrue++;
      }

      if ( !codeReg.test( codeNum.val() ) || codeNum.val() !== "123456" ) { // 检验验证码 ，此处 123456 为伪数据， 应换为后台的真实数据
        tipsIn( codeNum );
        that.removeAttr( "href" );
      } else {
        tipsOut( codeNum );
        allTrue++;
      }

      if ( allTrue == 2 ) {
        // 后台应先查询手机是否已注册，假设 13611112222 为已注册手机
        if ( phomeNum.val() == "13611112222" ) {
          myJS.fixText( "此号码已注册" )
        } else {
          that.attr( "href", "" ); // TODO 加入跳转链接，可在此处传值给后台
        }
      }
    }

  } )

  // 错误提示进场动画
  function tipsIn( obj ) {
    var oTips = obj.parent().find( "i" );
    oTips.addClass( "tips-in" );
  }

  // 错误提示退场动画
  function tipsOut( obj ) {
    var oTips = obj.parent().find( "i" );

    if ( oTips.hasClass( "tips-in" ) ) {
      oTips.removeClass( "tips-in" );
      setTimeout( function () {
        oTips.addClass( "tips-out" );
      }, 30 )
    }

    oTips.on( "animationend", function () {
      oTips.removeClass( "tips-out" )
    } )

  }

} )