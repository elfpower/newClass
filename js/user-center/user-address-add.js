$( function () {
  console.log( "is user-address-add" );

  $( "#city-picker" ).cityPicker( {
    title: "选择省市区/县",
    onChange: function ( picker, values, displayValues ) {
      console.log( picker, values, displayValues );
      console.log( picker );
      console.log( values );
      console.log( displayValues );
    }
  } );

} )