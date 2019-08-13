function getCookie(name) {
    let cookie = document.cookie
    let array = cookie.split('; ')
    let key_value;

    for (var i = 0; i < array.length; i++) {
        key_value = array[i].split('=')
        if (key_value[0] === name) {
            return key_value[1]
        }
    }
    return null;
}

function setCookie(name, value, path, days) {
    let cookie = `${name}=${value}`

    if (path) {
        cookie += `;path=${path}`
    }

    if (days) {
        let d = new Date()
        d.setDate(d.getDate() + days)
        cookie += `;expires=${d}`
    }

    document.cookie = cookie
}

function removeCookie(name, path) {
    setCookie(name, '', path, -1);
}