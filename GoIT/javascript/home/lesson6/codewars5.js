/**
 * Created by Solovyov on 16.10.2015.
 */
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));

function isValidWalk(walk) {

    for (var i = 0; i < walk.length; i++) {
        if (walk[i] === walk[i+1]) {
            return false;
        }
    }

    return walk.length === 10;

}