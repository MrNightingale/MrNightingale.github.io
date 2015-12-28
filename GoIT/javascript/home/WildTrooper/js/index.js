var page = document.body;
var game = page.querySelector('.game');

// Fire Element
var fire = document.createElement('div');

// trooper Element
var trooper = document.createElement('div');
trooper.className = 'trooper';

// Audio element
var audio = page.querySelector('.js-audio');

// PC shoot time
var pcTime = 0.8;

var spanPCTime = document.createElement('span');

var headerPc = page.querySelector('.header__pc');
headerPc.appendChild(spanPCTime);

// User shoot time
var spanUserTime = document.createElement('span');

var headerUser = page.querySelector('.header__user');

// trooper Start BGPosition and step
var trPos = 0;
var trPosStep = 297;

animateTrooper();

function animateTrooper() {

    // Show trooper
    setTimeout(function() {

        audio.src = 'media/intro.mp3';

        spanPCTime.innerHTML = pcTime.toFixed(3) + ' sec';

        game.appendChild(trooper);

        trooper.style.backgroundImage = 'url(images/trooper' + randomTrooper() + '.png)';
        trooper.style.right = '-75px';
        trooper.style.width = '260px';
        trPos = 0;
        trooper.style.backgroundPosition = trPos + 'px';

    }, 1000);

    //  First Step
    setTimeout(function() {
        trooper.style.right = '50px';
        trPos -= trPosStep;
        trooper.style.backgroundPosition = trPos + 'px';
    }, 2000);

    //  Second Step
    setTimeout(function() {
        trooper.style.right = '150px';
        trPos -= trPosStep;
        trooper.style.backgroundPosition = trPos + 'px';
    }, 3000);

    //  Center
    setTimeout(function() {
        trooper.style.right = '200px';
        trPos -= trPosStep;
        trooper.style.backgroundPosition = trPos + 'px';
    }, 4000);

}

// Starting point
var startTime;

showFire();

function showFire() {

    setTimeout(function() {

        audio.src = 'media/fire.m4a';

        fire.className = 'fire';
        fire.innerHTML = 'FIRE !!!';

        game.appendChild(fire);

        trooper.style.right = '250px';
        trooper.style.width = '170px';
        trPos -= trPosStep;
        trooper.style.backgroundPosition = trPos + 'px';

        trooper.addEventListener('click', shoot);

        startTime = new Date();

    }, 5000);

}

function shoot() {

    setTimeout(function() {
        audio.src = 'media/shot.mp3';
    }, 4);

    fire.parentNode.removeChild(fire);

    var endTime = new Date();

    var userTime = (endTime - startTime) / 1000;

    if (userTime < pcTime) {

        setTimeout(function() {
            audio.src = 'media/win.mp3';
        }, 600);

        trooper.style.right = '170px';
        trooper.style.width = '275px';
        trPos -= trPosStep;
        trooper.style.backgroundPosition = trPos + 'px';

        page.appendChild(overlayWin);

        resInfo.innerHTML = 'winner!';
        game.appendChild(resInfo);

        rewardValue += 100;

        reward.innerHTML = rewardValue;

        // New round
        setTimeout(function() {

            pcTime -= 0.1;

            spanPCTime.innerHTML = '';

            overlayWin.parentNode.removeChild(overlayWin);

            resInfo.parentNode.removeChild(resInfo);

            trooper.parentNode.removeChild(trooper);

            animateTrooper();

            showFire();

       }, 1500);

    } else {

        setTimeout(function() {
            audio.src = 'media/death.mp3';
        }, 600);

        trPos -= trPosStep*2;
        trooper.style.backgroundPosition = trPos + 'px';

        page.appendChild(overlayLoose);

        resInfo.style.height = '85px';
        resInfo.style.paddingTop = '10px';
        resInfo.style.width = '300px';
        resInfo.innerHTML = 'You lose! ' +
            'Your reward: ' + rewardValue + ' $';

        game.appendChild(resInfo);

        game.appendChild(btnPlay);

    }

    spanUserTime.innerHTML = userTime.toFixed(3) + ' sec';

    headerUser.appendChild(spanUserTime);

}

function randomTrooper() {

    var troopers = [1, 2, 3];

    return Math.ceil(Math.random() * troopers.length);

}

// Win and Lose windows
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

// Reward
var rewardValue = 0;
var reward = page.querySelector('.js-reward');

btnPlay.addEventListener('click', again);

function again() {
    window.location.reload();
}