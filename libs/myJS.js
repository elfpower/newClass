var myJS = {

	////操作字符串 -begin//////////////////////////////////////////////////////////////////////////////

	//去除字符串空格
	//去除空格  type 1-所有空格  2-前后空格  3-前空格 4-后空格
	trim : function (str,type){
    switch (type){
        case 1:return str.replace(/\s+/g,"");
        case 2:return str.replace(/(^\s*)|(\s*$)/g, "");
        case 3:return str.replace(/(^\s*)/g, "");
        case 4:return str.replace(/(\s*$)/g, "");
        default:return str;
    }
	},


	//字母大小写切换
	/*type
	1:首字母大写
	2：首页母小写
	3：大小写转换
	4：全部大写
	5：全部小写
	* */
	//changeCase('asdasd',1)
	//Asdasd
	changeCase : function ( str, type ) {
		function ToggleCase( str ) {
			var itemText = ""
			str.split( "" ).forEach(
				function ( item ) {
					if ( /^([a-z]+)/.test( item ) ) {
						itemText += item.toUpperCase();
					} else if ( /^([A-Z]+)/.test( item ) ) {
						itemText += item.toLowerCase();
					} else {
						itemText += item;
					}
				} );
			return itemText;
		}

		switch ( type ) {
			case 1:
				return str.replace( /^(\w)(\w+)/, function ( v, v1, v2 ) {
					return v1.toUpperCase() + v2.toLowerCase();
				} );
			case 2:
				return str.replace( /^(\w)(\w+)/, function ( v, v1, v2 ) {
					return v1.toLowerCase() + v2.toUpperCase();
				} );
			case 3:
				return ToggleCase( str );
			case 4:
				return str.toUpperCase();
			case 5:
				return str.toLowerCase();
			default:
				return str;
		}
	},

	//字符串循环复制
	//repeatStr(str->字符串, count->次数)
	//repeatStr('123',3)
	//"123123123"
	repeatStr : function ( str, count ) {
		var text = '';
		for ( var i = 0; i < count; i++ ) {
			text += str;
		}
		return text;
	},





	//字符串替换
	//字符串替换(字符串,要替换的字符,替换成什么)

	replaceAll: function ( str, AFindText, ARepText ) {
		raRegExp = new RegExp( AFindText, "g" );
		return str.replace( raRegExp, ARepText );
	},




	//替换*
	//replaceStr(字符串,字符格式, 替换方式,替换的字符（默认*）)
	replaceStr : function ( str, regArr, type, ARepText ) {
		var regtext = '',
			Reg = null,
			replaceText = ARepText || '*';
		//replaceStr('18819322663',[3,5,3],0)
		//188*****663
		//repeatStr是在上面定义过的（字符串循环复制），大家注意哦
		if ( regArr.length === 3 && type === 0 ) {
			regtext = '(\\w{' + regArr[ 0 ] + '})\\w{' + regArr[ 1 ] + '}(\\w{' + regArr[ 2 ] + '})'
			Reg = new RegExp( regtext );
			var replaceCount = repeatStr( replaceText, regArr[ 1 ] );
			return str.replace( Reg, '$1' + replaceCount + '$2' )
		}
		//replaceStr('asdasdasdaa',[3,5,3],1)
		//***asdas***
		else if ( regArr.length === 3 && type === 1 ) {
			regtext = '\\w{' + regArr[ 0 ] + '}(\\w{' + regArr[ 1 ] + '})\\w{' + regArr[ 2 ] + '}'
			Reg = new RegExp( regtext );
			var replaceCount1 = repeatSte( replaceText, regArr[ 0 ] );
			var replaceCount2 = repeatSte( replaceText, regArr[ 2 ] );
			return str.replace( Reg, replaceCount1 + '$1' + replaceCount2 )
		}
		//replaceStr('1asd88465asdwqe3',[5],0)
		//*****8465asdwqe3
		else if ( regArr.length === 1 && type == 0 ) {
			regtext = '(^\\w{' + regArr[ 0 ] + '})'
			Reg = new RegExp( regtext );
			var replaceCount = repeatSte( replaceText, regArr[ 0 ] );
			return str.replace( Reg, replaceCount )
		}
		//replaceStr('1asd88465asdwqe3',[5],1,'+')
		//"1asd88465as+++++"
		else if ( regArr.length === 1 && type == 1 ) {
			regtext = '(\\w{' + regArr[ 0 ] + '}$)'
			Reg = new RegExp( regtext );
			var replaceCount = repeatSte( replaceText, regArr[ 0 ] );
			return str.replace( Reg, replaceCount )
		}
	},




	//检测字符串
	//checkType('165226226326','phone')
	//false
	//大家可以根据需要扩展
	checkType : function ( str, type ) {
		switch ( type ) {
			case 'email':
				return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test( str );
			case 'phone':
				return /^1[3|4|5|7|8][0-9]{9}$/.test( str );
			case 'tel':
				return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test( str );
			case 'number':
				return /^[0-9]$/.test( str );
			case 'english':
				return /^[a-zA-Z]+$/.test( str );
			case 'chinese':
				return /^[\u4E00-\u9FA5]+$/.test( str );
			case 'lower':
				return /^[a-z]+$/.test( str );
			case 'upper':
				return /^[A-Z]+$/.test( str );
			default:
				return true;
		}
	},






	//检测密码强度
	//checkPwd('12asdASAD')
	//3(强度等级为3)
	checkPwd : function ( str ) {
		var nowLv = 0;
		if ( str.length < 6 ) {
			return nowLv
		}
		if ( /[0-9]/.test( str ) ) {
			nowLv++
		}
		if ( /[a-z]/.test( str ) ) {
			nowLv++
		}
		if ( /[A-Z]/.test( str ) ) {
			nowLv++
		}
		if ( /[\.|-|_]/.test( str ) ) {
			nowLv++
		}
		return nowLv;
	},


	//随机码
	randomNumber : function ( count ) {
		return Math.random().toString( count ).substring( 2 );
	},


	//str 字符串中 strSplit 出现的次数
	//str - 字符串,strSplit - 要查询出现次数的字符串
	countStr : function (str,strSplit){
    return str.split(strSplit).length-1
	},



	//现金额大写转换函数
	//upDigit(168752632)
	//"人民币壹亿陆仟捌佰柒拾伍万贰仟陆佰叁拾贰元整"
	//upDigit(1682)
	//"人民币壹仟陆佰捌拾贰元整"
	//upDigit(-1693)
	//"欠人民币壹仟陆佰玖拾叁元整"
	upDigit : function ( n ) {
		var fraction = [ '角', '分' ];
		var digit = [ '零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖' ];
		var unit = [
			[ '元', '万', '亿' ],
			[ '', '拾', '佰', '仟' ]
		];
		var head = n < 0 ? '欠' : '';
		n = Math.abs( n );
		var s = '';
		for ( var i = 0; i < fraction.length; i++ ) {
			s += ( digit[ Math.floor( n * 10 * Math.pow( 10, i ) ) % 10 ] + fraction[ i ] ).replace( /零./, '' );
		}
		s = s || '整';
		n = Math.floor( n );
		for ( var i = 0; i < unit[ 0 ].length && n > 0; i++ ) {
			var p = '';
			for ( var j = 0; j < unit[ 1 ].length && n > 0; j++ ) {
				p = digit[ n % 10 ] + unit[ 1 ][ j ] + p;
				n = Math.floor( n / 10 );
			}
			s = p.replace( /(零.)*零$/, '' ).replace( /^$/, '零' ) + unit[ 0 ][ i ] + s;
		}
		return head + s.replace( /(零.)*零元/, '元' ).replace( /(零.)+/g, '零' ).replace( /^整$/, '零元整' );
	},


	////操作字符串 -end//////////////////////////////////////////////////////////////////////////////






	////操作数组 -begin//////////////////////////////////////////////////////////////////////////////

	//数组去重
	//ES6新增的Set数据结构，类似于数组，但是里面的元素都是唯一的 ，其构造函数可以接受一个数组作为参数
	//let arr=[1,2,1,2,6,3,5,69,66,7,2,1,4,3,6,8,9663,8]
	//let set = new Set(array);
	//{1,2,6,3,5,69,66,7,4,8,9663}
	//ES6中Array新增了一个静态方法from，可以把类似数组的对象转换为数组
	//Array.from(set)
	//[1,2,6,3,5,69,66,7,4,8,9663]
	removeRepeatArray : function ( arr ) {
		return Array.from( new Set( arr ) )
	},


	//数组顺序打乱
	upsetArr : function ( arr ) {
		return arr.sort( function () {
			return Math.random() - 0.5
		} );
	},


	//数组中最大值
	//这一块的封装，主要是针对数字类型的数组
	maxArr : function ( arr ) {
		return Math.max.apply( null, arr );
	},


	//数组中最小值
	minArr : function ( arr ) {
		return Math.min.apply( null, arr );
	},



	//数组求和
	//这一块的封装，主要是针对数字类型的数组
	//求和
	sumArr : function ( arr ) {
		var sumText = 0;
		for ( var i = 0, len = arr.length; i < len; i++ ) {
			sumText += arr[ i ];
		}
		return sumText
	},



	//数组平均值
	//平均值,小数点可能会有很多位，这里不做处理，处理了使用就不灵活了！
	covArr : function ( arr ) {
		var sumText = sumArr( arr );
		var covText = sumText / length;
		return covText
	},



	//从数组中随机获取元素
	randomOne : function ( arr ) {
		return arr[ Math.floor( Math.random() * arr.length ) ];
	},


	//返回数组（ 字符串） 一个元素出现的次数
	//getEleCount('asd56+asdasdwqe','a')
	//3
	//getEleCount([1,2,3,4,5,66,77,22,55,22],22)
	//2
	getEleCount : function ( obj, ele ) {
		var num = 0;
		for ( var i = 0, len = obj.length; i < len; i++ ) {
			if ( ele == obj[ i ] ) {
				num++;
			}
		}
		return num;
	},




	//返回数组（ 字符串） 出现最多的几次元素和出现次数
	//arr, rank->长度，默认为数组长度，ranktype，排序方式，默认降序
	getCount : function ( arr, rank, ranktype ) {
		var obj = {},
			k, arr1 = []
		//记录每一元素出现的次数
		for ( var i = 0, len = arr.length; i < len; i++ ) {
			k = arr[ i ];
			if ( obj[ k ] ) {
				obj[ k ]++;
			} else {
				obj[ k ] = 1;
			}
		}
		//保存结果{el-'元素'，count-出现次数}
		for ( var o in obj ) {
			arr1.push( {
				el: o,
				count: obj[ o ]
			} );
		}
		//排序（降序）
		arr1.sort( function ( n1, n2 ) {
			return n2.count - n1.count
		} );
		//如果ranktype为1，则为升序，反转数组
		if ( ranktype === 1 ) {
			arr1 = arr1.reverse();
		}
		var rank1 = rank || arr1.length;
		return arr1.slice( 0, rank1 );
	},





	//得到n1 - n2下标的数组
	//getArrayNum([0,1,2,3,4,5,6,7,8,9],5,9)
	//[5, 6, 7, 8, 9]
	//getArrayNum([0,1,2,3,4,5,6,7,8,9],2) 不传第二个参数,默认返回从n1到数组结束的元素
	//[2, 3, 4, 5, 6, 7, 8, 9]
	getArrayNum : function ( arr, n1, n2 ) {
		var arr1 = [],
			len = n2 || arr.length - 1;
		for ( var i = n1; i <= len; i++ ) {
			arr1.push( arr[ i ] )
		}
		return arr1;
	},



	//筛选数组
	//删除值为 'val'的数组元素
	//removeArrayForValue(['test','test1','test2','test','aaa'],'test','%')
	//["aaa"]   带有'test'的都删除
	//removeArrayForValue(['test','test1','test2','test','aaa'],'test')
	//["test1", "test2", "aaa"]  //数组元素的值全等于'test'才被删除
	removeArrayForValue : function ( arr, val, type ) {
		arr.filter( function ( item ) {
			return type === '%' ? item.indexOf( val ) !== -1 : item !== val
		} )
	},


	//随机返回一个范围的数字
	randomNumber : function ( n1, n2 ) {
		//randomNumber(5,10)
		//返回5-10的随机整数，包括5，10
		if ( arguments.length === 2 ) {
			return Math.round( n1 + Math.random() * ( n2 - n1 ) );
		}
		//randomNumber(10)
		//返回0-10的随机整数，包括0，10
		else if ( arguments.length === 1 ) {
			return Math.round( Math.random() * n1 )
		}
		//randomNumber()
		//返回0-255的随机整数，包括0，255
		else {
			return Math.round( Math.random() * 255 )
		}
	},



	//随进产生颜色
//	randomColor : function () {
//		//randomNumber是上面定义的函数
//		//写法1
//		return 'rgb(' + randomNumber( 255 ) + ',' + randomNumber( 255 ) + ',' + randomNumber( 255 ) + ')';
//
//		//写法2
//		return '#' + Math.random().toString( 16 ).substring( 2 ).substr( 0, 6 );
//
//		//写法3
//		var color = '#';
//		for ( var i = 0; i < 6; i++ ) {
//			color += '0123456789abcdef' [ randomNumber( 15 ) ];
//		}
//		return color;
//	},





	//操作数组 -end/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////











	////操作DOM -begin//////////////////////////////////////////////////////////////////////////////


	//检测对象是否有哪个类名
	hasClass : function ( obj, classStr ) {
		var arr = obj.className.split( /\s+/ ); //这个正则表达式是因为class可以有多个,判断是否包含
		return ( arr.indexOf( classStr ) == -1 ) ? false : true;
	},


	//添加类名
	addClass : function ( obj, classStr ) {
		if ( !this.hasClass( obj, classStr ) ) {
			obj.className += " " + classStr
		};
	},


	//删除类名
	removeClass : function ( obj, classStr ) {
		if ( this.hasClass( obj, classStr ) ) {
			var reg = new RegExp( '(\\s|^)' + classStr + '(\\s|$)' );
			obj.className = obj.className.replace( reg, '' );
		}
	},




	//替换类名( “被替换的类名”, ”替换的类名” )
	replaceClass : function ( obj, newName, oldName ) {
		removeClass( obj, oldName );
		addClass( obj, newName );
	},





	//获取兄弟节点
	siblings : function ( obj ) {
		var a = []; //定义一个数组，用来存o的兄弟元素
		var p = obj.previousSibling;
		while ( p ) { //先取o的哥哥们 判断有没有上一个哥哥元素，如果有则往下执行 p表示previousSibling
			if ( p.nodeType === 1 ) {
				a.push( p );
			}
			p = p.previousSibling //最后把上一个节点赋给p
		}
		a.reverse() //把顺序反转一下 这样元素的顺序就是按先后的了
		var n = obj.nextSibling; //再取o的弟弟
		while ( n ) { //判断有没有下一个弟弟结点 n是nextSibling的意思
			if ( n.nodeType === 1 ) {
				a.push( n );
			}
			n = n.nextSibling;
		}
		return a;
	},



	//设置样式
	css : function ( obj, json ) {
		for ( var attr in json ) {
			obj.style[ attr ] = json[ attr ];
		}
	},




	//设置文本内容
	html : function ( obj ) {
		if ( arguments.length == 0 ) {
			return this.innerHTML;
		} else if ( arguments.length == 1 ) {
			this.innerHTML = arguments[ 0 ];
		}
	},




	//显示
	show : function ( obj ) {
		obj.style.display = "";
	},

	//隐藏
	hide : function ( obj ) {
		obj.style.display = "none";
	},









	////操作DOM -end//////////////////////////////////////////////////////////////////////////////










	////操作 cookie -begin//////////////////////////////////////////////////////////////////////////////



	//设置cookie
	setCookie : function ( name, value, iDay ) {
		var oDate = new Date();
		oDate.setDate( oDate.getDate() + iDay );
		document.cookie = name + '=' + value + ';expires=' + oDate;
	},


	//获取cookie
	getCookie : function ( name ) {
		var arr = document.cookie.split( '; ' );
		for ( var i = 0; i < arr.length; i++ ) {
			var arr2 = arr[ i ].split( '=' );
			if ( arr2[ 0 ] == name ) {
				return arr2[ 1 ];
			}
		}
		return '';
	},


	//删除cookie
	removeCookie : function ( name ) {
		setCookie( name, 1, -1 );
	},



	////操作 cookie -end//////////////////////////////////////////////////////////////////////////////









  ////存取浏览器本地数据 -begin//////////////////////////////////////////////////////////////////////////////
  /* 参数       类型              作用
   * key     str    存取时用于对应
   * val     obj    存取的数据
   *
   *
  */
  // 存储数据到本地
  setLocalStore : function ( key, val ) {
    // 使用 localStorage 的 setItem 方法存储数据,
    // 使用 JSON.stringify 方法把 val 转换为字符串存储
    localStorage.setItem( key, JSON.stringify(val) );
  },

  // 获取本地数据
  getLocalStore : function ( key ) {
    // 凭 key 获取对应的本地数据
    // 使用 localStorage.getItem 获取到 key 对应的本地数据 ( 此时数据为字符串类型 )
    // 使用 JSON.parse 转换 key 对应的数据为 json 类型
    // 判断是否获取成功    成功： 返回 获取的本地数据   ， 失败： 返回 一个空数组 （用 '' , [] 等表示空亦可 ）
    return JSON.parse( localStorage.getItem(key) ) || {} ;
  },


  ////存取浏览器本地数据 -end//////////////////////////////////////////////////////////////////////////////








	//// 对象操作 -begin//////////////////////////////////////////////////////////////////////////////

	//清除对象中值为空的属性
	//filterParams({a:"",b:null,c:"010",d:123})
	//Object {c: "010", d: 123}
//	filterParams : function ( obj ) {
//		let _newPar = {};
//		for ( let key in obj ) {
//			if ( ( obj[ key ] === 0 || obj[ key ] ) && obj[ key ].toString().replace( /(^\s*)|(\s*$)/g, '' ) !== '' ) {
//				_newPar[ key ] = obj[ key ];
//			}
//		}
//		return _newPar;
//	},








	//// 对象操作 -end//////////////////////////////////////////////////////////////////////////////









	//// 操作url -begin//////////////////////////////////////////////////////////////////////////////


	//获取url参数
	//getUrlPrmt('segmentfault.com/write?draftId=122000011938')
	//Object{draftId: "122000011938"}
//	getUrlPrmt : function ( url ) {
//		url = url ? url : window.location.href;
//		let _pa = url.substring( url.indexOf( '?' ) + 1 ),
//			_arrS = _pa.split( '&' ),
//			_rs = {};
//		for ( let i = 0, _len = _arrS.length; i < _len; i++ ) {
//			let pos = _arrS[ i ].indexOf( '=' );
//			if ( pos == -1 ) {
//				continue;
//			}
//			let name = _arrS[ i ].substring( 0, pos ),
//				value = window.decodeURIComponent( _arrS[ i ].substring( pos + 1 ) );
//			_rs[ name ] = value;
//		}
//		return _rs;
//	},

	//设置url参数
	//setUrlPrmt({'a':1,'b':2})
	//a=1&b=2
//	setUrlPrmt : function ( obj ) {
//		let _rs = [];
//		for ( let p in obj ) {
//			if ( obj[ p ] != null && obj[ p ] != '' ) {
//				_rs.push( p + '=' + obj[ p ] )
//			}
//		}
//		return _rs.join( '&' );
//	},




	//// 操作url -end//////////////////////////////////////////////////////////////////////////////










	//// 操作Date -begin//////////////////////////////////////////////////////////////////////////////


	//到某一个时间的倒计时
	//getEndTime('2017/7/22 16:0:0')
	//"剩余时间6天 2小时 28 分钟20 秒"
	getEndTime : function ( endTime ) {
		var startDate = new Date(); //开始时间，当前时间
		var endDate = new Date( endTime ); //结束时间，需传入时间参数
		var t = endDate.getTime() - startDate.getTime(); //时间差的毫秒数
		var d = 0,
			h = 0,
			m = 0,
			s = 0;
		if ( t >= 0 ) {
			d = Math.floor( t / 1000 / 3600 / 24 );
			h = Math.floor( t / 1000 / 60 / 60 % 24 );
			m = Math.floor( t / 1000 / 60 % 60 );
			s = Math.floor( t / 1000 % 60 );
		}
		return "剩余时间" + d + "天 " + h + "小时 " + m + " 分钟" + s + " 秒";
	},



	//// 操作Date -end//////////////////////////////////////////////////////////////////////////////






	//// 屏幕适配 -end//////////////////////////////////////////////////////////////////////////////

	getFontSize : function () {
		var doc = document,
			win = window;
		var docEl = doc.documentElement,
			resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
			recalc = function () {
				var clientWidth = docEl.clientWidth;
				if ( !clientWidth ) return;
				//如果屏幕大于750（750是根据我效果图设置的，具体数值参考效果图），就设置clientWidth=750，防止font-size会超过100px
				if ( clientWidth > 750 ) {
					clientWidth = 750
				}
				//设置根元素font-size大小
				docEl.style.fontSize = 100 * ( clientWidth / 750 ) + 'px';
			};
		//屏幕大小改变，或者横竖屏切换时，触发函数
		win.addEventListener( resizeEvt, recalc, false );
		//文档加载完成时，触发函数
		doc.addEventListener( 'DOMContentLoaded', recalc, false );
	},
	//这样的设置，比如在屏幕宽度大于等于750px设备上，1rem=100px；图片显示就是宽高都是100px
	//比如在iphone6(屏幕宽度：375)上，375/750*100=50px;就是1rem=50px;图片显示就是宽高都是50px;




	//// 屏幕适配 -end//////////////////////////////////////////////////////////////////////////////


  // rem自适应
  /*
   *
  */
	htmlFontSize : function () {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var width = w > h ? h : w;
    width = width > 750 ? 750 : width
    var fz = ~~(width*100000/37.5)/10000
    document.getElementsByTagName("html")[0].style.cssText = 'font-size: ' + fz +"px";
    var realfz = ~~(+window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize.replace('px','')*10000)/1000
    if (fz !== realfz) {
      document.getElementsByTagName("html")[0].style.cssText = 'font-size: ' + fz * (fz / realfz) +"px";
    }
  },


  // 涟漪效果
  /*
   * -------------------------------------------------
   * | 参数          | 类型    |必须| 注解       |   作用         |   例子                      |
   * | obtn  | obj | 是 |jq选择器|点击生成涟漪  |$(".tab-btn")|
   * -------------------------------------------------
   *
  */
  rippleAn : function (obtn) {
    var parent, ink, d, x, y;
    $(obtn).on("click",function(e){
      parent = $(this).parent();
      parent.css({"overflow":"hidden","position":"relative"})
      //create .ink element if it doesn't exist
      if(parent.find(".ink").length == 0)
        parent.prepend("<s class='ink'></s>");

      ink = parent.find(".ink");
      //incase of quick double clicks stop the previous animation
      ink.removeClass("animate");

      //set size of .ink
      if(!ink.height() && !ink.width())
      {
        //use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
        d = Math.max(parent.outerWidth(), parent.outerHeight());
        ink.css({height: d, width: d});
      }

      //get click coordinates
      //logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
      x = e.pageX - parent.offset().left - ink.width()/2;
      y = e.pageY - parent.offset().top - ink.height()/2;

      //set the position and add class .animate
      ink.css({top: y+'px', left: x+'px'}).addClass("animate");
      // parent.css("overflow","auto")
      ink.on("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function () {
        ink.remove();
      })
    })
  },



  // 悬浮渐淡文本提示 , text -- 提示文本 ， fn -- 回调函数
  /*
   * --------------------------------------------------------------------
   * | 参数          | 类型    |必须|     注解                     |     作用                   |   例子                                     |
   * | text  | str | 是 |    提示文本                |提示用户操作是否成功  |"设置成功，即将跳转到首页"|
   * | fn    | fun | 否 | 动画结束后的回调函数 |文字淡出后执行的函数  |function(){//do } |
   * --------------------------------------------------------------------
   *
  */
  fixText : function (text,fn) {
    var str = text;
    var fixText = null;
    if ($("body").hasClass("isOnFixText")) {
    	return;
    }else {
      $("body").addClass("isOnFixText")
      $("body").append('<div class="fix-text"><div class="text">'+ str +'</div></div>');
      fixText = $("body").find(".fix-text");
      fixText.removeClass("animate");
      fixText.addClass("animate");
    }


    fixText.on("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function () {
      fixText.remove();
      $("body").removeClass("isOnFixText");
      if (fn) {
      	fn();
      }
    })
  },

  // 对话框
  /*
   * ----------------------------------------------------------------------------------------------
   * | 参数                                  |  类型       |必须 |     注解                     |      作用                  |             例子                                                    |
   * |confi          |  obj  | 否  | 包含以下属性的对象     |    入参渲染                |{trigger:$(".btn-cancel"),...,}  |
   * |confi.trigger  |  obj  | 否  |   jq选择器                 |  绑定事件触发器          |{trigger:$(".btn-cancel")}       |
   * |confi.headerStr|  str  | 否  |  蓝字文本（单行）      |  对话框的 title  |{headerStr:"对话框的标题"}           |
   * |confi.conStr   |str|arr| 否  |  黑字文本（多行）      |   对话框的内容           |{conStr：["第一行","第二行","第n行"] } |
   * |confi.singleBtn|  bool | 否  |   默认是双按钮           |  true为单按钮          |{singleBtn:false}                |
   * |confi.okBtnStr |  str  | 否  |   确认按钮文本           |    按钮文本                |{okBtnStr:"确定！"}                |
   * |confi.noBtnStr |  str  | 否  |   否定按钮文本           |    按钮文本                |{noBtnStr:"取消。"}                |
   * |confi.runCB    |  fun  | 否  |  触发时的回调函数      |  触发时要做的事          |{runCB:function(){alert(321)}}   |
   * |confi.okBtnCB  |  fun  | 否  |点击确认按钮的回调函数|点击确认按钮时要做的事|{okBtnCB:function(){alert("ok")}}|
   * |confi.noBtnCB  |  fun  | 否  |点击否定按钮的回调函数|点击否定按钮时要做的事|{noBtnCB:function(){alert("no")}}|
   * ----------------------------------------------------------------------------------------------
   * 注*: confi.conStr 可以是字符串 或者是 多个字符串组成的数组
  */

  modalBox : function (confi) {

    if (!confi || typeof(confi) !== "object") {
    	console.log("未设置对话框参数");
    	return;
    }else {

      var OBJ 				= confi 				|| "";  				// 设置
      var TRIGGER 		= OBJ.trigger 	|| "undefined"; // 点击按钮选择器
      var HEADER 			= OBJ.headerStr || "确认？"; 			// header里的文本内容
      var CON 				= setCon() 			|| ""; 					// con 里的文本内容
      var SINGLE_BTN 	= false 				|| OBJ.singleBtn;
      var OK 					= OBJ.okBtnStr 	|| "是"; 				// ok 按钮文本内容
      var NO 					= OBJ.noBtnStr 	|| "否"; 				// no 按钮文本内容
      var RUN_CB 			= OBJ.runCB 		|| null; 				// 触发后的回调
    	var OK_CB 			= OBJ.okBtnCB 	|| null; 				// 点击 ok 按钮的回调函数
      var NO_CB 			= OBJ.noBtnCB 	|| null; 				// 点击 no 按钮的回调函数

      var oBtnWarp = ""; // 存按钮

      // 内容设置
      function setCon() {
        if (!OBJ.conStr) {
        	return false
        }
        if (typeof(OBJ.conStr) == "string") {
          return OBJ.conStr;
        }else if (OBJ.conStr.constructor === Array) {
          var len = OBJ.conStr.length;
          var con = "";
          for (var i = 0;i<len;i++) {
            con += "<p>"+OBJ.conStr[i]+"</p>"
          }
          return con;
        }else {
          return false;
        }
      }

      // 按钮模板
      if (SINGLE_BTN) { // 单按钮
        oBtnWarp =
          '<div class="btnwarp">'+
            '<a class="btn-yes">'+OK+'</a>'+
          '</div>';

      }else { // 双按钮
        oBtnWarp =
          '<div class="btnwarp">'+
            '<a class="btn-yes">'+OK+'</a>'+
            '<a class="btn-no">'+NO+'</a>'+
          '</div>';

      }

      // 对话框模板
      var modalBoxTpl =
        '<div class="fix-black-mask"></div>'+
        '<div class="bn-mask">'+
          '<div class="modal-mask">'+
            '<div class="modal-box">'+
              '<div class="close-btn">'+
                '<img src="../../img/curriculum/guanbi@3x.png" />'+
              '</div>'+
              '<div class="header">'+HEADER+'</div>'+
              '<div class="con">'+
                '<p>'+CON+'</p>'+
              '</div>'+
              ''+oBtnWarp+''+
            '</div>'+
          '</div>'+
        '</div>';

      // runDefault();
      if (TRIGGER == "undefined") { // 无点击按钮直接运行
        runDefault();
      }else { // 有点击按钮则绑定按钮点击事件
        runTrigger();
      }


      // 直接运行
      function runDefault () {
        $("body > div").find(".fix-black-mask,.bn-mask").remove();
        $("body > div").append(modalBoxTpl);
        $( ".bn-mask" ).fadeIn();
        $( ".fix-black-mask" ).fadeIn();

        if (RUN_CB) {
          RUN_CB()
        }

        // 关闭
        $( ".close-btn, .btn-no" ).on( "click", function () {
          $( this ).parents( ".bn-mask" ).fadeToggle();
          $( ".fix-black-mask" ).fadeToggle();
          if (NO_CB) {
            NO_CB()
          }

        } )

        // “是” 按钮 可在此处与后台交互数据
        $( ".btn-yes" ).on( "click", function () {
          $( this ).parents( ".bn-mask" ).fadeToggle();
          $( ".fix-black-mask" ).fadeToggle();
          if (OK_CB) {
            OK_CB()
          }
        } )
      }

      // 绑定运行
      function runTrigger () {

        TRIGGER.on( "click", function () {
          runDefault ()
        } )
      }

    }

  },



  // 空白页占位提示图文
  /*
   * -------------------------------------------------------------------
   * | 参数                         | 类型    |必须 |   注解                      |  作用                |   例子                                  |
   * |wrap        | obj | 是  |  jq选择器               |图文容器外包装  |$(".box")        |
   * |confi       | obj | 否  |包含已下属性的对象   |   入参渲染     |{src:"img.png",  |
   * |            |     |   |             |          | str:"无数据" ,    |
   * |            |     |   |             |          | href:"xx.html", |
   * |            |     |   |             |          | btnStr:"去添加"}  |
   * |confi.src   | str | 否  |   图片地址              |   显示图像     |                 |
   * |confi.str   | str | 否  |   提示文本              |  提示无数据    |                 |
   * |confi.href  | str | 否  |  按钮跳转链接         |跳转到对应页面  |                 |
   * |confi.btnStr| str | 否  |   按钮文本              | 建议立即添加   |                 |
   * -------------------------------------------------------------------
   * 注*: confi.href 与 confi.btnStr 两个都存在才会添加按钮
   *
  */
  emptyDataImg : function (wrap,confi) {

    var defaultSrc = "../../img/public-img/empty/cart@3x.png"; // 默认图片
    var defaultStr = "暂无数据"; // 默认文本
    var oSrc = "";
    var oStr = "";
    var oBtn = "";
    var oBtnHref = "";
    var oBtnStr = "";


    if (!confi) { // 有无参数
      oSrc = defaultSrc; // 无参数使用默认
      oStr = defaultStr; // 无参数使用默认
    }else {
      oSrc = confi.src || defaultSrc; // 有参数优先使用参数
      oStr = confi.str || defaultStr; // 有参数优先使用参数
      if (confi.href && confi.btnStr) { // 链接与文本都有才渲染按钮
        oBtnHref = confi.href ; // 赋值
        oBtnStr = confi.btnStr; // 赋值
        // 按钮模板
      	// oBtn = `
          // <div class="btn-bar">
            // <a class="btn" href="${oBtnHref}">${oBtnStr}</a>
          // </div>
        // `;
        oBtn =  '<div class="btn-bar">'+
                  '<a class="btn" href='+oBtnHref+'>'+oBtnStr+'</a>'+
                '</div>';

      }else {
        oBtn = "";
      }
    }

    // 图文模板
    // var emptyTpl = `
      // <div class="is-empty-wrap">
        // <div class="is-empty-con">
          // <div class="img-box">
            // <img src="${oSrc}"/>
          // </div>
          // <div class="text">
            // <p>${oStr}</p>
          // </div>
          // ${oBtn}
        // </div>
      // </div>
    // `;
    var emptyTpl =
      '<div class="is-empty-wrap">'+
        '<div class="is-empty-con">'+
          '<div class="img-box">'+
            '<img class="empty-img" src='+oSrc+'/>'+
          '</div>'+
          '<div class="text">'+
            '<p>'+oStr+'</p>'+
          '</div>'+
          ''+oBtn+''+
        '</div>'+
      '</div>';

    // 为空渲染
    for (var i = 0; i < wrap.length; i++) {
    	if (wrap.eq(i).children().length > 0) {
        return;
      }else {

        wrap.eq(i).html(emptyTpl);
        $(".img-box .empty-img").attr("src",oSrc)
      }
    }


  }






}
