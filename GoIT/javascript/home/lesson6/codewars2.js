/**
 * Created by Solovyov on 16.10.2015.
 */
var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

questions.forEach(function(item, i, arr) {
    arr[i].usersAnswer = null;
});

console.log(questions);