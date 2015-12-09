/**
 * Created by Solovyov on 09.12.2015.
 */

var inputField = document.body.querySelector('.task-form__text');

var btn = document.body.querySelector('.btn-primary');

inputField.addEventListener('input', blockBtn);

function blockBtn () {

    if (!inputField.value) {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }

}