import Vue from 'vue';
import VueRouter from 'vue-router';



Vue.use(VueRouter)

const routes=[
    {
    path: '/',
    name: 'Main',
    component: ()=>import('../views/Main.vue'),
    redirect:'/home',
    children:[
        {
            path:'/home',
            name:'home',
            component:()=>import('../views/home')
        },
        {
            path:'/user',
            name:'user',
            component:()=>import('../views/User')
        },
        {
            path:'/exam',
            name:'exam',
            component:()=>import('../views/exam')
        },
        {
            path:'/page1',
            name:'page1',
            component:()=>import('../views/other/pageOne')
        },
        {
            path:'/page2',
            name:'page2',
            component:()=>import('../views/other/pageTwo')
        }
    ]
    }
   
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router