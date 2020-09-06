import http from './axios-config'
let url, jurl
if (process.env.NODE_ENV == 'production') {
    url = 'http://47.101.138.5:9527/oc'
    jurl = 'http://47.101.138.5:9527/oc'
} else {
    url = '/api/oc'
    jurl = '/japi/oc'
}

const request = function (type, url, data = {}, headers = {
    "Content-Type": "application/json"
}) {
    return http[type](url, data, headers).then(data => {
        return Promise.resolve(data)
    }).catch(err => {
        return Promise.reject(err)
    })
}

const api = {
    getAllLog() {
        return request('get', `${jurl}/log/get`)
    },
    login(data) {
        return request('post', `${url}/user/login`,data)
    },
    getUserInfo(){
        return request('get', `${url}/user/getUserInfo`)
    }
}
export default function install(Vue) {
    Vue.mixin({
        created() {
            this.$_api = api
        }
    })
}