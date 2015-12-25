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
var trPosStep = 300;

animateTrooper();

function animateTrooper() {

    // Show trooper
    setTimeout(function() {
        audio.src = 'media/intro.mp3';
        spanPCTime.innerHTML = pcTime.toFixed(3) + ' sec';
        game.appendChild(trooper);
        trooper.style.backgroundImage = 'url(images/trooper' + randomTrooper() + '.png)';
        trooper.style.right = '0';
        trooper.style.width = '160px';
        trPos = 0;
        trooper.style.backgroundPosition = trPos + 'px';
    }, 1000);

    //  First Step
    setTimeout(function() {
        trooper.style.right = '125px';
        trPos -= trPosStep;
        trooper.style.backgroundPosition = trPos + 'px';
    }, 2000);

    //  Second Step
    setTimeout(function() {
        trooper.style.right = '250px';
        trPos -= trPosStep;
        trooper.style.backgroundPosition = trPos + 'px';
    }, 3000);

    //  Center
    setTimeout(function() {
        trooper.style.right = '275px';
        trPos -= trPosStep;
        trooper.style.backgroundPosition = trPos + 'px';
    }, 4000);

}

var startTime;

showFire();

function showFire() {

    // Fire
    setTimeout(function() {

        fire.className = 'fire';
        fire.innerHTML = 'FIRE !!!';

        game.appendChild(fire);

        trPos -= trPosStep;
        trooper.style.backgroundPosition = trPos + 'px';

        audio.src = 'media/fire.m4a';

        trooper.addEventListener('click', shoot);

        startTime = new Date();

    }, 5000);

}

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

// Reward
var rewardValue = 0;
var reward = page.querySelector('.js-reward');

btnPlay.addEventListener('click', again);

function shoot() {

    audio.src = 'media/shot.mp3';

    fire.parentNode.removeChild(fire);

    var endTime = new Date();

    var userTime = (endTime - startTime) / 1000;

    if (userTime < pcTime) {

        audio.src = 'media/win.mp3';

        trooper.style.right = '170px';
        trooper.style.width = '275px';
        trPos -= trPosStep;
        trooper.style.backgroundPosition = trPos + 'px';

        page.appendChild(overlayWin);

        resInfo.style.height = '75px';
        resInfo.style.paddingTop = '35px';
        resInfo.innerHTML = 'winner!';
        page.appendChild(resInfo);

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

        audio.src = 'media/death.mp3';

        trPos -= trPosStep*2;
        trooper.style.backgroundPosition = trPos + 'px';

        page.appendChild(overlayLoose);

        resInfo.style.height = '85px';
        resInfo.style.paddingTop = '10px';
        resInfo.style.width = '300px';
        resInfo.innerHTML = 'You lose! ' +
            'Your reward: ' + rewardValue + ' $';

        page.appendChild(resInfo);

        page.appendChild(resInfo);

        page.appendChild(btnPlay);

    }

    spanUserTime.innerHTML = userTime.toFixed(3) + ' sec';

    headerUser.appendChild(spanUserTime);

}

function randomTrooper() {

    var troopers = [1, 2];

    return Math.ceil(Math.random() * troopers.length);

}

function again() {
    window.location.reload();
}