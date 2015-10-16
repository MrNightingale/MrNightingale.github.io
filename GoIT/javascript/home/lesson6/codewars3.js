/**
 * Created by Solovyov on 15.10.2015.
 *
 */
console.log(getVillainName(new Date(1989, 11, 31)));

function getVillainName(birthday){

    var firstName = {
        0: "The Evil",
        1: "The Vile",
        2: "The Cruel",
        3: "The Trashy",
        4: "The Despicable",
        5: "The Embarrassing",
        6: "The Disreputable",
        7: "The Atrocious",
        8: "The Twirling",
        9: "The Orange",
        10: "The Terrifying",
        11: "The Awkward"
    };

    var lastName = {
        0: "Mustache",
        1: "Pickle",
        2: "Hood Ornament",
        3: "Raisin",
        4: "Recycling Bin",
        5: "Potato",
        6: "Tomato",
        7: "House Cat",
        8: "Teaspoon",
        9: "Laundry Basket"
    };

    var month = birthday.getMonth();

    var date = birthday.getDate();

    var dateLastDigit;

    if (date < 10) {
        dateLastDigit = date;
    } else if (date >= 10 && date < 20) {
        dateLastDigit = date - 10;
    } else if (date >= 20 && date < 30) {
        dateLastDigit = date - 20;
    } else {
        dateLastDigit = date - 30;
    }

    var fullName = '';

    for (var key in firstName) {
        if (key == month) {
            fullName += firstName[key];
            break;
        }
    }

    for (key in lastName) {
        if (key == dateLastDigit) {
            fullName += ' ' + lastName[key];
            break;
        }
    }

    return fullName;
}
