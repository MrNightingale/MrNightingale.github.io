/**
 * Created by Solovyov on 07.10.2015.
 */
var value = 0;

while (value < 100) {
    value = +prompt( 'Enter number greater than 100', '');
    if (value == 0) break;
}