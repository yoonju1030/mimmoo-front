export const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: 'home',
        component: () => import('@/pages/home.vue'),
      },
      {
        path: 'introduce',
        component: () => import('@/pages/introduce.vue'),
      },
      {
        path: 'history',
        component: () => import('@/pages/history.vue'),
      },
      {
        path: 'product',
        component: () => import('@/pages/product.vue'),
      },
      {
        path: 'feature',
        component: () => import('@/pages/feature.vue'),
      },
      {
        path: 'product/:id',
        component: () => import('@/pages/productDetail.vue')
      },
      {
        path: 'price',
        component: () => import('@/pages/price.vue'),
      },
      {
        path: 'information',
        component: () => import('@/pages/info/information.vue'),
      },
      {
        path: 'information/:id',
        component: () => import('@/pages/info/informationDetail.vue'),
      },
      {
        path: 'ask',
        component: () => import('@/pages/info/ask.vue'),
      },
      {
        path: 'as',
        component: () => import('@/pages/info/as.vue'),
      },
      {
        path: 'exp',
        component: () => import('@/pages/info/experience.vue'),
      },
      {
        path: 'dashboard',
        component: () => import('@/pages/dashboard.vue'),
      },
      {
        path: 'account-settings',
        component: () => import('@/pages/account-settings.vue'),
      },
      {
        path: 'typography',
        component: () => import('@/pages/typography.vue'),
      },
      {
        path: 'icons',
        component: () => import('@/pages/icons.vue'),
      },
      {
        path: 'cards',
        component: () => import('@/pages/cards.vue'),
      },
      {
        path: 'tables',
        component: () => import('@/pages/tables.vue'),
      },
      {
        path: 'form-layouts',
        component: () => import('@/pages/form-layouts.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/blank.vue'),
    children: [
      {
        path: 'login',
        component: () => import('@/pages/login.vue'),
      },
      {
        path: 'register',
        component: () => import('@/pages/register.vue'),
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/pages/[...error].vue'),
      },
    ],
  },
]
