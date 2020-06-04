import axios from 'axios';
const http = axios.create({
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
});
// 请求拦截
http.interceptors.request.use(config => {
    const method = config.method.toLowerCase()
    // 加入请求时间戳
    if (method === 'post' || method === 'put') {} else if (method === 'get') {
        if (!config.params) config.params = {}
        config.params.requestTime = Date.now()
    }
    return config;
}, error => {
    return Promise.reject(error)
})

// 返回拦截
http.interceptors.response.use(response => {

    return Promise.resolve(response.data);
}, error => {
    if (error.message.includes('timeout')) { // 判断请求异常信息中是否含有超时timeout字符串
        console.log("错误回调", error);
        return Promise.reject(error); // reject这个错误信息
    }
    return Promise.reject(error);
})

export default http