$( function () {

  var oStar = $( ".star-bar .star" );
  var oKeyWord = $( ".keyword-list-bar > ul > li" );
  var maxLenNum = 120; // 评价输入字数限制
  var oLimit = $( ".limit" );
  var oLen = oLimit.find( "span" ).eq( 0 );
  var oMaxLen = oLimit.find( "span" ).eq( 1 );
  var arrKeyWord = [];

  console.log( "is comment-teacher" );

  // 评价选词
  oKeyWord.on( "click", function () {

    if ( $( this ).hasClass( "act" ) ) {
      $( this ).removeClass( "act" );
      arrKeyWord.splice($.inArray($(this).find("span").html(),arrKeyWord),1);
      console.log(arrKeyWord) // 此处获取数据
    } else {
      $( this ).addClass( "act" );
      arrKeyWord.push($(this).find("span").html())
      console.log(arrKeyWord) // 此处获取数据
    }


  } )

  // 星星 与 满意程度
  var classStr = "star-1 star-2 star-3 star-4 star-5";

  oStar.on( "click", function () {
    for ( var i = 0; i < oStar.size(); i++ ) {
      if ( $( this ).index() == i ) {
        $( this ).parent().removeClass( classStr )
        $( this ).parent().addClass( "star-" + ( $( this ).index() + 1 ) )
      }
    }

    if ( $( this ).index() == 0 ) {
      $( ".degree" ).html( "非常不满" );
    } else if ( $( this ).index() == 1 ) {
      $( ".degree" ).html( "不满意" );
    } else if ( $( this ).index() == 2 ) {
      $( ".degree" ).html( "还可以" );
    } else if ( $( this ).index() == 3 ) {
      $( ".degree" ).html( "很满意" );
    } else if ( $( this ).index() == 4 ) {
      $( ".degree" ).html( "非常满意" );
    } else {
      $( ".degree" ).html( "无意见" );
    }

  } )

  // 评价输入初始化
  commentInit();

  function commentInit() {
    $( "#comment-input" ).attr( "maxlength", maxLenNum );
    oLen.html( $( "#comment-input" ).val().length );
    oMaxLen.html( maxLenNum );
  }

  // 评价输入
  $( "#comment-input" ).on( "input propertychange", function () {
    var lenNum = $( this ).val().length;

    oLen.html( lenNum ); // 当前文本字数
    oMaxLen.html( maxLenNum ); // 限制字数

    if ( lenNum >= maxLenNum ) {
      oLimit.addClass( "act" );
    } else {
      oLimit.removeClass( "act" );
    }
  } )

} )