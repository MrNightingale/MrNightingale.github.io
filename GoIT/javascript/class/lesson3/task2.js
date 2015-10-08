/**
 * Created by Solovyov on 06.10.2015.
 */
var a = +prompt('Pls enter A?', '');

switch (a) {
    case 0:
        alert( 0 );
        break;
    case 1:
        alert( 1 );
        break;
    case 2:
    case 3:
        alert( '2, 3' );
        break;
}