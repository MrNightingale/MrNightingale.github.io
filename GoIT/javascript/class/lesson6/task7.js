/**
 * Created by Solovyov on 17.10.2015.
 */
var birthday = new Date (1989, 4, 27);

console.log(getWeekDate(birthday));

function getWeekDate(date) {

    var day = date.getDay();

    switch (day) {

        case 0:
            return 'пн';
            break;

        case 1:
            return 'вт';
        break;

        case 2:
            return 'ср';
        break;

        case 3:
            return 'чт';
        break;

        case 4:
            return 'пт';
        break;

        case 5:
            return 'сб';
        break;

        case 6:
            return 'вс';
        break;

    }

}