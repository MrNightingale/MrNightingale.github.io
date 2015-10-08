/**
 * Created by Solovyov on 08.10.2015.
 */
function showRandomValue(max) {
    var random = Math.random();
    return Math.round(random * max);
}

showRandomValue(5);

function showRandomValue2(min, max) {
    var rand = min + Math.random() * (max - min);
    return Math.round(rand);
}

showRandomValue2(2, 5);