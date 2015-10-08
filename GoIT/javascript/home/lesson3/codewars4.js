/**
 * Created by Solovyov on 07.10.2015.
 * return flower1 % 2 !== flower2 % 2; - clever solution from the Codewars
 */
function loveFunc(flower1, flower2){

    return ((flower1 % 2 == 0 || flower2 % 2 == 0) && (flower1 % 2 !== 0 || flower2 % 2 !== 0));

}

loveFunc(1, 4);