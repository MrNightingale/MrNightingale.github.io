/**
 * Created by Solovyov on 07.10.2015.
 */
function showSimpleNum(a, b) {
    outer:
        for (var i = a; i < b; i++) {

            for (var j = 2; j < i; j++) {

                if (i % j == 0) {
                    continue outer;
                }

            }

            console.log(i);

        }
}

showSimpleNum(2, 10);