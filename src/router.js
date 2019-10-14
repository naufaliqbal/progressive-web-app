import Vue from 'vue';
import Router from 'vue-router';

// Page Content
import Page1 from '@/components/Page1';
import Home from '@/components/Home';

// Page Not Found
import PageNotFound from '@/components/404';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/page-1',
        name: 'Page 1',
        component: Page1
    }, {
        path: '**',
        name: 'PageNotFound',
        component: PageNotFound
    }]
})