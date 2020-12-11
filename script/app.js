(function () {
    let del = document.getElementsByClassName('delete');
    let title = document.getElementsByClassName('title4js');

    for (let i = 0; i < del.length; i++) {
        del[i].addEventListener('click', function (e) {
            let response = confirm('⚠\n\n' + 'La news "' + title[i].value + '" va être supprimer.' +
                '\n\nVoulez-vous vraiment la supprimer (cette action est irreversible) ?');
            if (!response) {
                e.preventDefault();
            }
        })
    }
})()