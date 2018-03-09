$( function () {

  var oName = $( "#name-input" ); // 真实姓名
  var oSex = $( ".sexy-input" ); // 选手性别
  var oPhone = $( "#phone-input" ); // 手机号码
  var oIDNum = $( "#idcard-input" ); // 身份证号
  var oBirthday = $( "#birthday-input" ); // 生日日期
  var oFrontBase = $( "#front-base64" ); // 身份证正面
  var oBackBase = $( "#back-base64" ); // 身份证背面
  var oTeacher = $( "#teacher-input" ); // 指导老师
  var oTphone = $( "#t-phone-input" ); // 导师手机号码
  var oSchool = $( "#school-input" ); // 就学机构
  var oAddress = $( "#address-input" ); // 证书邮寄

  var submitBtn = $( "#btn-submit" ); // 下一步按钮

  // 监听真实姓名输入框
  oName.on( "input propertychange", function () {
    reInput( $( this ) );
  } )

  // 监听选手性别选择
  oSex.on( "change", function () {
    if ( oSex.is( ":checked" ) ) {
      btnAct();
      tipsOut( $( this ).parents( ".sexy-bar > label" ) );
    }

  } )

  // 监听手机号码输入框
  oPhone.on( "input propertychange", function () {
    reInput( $( this ) );
  } )

  // 监听身份证号输入框
  oIDNum.on( "input propertychange", function () {
    reInput( $( this ) );
  } )

  // 监听生日日期输入框
  oBirthday.on( "input propertychange", function () {
    reInput( $( this ) );
  } )

  // 监听身份证正面输入框
  oFrontBase.on( "input propertychange", function () {
    reInput( $( this ) );
  } )

  // 监听身份证背面输入框
  oBackBase.on( "input propertychange", function () {
    reInput( $( this ) );
  } )

  // 监听指导老师输入框
  oTeacher.on( "input propertychange", function () {
    reInput( $( this ) );
  } )

  // 监听导师手机号码输入框
  oTphone.on( "input propertychange", function () {
    reInput( $( this ) );
  } )

  // 监听就学机构输入框
  oSchool.on( "input propertychange", function () {
    reInput( $( this ) );
  } )

  // 监听证书邮寄输入框
  oAddress.on( "input propertychange", function () {
    reInput( $( this ) );
  } )

  // 重新输入
  function reInput( obj ) {
    if ( obj.val().length > 0 ) {
      btnAct();
      tipsOut( obj );
    }
  }

  // 提交资料 按钮状态
  function btnAct() {
    // $( ".btn-submit" ).addClass( "act" );

    if (
      oName.val() !== "" &&
      oSex.is( ":checked" ) &&
      oPhone.val() !== "" &&
      oIDNum.val() !== "" &&
      oBirthday.val() !== "" &&
      oFrontBase.val() !== "" &&
      oBackBase.val() !== "" &&
      oTeacher.val() !== "" &&
      oTphone.val() !== "" &&
      oSchool.val() !== "" &&
      oAddress.val() !== ""
    ) {
      $( ".btn-submit" ).addClass( "act" );
    } else {
      $( ".btn-submit" ).removeClass( "act" );
    }
  }

  // 点击 提交资料
  $( "#btn-submit" ).on( "click", function () {
    var regArr = [ "真实姓名", "选手性别", "手机号码", "身份证号", "生日日期", "身份证正面", "身份证背面", "指导老师", "导师手机", "就学机构", "证书邮寄" ]
    var regLen = regArr.length; // 需判断正则个数

    if ( $( this ).hasClass( "act" ) ) {
      var that = $( this );

      var oNameReg = /^[a-zA-Z\u4e00-\u9fa5]+$/; // 真实姓名 - 中、英
      var oSexReg = ":checked"; // 选手性别 - 其中一项
      var oPhoneReg = /^1(3|4|5|7|8)\d{9}$/; // 手机号码 - 手机号码
      var oIDNumReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; // 身份证号 - 身份证号
      var oBirthdayReg = /^(\d{4})-(\d{2})-(\d{2})$/ // 生日日期 - 选中日期
      var oFrontBaseReg = /[^\a-\z\A-\Z0-9\+\:\=\\\/]/g; // 身份证正面 - 有base64值
      var oBackBaseReg = /[^\a-\z\A-\Z0-9\+\:\=\\\/]/g; // 身份证背面 - 有base64值
      var oTeacherReg = /^[a-zA-Z\u4e00-\u9fa5]+$/; // 指导老师 - 中、英
      var oTphoneReg = /^1(3|4|5|7|8)\d{9}$/; // 导师手机号码 - 手机号码
      var oSchoolReg = /^[a-zA-Z0-9\u4e00-\u9fa5]+$/; // 就学机构 - 中、英、数字
      var oAddressReg = /^[a-zA-Z0-9\u4e00-\u9fa5]+$/; // 证书邮寄 - 中、英、数字

      var formData = {};
      var allTrue = 0;

      // 真实姓名检测
      regCheck( oName, oNameReg ) ? allTrue++ : allTrue += 0;
      console.log( "oNameReg ---------:" + regCheck( oName, oNameReg ) )

      // 选手性别
      oSex.is( oSexReg ) ? allTrue++ : allTrue += 0;
      console.log( "oSexReg ---------:" + oSex.parents( ".sexy-bar" ).find( "input:checked" ).val() )

      // 电话号码检测
      regCheck( oPhone, oPhoneReg ) ? allTrue++ : allTrue += 0;
      console.log( "oPhoneReg ---------:" + regCheck( oPhone, oPhoneReg ) )

      // 身份证号
      regCheck( oIDNum, oIDNumReg ) ? allTrue++ : allTrue += 0;
      console.log( "oIDNumReg ---------:" + regCheck( oIDNum, oIDNumReg ) )

      // 生日日期
      regCheck( oBirthday, oBirthdayReg ) ? allTrue++ : allTrue += 0;
      console.log( "oBirthdayReg ---------:" + regCheck( oBirthday, oBirthdayReg ) )

      // 身份证正面
      regCheck( oFrontBase, oFrontBaseReg ) ? allTrue++ : allTrue += 0;
      console.log( "oFrontBaseReg ---------:" + regCheck( oFrontBase, oFrontBaseReg ) )

      // 身份证背面
      regCheck( oBackBase, oBackBaseReg ) ? allTrue++ : allTrue += 0;
      console.log( "oBackBaseReg ---------:" + regCheck( oBackBase, oBackBaseReg ) )

      // 老师姓名检测
      regCheck( oTeacher, oTeacherReg ) ? allTrue++ : allTrue += 0;
      console.log( "oTeacherReg ---------:" + regCheck( oTeacher, oTeacherReg ) )

      // 导师手机号码检测
      regCheck( oTphone, oTphoneReg ) ? allTrue++ : allTrue += 0;
      console.log( "oTphoneReg ---------:" + regCheck( oTphone, oTphoneReg ) )

      // 就学机构检测
      regCheck( oSchool, oSchoolReg ) ? allTrue++ : allTrue += 0;
      console.log( "oSchoolReg ---------:" + regCheck( oSchool, oSchoolReg ) )

      // 证书邮寄检测
      regCheck( oAddress, oAddressReg ) ? allTrue++ : allTrue += 0;
      console.log( "oAddressReg ---------:" + regCheck( oAddress, oAddressReg ) )

      console.log( allTrue )
      console.log( regArr.length )

      formData.oName = oName.val(); // 真实姓名
      formData.oSex = oSex.parents( ".sexy-bar" ).find( "input:checked" ).val(); // 选手性别
      formData.oPhone = oPhone.val(); // 手机号码
      formData.oIDNum = oIDNum.val(); // 身份证号
      formData.oBirthday = oBirthday.val(); // 生日日期
      formData.oFrontBase = oFrontBase.val(); // 身份证正面
      formData.oBackBase = oBackBase.val(); // 身份证背面
      formData.oTeacher = oTeacher.val(); // 指导老师
      formData.oTphone = oTphone.val(); // 导师手机号码
      formData.oSchool = oSchool.val(); // 就学机构
      formData.oAddress = oAddress.val(); // 证书邮寄

      console.log( formData ) // 后台可拿此数据

      if ( allTrue == regArr.length ) {
        myJS.fixText( "报名成功，即将跳转到支付页面（此处若为免费活动，则跳转到我的活动，可由下面链接设置）", function () {
          window.location.href = "../../pages/shopping/activity-payment.html"; // TODO 如带参数可在链接后接入
        } )
      }
    }
  } )

  // 正则封装
  function regCheck( inputId, reg ) {

    var ojb = inputId;
    var oReg = reg;

    if ( !oReg.test( ojb.val() ) ) {
      tipsIn( ojb );
      submitBtn.removeAttr( "href" );
      return false;
    } else {
      tipsOut( ojb );
      // allTrue++;
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

  // // 选手性别 已选
  // function sexPick( allTrue ) {
  // tipsOut( $( ".sexy-bar > label" ) );
  // console.log("已选：：：" +allTrue)
  // return allTrue++;
  // }
  // // 选手性别 未选
  // function sexNoPick( allTrue ) {
  // tipsIn( $( ".sexy-bar > label" ) );
  // console.log("未选：：：" +allTrue)
  // return allTrue += 0;
  // }

  // 生日选择
  $( "#birthday-input" ).focus( function () {
    document.activeElement.blur();
  } );
  var calendar = new datePicker();

  var oDate = new Date();
  var oYear = oDate.getFullYear();
  var oMonth = oDate.getMonth() + 1;
  var oDay = oDate.getDate();
  var toDay = oYear + "-" + oMonth + "-" + oDay;

  calendar.init( {
    'trigger': '#birthday-input',
    /*按钮选择器，用于触发弹出插件*/
    'type': 'date',
    /*模式：date日期；datetime日期时间；time时间；ym年月；*/
    'minDate': '1900-1-1',
    /*最小日期*/
    'maxDate': toDay,
    /*最大日期*/
    'onSubmit': function () { /*确认时触发事件*/
      var theSelectData = calendar.value;
    },
    'onClose': function () { /*取消时触发事件*/ }
  } );

  // 设置canvas宽高比例
  $( window ).resize( function () {
    setCanvasWH( $( "#front-canvas" ) );
    setCanvasWH( $( "#back-canvas" ) );
  } )

  setCanvasWH( $( "#front-canvas" ) );
  setCanvasWH( $( "#back-canvas" ) );

  function setCanvasWH( canvas ) {
    var oCanvas = canvas;
    var oCanvasW = oCanvas.width();
    oCanvas.attr( {
      "width": oCanvasW,
      "height": oCanvasW / 1.6
    } );
    fSetUserImg( "front-canvas", "front-file", "front-base64" );
    fSetUserImg( "back-canvas", "back-file", "back-base64" );
  }

  // 默认图片
  // fDefaultImg ("front-canvas","front-file","点击上传报名者本人身份证清晰照(正面)");
  // fDefaultImg ("back-canvas","back-file","点击上传报名者本人身份证清晰照(背面)");
  function fDefaultImg( canvasId, fileId, str ) {
    if ( document.getElementById( canvasId ) ) {
      var oImgCanvas = document.getElementById( canvasId );
      var oSelectBtn = document.getElementById( fileId );
      var ctx = oImgCanvas.getContext( "2d" );
      var oImg = new Image();
      ctx.clearRect( 0, 0, oImgCanvas.width, oImgCanvas.height ); // 先清空
      oImg.src = "../../img/activity/tianjia@2x.png"; // 默认图片
      oImg.onload = function () {
        // ( img, dx, dy )
        // ( img, dx, dy, dWidth, dHeight )
        // ( img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight )

        // 图
        var dWidth = oImgCanvas.width / 8;
        var dHeight = oImgCanvas.width / 8;
        var dx = oImgCanvas.width / 2 - dWidth / 2
        var dy = oImgCanvas.width / 4.5 - dWidth / 3
        ctx.drawImage( oImg, dx, dy, dWidth, dHeight );

        // 文本
        ctx.font = "1.6rem Arial";
        ctx.fillStyle = "rgba(153,153,153,1)";
        ctx.textAlign = "center";
        ctx.fillText( str, oImgCanvas.width / 2, oImgCanvas.width / 2.5 );
      }

    }
  }

  // 画出上传图片
  fSetUserImg( "front-canvas", "front-file", "front-base64" );
  fSetUserImg( "back-canvas", "back-file", "back-base64" );

  function fSetUserImg( canvasId, fileId, base64 ) {

    if ( document.getElementById( canvasId ) ) {
      var oImgCanvas = document.getElementById( canvasId );
      var oSelectBtn = document.getElementById( fileId );
      var ctx = oImgCanvas.getContext( "2d" );

      // 添加图片
      oSelectBtn.onchange = function () {
        // console.log(oSelectBtn.files[0])//获取文件
        var fr = new FileReader();
        fr.readAsDataURL( oSelectBtn.files[ 0 ] );
        // console.log(fr.result);//必须解析完文件时才有值
        fr.onload = function () {
          // 表示解析完成
          var oImg = new Image();
          oImg.src = fr.result; //图片的dataURL
          // console.log(fr.result);//必须解析完文件时才有值
          $( "#" + base64 ).val( fr.result );

          oImg.onload = function () {
            ctx.clearRect( 0, 0, oImgCanvas.width, oImgCanvas.height ); // 先清空
            ctx.drawImage( oImg, 0, 0, oImgCanvas.width, oImgCanvas.height );
          }

        }
      }
    }
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