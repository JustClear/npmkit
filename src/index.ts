import Component from './components/Component.vue'

export default {
    install(Vue: VueConstructor) {
        Vue.component('component-name', Component)
    },
};

export { Component }