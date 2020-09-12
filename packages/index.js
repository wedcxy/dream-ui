import button from './button.vue'
import card from './card.vue'
import icon from './icon.vue'
import link from './link.vue'
import './icon/iconfont'

const components = [
    button,
    card,
    icon,
    link
]

const install = function (Vue){
    //注册全局
    components.forEach(item=>{
        Vue.component(item.name ,item)
    })
}

if(typeof window !== 'undefined' && window.Vue){
    install(window.Vue)
}

export default{
    install
}