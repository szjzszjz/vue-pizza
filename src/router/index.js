import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Admin from '@/components/Admin'
import Register from '@/components/Register'
import Menu from '@/components/Menu'
import Login from '@/components/Login'
import About from '@/components/about/About'

// 二级路由
import History from '@/components/about/History'
import Contact from '@/components/about/Contact'
import Delivery from '@/components/about/Delivery'
import OrderingGuide from '@/components/about/OrderingGuide'

// 三级路由
import Phone from '@/components/about/contact/Phone'
import PersonName from '@/components/about/contact/PersonName'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: Home,
        'orderingGuide': OrderingGuide,
        'history': History,
        'delivery': Delivery,
        'contact': Contact
      }

    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
      // 路由独享守卫
      // beforeEnter: (to, from, next) => {
      //   alert('请先登录，才可看菜单')
      //   next('/login')
      // }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      redirect: '/contact', // 默认展示
      children: [
        {
          path: '/history',
          name: 'History',
          component: History
        }, {
          path: '/contact',
          name: 'Contact',
          component: Contact,
          redirect: '/personName',
          children: [
            {
              path: '/phone',
              name: 'Phone',
              component: Phone
            }, {
              path: '/personName',
              name: 'PersonName',
              component: PersonName
            }
          ]
        }, {
          path: '/delivery',
          name: 'Delivery',
          component: Delivery
        }, {
          path: '/orderingGuide',
          name: 'OrderingGuide',
          component: OrderingGuide
        }
      ]
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    // 如果没有匹配的就跳转至主页
    {
      path: '*',
      redirect: '/'
    }
  ],
  mode: 'history'
})
