import loadable from '@/utils/loadable.js'
// 一级
const Home = loadable(() => import('@/views/Home.js'))
const Xiang = loadable(() => import('@/views/Xiang.js'))
const Login = loadable(() => import('@/views/Login.js'))
const About = loadable(() => import('@/views/About.js'))
const Come = loadable(() => import('@/views/Come.js'))
// 二级
const Huo = loadable(() => import('@/views/pages/Huo.js'))
const Zhuan = loadable(() => import('@/views/pages/Zhuan.js'))
const Bao = loadable(() => import('@/views/pages/Bao.js'))
const router = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    components: Home,
    children: [
      {
        redirect: '/home/huo',
      },
      {
        path: '/home/huo',
        components: Huo,
      },
      {
        path: '/home/zhuan',
        components: Zhuan,
      },
      {
        path: '/home/bao',
        components: Bao,
      },
    ]
  },
  {
    path: '/about',
    components: About
  },
  {
    path: '/come',
    components: Come
  },
  {
    path: '/xiang',
    components: Xiang
  },
  {
    path: '/login',
    components: Login
  },
]
export default router