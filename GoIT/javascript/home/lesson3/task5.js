/**
 * Created by 47826 on 08.10.2015.
 */
var symbol = '#';
var emptySymbol = ' ';

drawBoard(4, 4);

function drawBoard(width, height) {

    for (var i = 0; i < height; i++) {

        var line = '';

        for (var j = 0; j < width; j++) {
            line += symbol + emptySymbol;
        }

        console.log(line);
        console.log('');

        line = '';

        for (j = 0; j < width; j++) {
            line += emptySymbol + symbol;
        }

        console.log(line);
        console.log('');

    }

}