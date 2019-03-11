// 路由组件
import Index from '../pages/Index/Index'
import Cate from '../pages/Cate/Cate'
import Cart from '../pages/Cart/Cart'
import Topic from '../pages/Topic/Topic'
import CateList from '../pages/Cate/CateList'
import Tab from '../pages/Topic/Tab'
import Login from '../pages/Login/Login'
import PhoneLogin from '../pages/Login/PhoneLogin'
import EmailLogin from '../pages/Login/EmailLogin'
import Register from '../pages/Login/Register'
import Search from '../pages/Search/Search'

export default [
  {
    path: '/',
    component: Index,
  },

  {
    path: '/cate',
    component: Cate,
    redirect: '/cate/cateList',
    children: [
      {
        name: 'cateList',
        path: '/cate/cateList',
        component: CateList,
      }
    ]
  },

  {
    path: '/topic',
    component: Topic,
    redirect: '/topic/tab/0',
    children: [
      {
        name: 'tab',
        path: '/topic/tab/:id',
        component: Tab,
      }
    ]
  },

  {
    path: '/cart',
    component: Cart
  },

  {
    path: '/login',
    component: Login,
    meta: {
      isShow: false
    },
    children: [
      // 二级路由
      {
        name: 'loginByPhone',
        path: '/login/phone',
        component: PhoneLogin,
      },
      {
        name: 'loginByEmail',
        path: '/login/email',
        component: EmailLogin,
      },
      {
        name: 'RegisterByPhone',
        path: '/login/register',
        component: Register,
      }
    ]
  },

  {
    path: '/search',
    component: Search,
  }
]
