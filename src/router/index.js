import Vue from 'vue'
import Router from 'vue-router'
import base from '@/components/base'
import test from '@/components/test'
import main from '@/components/main'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'base',
        component: base,
        redirect: 'main',
        children: [{
            path: 'main',
            name: 'main',
            component: main
        }, {
            path: 'test',
            name: 'test',
            component: test
        }]
    }]
})