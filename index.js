//
// msg = " ";
// msg = "Yessica Deira" + msg;position = 0;
// function scrolltitle() {
// document.title = msg.substring(position, msg.length) + msg.substring(0, position); position++;
// if (position > msg.length) position = 0
// window.setTimeout("scrolltitle()",170);
// }
// scrolltitle();


$(document).ready(function(){

  var isTxtView = false;

  $( "#txtview" ).click(function() {

    if (isTxtView) {
      $(".item span.image").show( ); //css("opacity", "1.0");
      $("#txtview").text("hide images");

      isTxtView = false;
    } else {
      $(".item span.image").hide( ); //css("opacity", "0.0");
      $("#txtview").text("show images");

      isTxtView = true;
    }
  });

  $(document).ready(function(){
      $("image landscape").click(function(){
      $("image portrait").click(function(){
          $("content").toggle();
        })
      })
    });

  var images =  $(".item img");
  images.click(function( e ){
    e.stopPropagation( );

    var image = $( this );
    var span = image.parent( );

    images.not( image ).removeClass( 'selected' )
          .css( { 'margin-top': '', 'margin-left': '' } );

    image.toggleClass( 'selected' )
  });

  $( document ).click( function( e ) {
    images.removeClass( 'selected' )
          .css( { 'margin-top': '', 'margin-left': '' } );
  });

  var links = $( '.link' );
  var items = $( '.item' );

  function selectLink( ) {
    var link = $( this );

    link.addClass( 'selected' );
    links.not( link ).removeClass( 'selected' );

    var index = links.index( link );
    var item = items.eq( index );

    item.show( );
    items.not( item ).hide( );
  }
  links.click( selectLink );


  // links.first( ).addClass( 'selected' );
  // items.first( ).show( );
});
