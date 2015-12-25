$(function() {

    function Gunman() {

        this.game = $('.game');

        this.fire = $('div', {
            html: 'FIRE !!!',
            'class': 'fire'
        });

//        this.domElems = {
//            gunman: $('.gunman'),
//            pcTime: +$('.header__pc-time').text(),
//            audio: $('.js-audio'),
//            startTime: 0
//        };

        this.gunman = $('.gunman');

        this.pcTime = +$('.header__pc-time').text();

        this.audio = $('.js-audio');

        this.startTime = 0;

        this.init();

    }

    Gunman.prototype.showGunman = function() {

        var _self = this;

//        this.game.append('<div class="gunman"></div>');

        setTimeout(function() {
            _self.game.append('<div class="gunman"></div>');
        }, 1000);

    };

    Gunman.prototype.animateGunman = function() {

        var _self = this;

        var gunman = $('.gunman');

        var framesPos = ['125px', '250px', '275px', '170px'];

        var framesGunman = ['-125px', '-250px', '-387px', '-523px', '-650px', '-895px'];

//  First Step
        setTimeout(function() {
            gunman.css({right: framesPos[0],
            backgroundPosition: framesGunman[0]});
        }, 1000);

//  Second Step
        setTimeout(function() {
            gunman.css({right: framesPos[1],
                        backgroundPosition: framesGunman[1]});
        }, 2000);

//  Center
        setTimeout(function() {
            gunman.css({right: framesPos[2],
                        backgroundPosition: framesGunman[2]});
        }, 3000);

        // Fire
        setTimeout(function() {

            _self.game.append('<div class="fire">FIRE !!!</div>');

            gunman.css('backgroundPosition', framesGunman[3]);

            _self.audio.attr('src', 'media/fire.m4a');

            gunman.on('click', _self.shoot);

            startTime();

            function startTime() {
                var start = new Date();
                console.log(start);
                return start;
            }

            _self.startTime = startTime();

        }, 5000);

    };

    Gunman.prototype.shoot = function () {

        console.log(this.startTime);

        var game = $('.game');

        var gunman = $('.gunman');

        var audio = $('.js-audio');

        var pcTime = +$('.header__pc-time').text();

        audio.attr('src', 'media/shot.m4a');

        var endTime = new Date();

        console.log(endTime);

        var userTime = (endTime - endTime-0.1) / 1000;

        if (userTime < pcTime) {

            audio.attr('src', 'media/win.m4a');

            gunman.css({right: '170px',
                        width: '235px',
                        backgroundPosition: '-650px'});
            console.log(this.game);

            game.append('<div class="result-info">winner!</div><div class="overlay-win"></div>')

        } else {

            audio.attr('src', 'media/death.m4a');

            gunman.css('backgroundPosition', '-895px');

            game.append('<div class="result-info">loser!</div><div class="overlay-lose"></div>')

        }

        game.append('<button class="btn-play">Play again <i class="fa fa-repeat"></i></button> ');

    };

    Gunman.prototype.init = function () {

        var _self = this;

        this.showGunman();

        setTimeout(function() {
           _self.animateGunman();
        }, 1000);

    };

    window.todo = new Gunman();

});