;
(function (window) {
    window.getLocal = function (key) {
        let item = window.localStorage.getItem(key)
        let ttl = window.localStorage.getItem(`${key}-ttl`)
        if (ttl) {
            let TTL = ttl.split('-')[0],
                oldTime = ttl.split('-')[1]
            if (+new Date() - oldTime >= TTL) {
                window.localStorage.removeItem(key)
                window.localStorage.removeItem(`${key}-ttl`)
                return null
            }
        }
        return item
    }
    window.setLocal = function (key, value, ttl) {
        if (ttl) {
            window.localStorage.setItem(`${key}-ttl}`, `${ttl}-${+new Date()}`)
        }
        window.localStorage.setItem(key, value)
    }
})(window)