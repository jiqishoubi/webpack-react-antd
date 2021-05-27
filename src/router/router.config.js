import React from 'react'
import { Redirect } from 'react-router-dom'
// layouts
import SecurityLayout from '@/layouts/SecurityLayout'
import UserLayout from '@/layouts/UserLayout'
import BasicLayout from '@/layouts/BasicLayout'
// pages
import Page404 from '@/pages/common/404'
import Login from '@/pages/login'
import Home from '@/pages/home'

const routes = [
  {
    component: SecurityLayout,
    routes: [
      // {
      //   path: "/",
      //   exact: true,
      //   render: () => <Redirect to='/home' />
      // },
      // 登录
      {
        path: '/user',
        component: UserLayout,
        routes: [
          {
            path: '/user',
            exact: true,
            render: () => <Redirect to='/user/login' />
          },
          {
            path: "/user/login",
            component: Login
          },
          { component: Page404 }
        ]
      },
      // 业务页面
      {
        path: '/',
        component: BasicLayout,
        routes: [
          {
            path: "/home",
            component: Home
          },
          { component: Page404 }
        ]
      },
      { component: Page404 }
    ]
  },
]

export default routes