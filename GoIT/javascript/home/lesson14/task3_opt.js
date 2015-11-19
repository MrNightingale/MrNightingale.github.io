/**
 * Created by Solovyov on 19.11.2015.
 * Есть класс Menu. У него может быть два состояния: открыто STATE_OPEN и закрыто STATE_CLOSED.

 Создайте наследника AnimatingMenu, который добавляет третье состояние STATE_ANIMATING.

 При вызове open() состояние меняется на STATE_ANIMATING, а через 1 секунду, по таймеру, открытие завершается вызовом open() родителя.
 Вызов close() при необходимости отменяет таймер анимации (назначаемый в open) и передаёт вызов родительскому close.
 Метод showState для нового состояния выводит "анимация", для остальных — полагается на родителя.
 */
function Menu(state) {
    this._state = state || this.STATE_CLOSED;
}

Menu.prototype.STATE_OPEN = 1;

Menu.prototype.STATE_CLOSED = 0;

Menu.prototype.open = function() {
    this._state = this.STATE_OPEN;
};

Menu.prototype.close = function() {
    this._state = this.STATE_CLOSED;
};

Menu.prototype._stateAsString = function() {
    
    switch (this._state) {
        
        case this.STATE_OPEN:
            return 'opened';
        
        case  this.STATE_CLOSED:
            return 'closed';
        
    }
    
};

Menu.prototype.showState = function () {
    console.log(this._stateAsString());
};

function AnimatingMenu(state) {
    Menu.call(this, state); // Menu.apply(this, arguments);
}

AnimatingMenu.prototype = Object.create(Menu.prototype);

AnimatingMenu.prototype.constructor = AnimatingMenu;

AnimatingMenu.prototype.STATE_ANIMATING = 2;

AnimatingMenu.prototype.open = function() {

    this._state = this.STATE_ANIMATING;

    var self = this;

    this._timer = setTimeout(function() {
        Menu.prototype.open.call(self);
    }, 1000);

};

AnimatingMenu.prototype.close = function() {
    clearTimeout(this._timer);
    Menu.prototype.close.apply(this);
};

AnimatingMenu.prototype._stateAsString = function() {

    switch (this._state) {
        case this.STATE_ANIMATING:
            return 'animation';
        default:
            return Menu.prototype._stateAsString.call(this);
    }

};

var menu = new AnimatingMenu();

menu.showState(); // закрыто

menu.open();
menu.showState(); // анимация

setTimeout(function() {
    menu.showState(); // открыто

    menu.close();
    menu.showState(); // закрыто (закрытие без анимации)
}, 1000);