import {
    Tabbar,
    TabbarItem,
    Toast
} from 'vant'

const components = {
    VanTabbar: Tabbar,
    VanTabbarItem: TabbarItem
}

function installComponent(Vue) {
    Object.keys(components).forEach(key => {
        Vue.component(components[key].name, components[key])
    })
    Vue.prototype.Toast = Toast
}
export {
    installComponent
}