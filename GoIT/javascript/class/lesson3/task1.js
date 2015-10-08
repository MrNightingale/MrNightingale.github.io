/**
 * Created by Solovyov on 06.10.2015.
 */
var browser = prompt( 'Enter your browser', '');

if (browser === 'IE') {
    alert( 'О, да у вас IE!' );
} else if (browser === 'Chrome' ||
           browser === 'Firefox' ||
           browser === 'Safari' ||
           browser === 'Opera') {
    alert( 'Браузер норм!' );
} else {
    alert('Кто здесь ?');
}
