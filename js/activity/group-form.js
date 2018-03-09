$( function () {

  var oName = $( "#name-input" ); // 团队名称
  var oNum = $( "#num-input" ); // 参加人数
  var oTeacher = $( "#teacher-input" ); // 指导老师
  var oPhone = $( "#phone-input" ); // 手机号码

  var nextBtn = $( "#btn-next" ); // 下一步按钮

  // 监听团队名称输入框
  oName.on( "input propertychange", function () {
    if ( $( this ).val().length > 0 ) {
      btnAct();
      tipsOut( $( this ) );
    }
  } )

  // 监听团队人数输入框
  oNum.on( "input propertychange", function () {
    if ( $( this ).val().length > 0 ) {
      btnAct();
      tipsOut( $( this ) );
    }
  } )

  // 监听老师姓名输入框
  oTeacher.on( "input propertychange", function () {
    if ( $( this ).val().length > 0 ) {
      btnAct();
      tipsOut( $( this ) );
    }
  } )

  // 监听手机号输入框
  oPhone.on( "input propertychange", function () {
    if ( $( this ).val().length > 0 ) {
      btnAct();
      tipsOut( $( this ) );
    }
  } )

  // 下一步 按钮状态
  function btnAct() {
    if ( oName.val() !== "" &&
      oNum.val() !== "" &&
      oTeacher.val() !== "" &&
      oPhone.val() !== "" ) {
      $( ".btn-next" ).addClass( "act" );
    } else {
      $( ".btn-next" ).removeClass( "act" );
    }
  }

  // 点击下一步
  $( "#btn-next" ).on( "click", function () {
    // var regLen = 4; // 需判断正则个数

    if ( $( this ).hasClass( "act" ) ) {
      var regArr = [ "团队名称", "团队人数", "老师姓名", "联系电话" ]

      var nameReg = /^[a-zA-Z\u4e00-\u9fa5]+$/; // TODO
      var numReg = /^\d{1,6}$/; // 1到6位数字
      var teacherReg = /^[a-zA-Z\u4e00-\u9fa5]+$/; // TODO
      var phoneReg = /^1(3|4|5|7|8)\d{9}$/; // 2017 年手机号码正则

      var allTrue = 0;

      // 团队名称检测
      regCheck( oName, nameReg ) ? allTrue++ : allTrue += 0;

      // 团队人数检测
      regCheck( oNum, numReg ) ? allTrue++ : allTrue += 0;
      // 老师姓名检测
      regCheck( oTeacher, teacherReg ) ? allTrue++ : allTrue += 0;

      // 电话号码检测
      regCheck( oPhone, phoneReg ) ? allTrue++ : allTrue += 0;

      console.log( allTrue )

      if ( allTrue == regArr.length ) {
        window.location.href = "single-form.html"; // 如带参数可在链接后接入
      }
    }

  } )

  // 正则封装
  function regCheck( inputId, reg ) {

    var ojb = inputId;
    var oReg = reg;

    if ( !oReg.test( ojb.val() ) ) {
      tipsIn( ojb );
      nextBtn.removeAttr( "href" );
      return false;
    } else {
      tipsOut( ojb );
      return true;
    }

  }

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

  // 监听退出页面 （ 前进 或 返回 ）
  $( window ).on( "popstate", function () {

    myJS.modalBox( {
      headerStr: "确认放弃修改报名资料吗？",
      okBtnStr: "放弃",
      noBtnStr: "继续",
      okBtnCB: function () {
        window.history.go( -1 );
      },
      noBtnCB: function () {
        return false;
      }
    } )

  } )

  // 设置 history
  pushHistory();

  function pushHistory() {
    var state = {
      title: "title",
      url: "#"
    };
    window.history.pushState( state, "title", "#" );
  }

} )