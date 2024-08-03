// src/cookieUtils.js
export const setCookie = (name, value, options = {}) => {
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
};

export const getCookie = (name) => {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + encodeURIComponent(name) + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
};
