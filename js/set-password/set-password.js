$( function () {
  console.log( "is sign-in" )
  var oPsw = $( "#password-input" );
  var oPswAgn = $( "#password-again-input" );

  // 提示文本悬浮
  $( "#password-input, #password-again-input" ).on( "focus", function () {
    if ( $( this ).val() === '' ) {
      $( this ).next().addClass( "fix-input-text" )
    }
  } ).on( "blur", function () {
    if ( $( this ).val() === '' ) {
      $( this ).next().removeClass( "fix-input-text" )
    }
  } )

  // 监听输入密码
  oPsw.on( "input propertychange", function () {
    tipsTextChange( oPsw, "请输入密码" )
    btnAct();

  } )

  // 监听再次输入密码
  oPswAgn.on( "input propertychange", function () {
    tipsTextChange( oPswAgn, "再次输入密码" )
    btnAct();

  } )

  // 显示密码
  $( "#see" ).on( "click", function () {
    seePassword()
  } )

  // 下一步按钮
  $( "#btn-next" ).on( "click", function () {

    if ( $( this ).hasClass( "act" ) ) {
      var that = $( this );
      var pswReg = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/; // 6-16大小写与数字 Z后可添加允许的特殊符号
      var pswAgnReg = oPsw.val();
      var allTrue = 0;

      if ( !pswReg.test( oPsw.val() ) ) { // 输入密码
        tipsTextChange( oPsw, "请输入6-16位大小写字母与数字混合的密码", true )
        that.removeAttr( "href" );
      } else {
        tipsTextChange( oPsw, "请输入密码" )
        allTrue++;
      }

      if ( pswAgnReg !== oPswAgn.val() ) { // 再次输入密码
        tipsTextChange( oPswAgn, "两次输入密码不一致，请重新输入密码", true )
        that.removeAttr( "href" );
      } else {
        tipsTextChange( oPswAgn, "再次输入密码" )
        allTrue++;
      }

      if ( allTrue == 2 ) {
        myJS.fixText( "修改成功,将自动跳转登录", function () {
          window.location.href = "../../pages/sign-in/sign-in.html";
        } )

      }
    }

  } )

  // 下一步 按钮状态
  function btnAct() {
    if ( oPsw.val() !== "" && oPswAgn.val() !== "" ) {
      $( ".btn-next" ).addClass( "act" );
    } else {
      $( ".btn-next" ).removeClass( "act" );
    }
  }

  // 密码错误样式 及 正确恢复样式
  function tipsTextChange( obj, str, err ) {
    if ( err ) {
      obj.parent().find( ".tips" ).html( str ).addClass( "err" );
    } else {
      obj.parent().find( ".tips" ).html( str ).removeClass( "err" );
    }

  }

  // 显示密码
  seePassword()

  function seePassword() {
    if ( !$( "#see" ).is( ":checked" ) ) {
      $( "#password-input, #password-again-input" ).attr( "type", "password" )
    } else {
      $( "#password-input, #password-again-input" ).attr( "type", "text" )

    }
  }

} )