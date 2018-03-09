$( function () {

  console.log( "is my-course" );

  myJS.emptyDataImg($(".lesson-list"),{
    src:"../../img/public-img/empty/curriculum@3x.png",
    str:"当前还未报名任何课程"
  })

  for ( var i = 0; i < $( ".circle" ).size(); i++ ) {
    var num = $( ".circle" ).eq( i ).find( '.pcnum' ).text() * 3.6;
    console.log( num )
    if ( num <= 180 ) {
      $( ".circle" ).eq( i ).find( '.circle-right' ).css( "transform", "rotate(" + num + "deg)" );
      $( ".circle" ).eq( i ).find( '.circle-left' ).css( "transform", "rotate(0deg)" );
    } else {
      $( ".circle" ).eq( i ).find( '.circle-right' ).css( "transform", "rotate(180deg)" );
      $( ".circle" ).eq( i ).find( '.circle-left' ).css( "transform", "rotate(" + ( num - 180 ) + "deg)" );
    };
  }

} )