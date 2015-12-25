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

var headerPc = page.querySelector('.header__pc');
headerPc.appendChild(spanPCTime);

// User shoot time
var spanUserTime = document.createElement('span');

var headerUser = page.querySelector('.header__user');

// Gunman Start BGPosition and step
var gmPos = 0;
var gmPosStep = 300;

animateGunman();

function animateGunman() {

    // Show GunMan
    setTimeout(function() {
        audio.src = 'media/intro.m4a';
        spanPCTime.innerHTML = pcTime.toFixed(3) + ' sec';
        game.appendChild(gunMan);
        gunMan.style.backgroundImage = 'url(images/gunman' + randomGunman() + '.png)';
        gunMan.style.right = '0';
        gunMan.style.width = '160px';
        gmPos = 0;
        gunMan.style.backgroundPosition = gmPos + 'px';
    }, 1000);

    //  First Step
    setTimeout(function() {
        gunMan.style.right = '125px';
        gmPos -= gmPosStep;
        gunMan.style.backgroundPosition = gmPos + 'px';
    }, 2000);

    //  Second Step
    setTimeout(function() {
        gunMan.style.right = '250px';
        gmPos -= gmPosStep;
        gunMan.style.backgroundPosition = gmPos + 'px';
    }, 3000);

    //  Center
    setTimeout(function() {
        gunMan.style.right = '275px';
        gmPos -= gmPosStep;
        gunMan.style.backgroundPosition = gmPos + 'px';
    }, 4000);

}

var startTime;

showFire();

function showFire() {

    // Fire
    setTimeout(function() {

        game.appendChild(fire);

        gmPos -= gmPosStep;
        gunMan.style.backgroundPosition = gmPos + 'px';

        audio.src = 'media/fire.m4a';

        gunMan.addEventListener('click', shoot);

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

    audio.src = 'media/shot.m4a';

    var endTime = new Date();

    var userTime = (endTime - startTime) / 1000;

    if (userTime < pcTime) {

        audio.src = 'media/win.m4a';

        gunMan.style.right = '170px';
        gunMan.style.width = '275px';
        gmPos -= gmPosStep;
        gunMan.style.backgroundPosition = gmPos + 'px';

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

            fire.parentNode.removeChild(fire);

            gunMan.parentNode.removeChild(gunMan);

            animateGunman();

            showFire();

       }, 1500);

    } else {

        audio.src = 'media/death.m4a';

        gmPos -= gmPosStep*2;
        gunMan.style.backgroundPosition = gmPos + 'px';

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

function randomGunman() {

    var gunmans = [1, 2];

    return Math.ceil(Math.random() * gunmans.length);

}

function again() {
    window.location.reload();
}