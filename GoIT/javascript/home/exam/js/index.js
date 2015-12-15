var page = document.body;
var game = page.querySelector('.game');

// Fire Element
var fire = document.createElement('div');
fire.className = 'fire';
fire.innerHTML = 'FIRE !!!';

// Gunman Element
var gunMan = document.createElement('div');
gunMan.className = 'gunman';

// Audio element
var audio = page.querySelector('.js-audio');

// PC shoot time
var pcTime = 0.8;

var spanPCTime = document.createElement('span');
spanPCTime.innerHTML = pcTime.toFixed(3) + ' sec';

var headerPc = page.querySelector('.header__pc');
headerPc.appendChild(spanPCTime);

// User shoot time
var spanUserTime = document.createElement('span');

var headerUser = page.querySelector('.header__user');

// Show GunMan
setTimeout(function() {
    game.appendChild(gunMan);
}, 1000);

//  First Step
setTimeout(function() {
    gunMan.style.right = '125px';
    gunMan.style.backgroundPosition = '-125px';
}, 2000);

//  Second Step
setTimeout(function() {
    gunMan.style.right = '250px';
    gunMan.style.backgroundPosition = '-250px';
}, 3000);

//  Center
setTimeout(function() {
    gunMan.style.right = '275px';
    gunMan.style.backgroundPosition = '-387px';
}, 4000);

var startTime;

// Fire
setTimeout(function() {

    game.appendChild(fire);

    gunMan.style.backgroundPosition = '-523px';

    audio.src = 'media/fire.m4a';

    gunMan.addEventListener('click', shoot);

    startTime = new Date();

}, 5000);



// Win and Loose windows
var overlayWin = document.createElement('div');
overlayWin.className = 'overlay-win';

var overlayLoose = document.createElement('div');
overlayLoose.className = 'overlay-lose';

//Result info
var resInfo = document.createElement('div');
resInfo.className = 'result-info';

// Play again button
var btnPlay = document.createElement('button');
btnPlay.className = 'btn-play';
btnPlay.innerHTML = 'Play again <i class="fa fa-repeat"></i>';

btnPlay.addEventListener('click', again);

function shoot() {

    audio.src = 'media/shot.m4a';

    var endTime = new Date();

    var userTime = (endTime - startTime) / 1000;

    if (userTime < pcTime) {

        audio.src = 'media/win.m4a';

        gunMan.style.right = '170px';
        gunMan.style.width = '235px';
        gunMan.style.backgroundPosition = '-650px';

        page.appendChild(overlayWin);

        resInfo.innerHTML = 'winner!';
        page.appendChild(resInfo);

        page.appendChild(btnPlay);

    } else {

        audio.src = 'media/death.m4a';

        gunMan.style.backgroundPosition = '-895px';

        page.appendChild(overlayLoose);

        resInfo.innerHTML = 'loser!';
        page.appendChild(resInfo);

        page.appendChild(resInfo);

        page.appendChild(btnPlay);

    }

    spanUserTime.innerHTML = userTime.toFixed(3) + ' sec';

    headerUser.appendChild(spanUserTime);

}

function again() {
    window.location.reload();
}