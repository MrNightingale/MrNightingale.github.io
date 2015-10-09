/**
 * Created by 47826 on 09.10.2015.
 */
function addEllipsis(str) {

    if (str.length > 20) {
        return str.slice(0, 20) + '...';
    } else {
        return str;
    }

}

addEllipsis('get new Sex video-tapes');