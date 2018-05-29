import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/instruct/hello-world'
import vInstruct from '@/components/instruct/v-instruct'
import globalApi from '@/components/instruct/global-api'
import lifeCycle from '@/components/instruct/life-cycle'
import vModel from '@/components/instruct/v-model'
import routerEasy from '@/components/routers/router-easy'
import easyOne from '@/components/routers/easy-one'
import easyTwo from '@/components/routers/easy-two'
import routerParam from '@/components/routers/router-param'
import footbalScore from '@/components/vuex/footbal-score'

Vue.use(Router)

export default new Router({
    mode: 'history', //可以是去掉#号
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    }, {
        path: '/v-instruct',
        name: 'vInstruct',
        component: vInstruct
    }, {
        path: '/global-api',
        name: 'globalApi',
        component: globalApi
    }, {
        path: '/life-cycle',
        name: 'lifeCycle',
        component: lifeCycle
    }, {
        path: '/v-model',
        name: 'vModel',
        component: vModel
    }, {
        path: '/router-easy',
        name: 'routerEasy',
        children: [
            { path: '/', name: 'routerEasy', component: routerEasy },
            { path: 'easy-one', name: 'easyOne', component: easyOne },
            { path: 'easy-two', name: 'easyTwo', component: easyTwo }
        ],
        components: {
            default: routerEasy,
            easyView1: easyOne,
            easyView2: easyTwo
        }
    }, {
        path: '/router-param',
        name: 'routerParam',
        component: routerParam
    }, {
        path: '/footbal-score',
        name: 'footbalScore',
        component: footbalScore
    }]
})