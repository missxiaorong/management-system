

export function setCookie(name, value, days) {
    var d = new Date;
    d.setTime(d.getTime() + days);
    window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
};
export function getCookie(name) {
    var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
};
export function deleteCookie(name) {
    this.setCookie(name, '', -1);
};
