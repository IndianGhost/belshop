$( '#myTab a' ).click( function ( e ) {
    e.preventDefault();
    $( this ).tab( 'show' );
} );

$( '#moreTabs a' ).click( function ( e ) {
    e.preventDefault();
    $( this ).tab( 'show' );
} );

( function( $ ) {
    // Test for making sure event are maintained
    $( '.js-alert-test' ).click( function () {
        alert( 'Button Clicked: Event was maintained' );
    } );
    fakewaffle.responsiveTabs( [ 'xs', 'sm' ] );
} )( jQuery );