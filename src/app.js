import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})

// register service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then((reg) => {
            // registration succeed
            console.log('Registaration succeeded. Scope is ' + reg.scope)
        }).catch((error) => {
            // registration failed
            console.log('Registration failed with ' + error);
        });
}