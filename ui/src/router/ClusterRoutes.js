/* Layout */
import Layout from '@/layout'
import { Noop } from '@/layout/components'

const Routes = [
  {
    path: '',
    name: 'cluster',
    component: () => import('@/views/dashboard/index'),
    meta: { title: '集群', icon: 'cluster', group: 'cluster' }
  },

  {
    path: 'node',
    name: 'node',
    component: () => import('@/views/dashboard/index'),
    meta: { title: '节点', icon: 'node', group: 'cluster' }
  },
    
  {
    path: 'workloads',
    component: Noop,
    name: 'workloads',
    meta: { title: '工作负载', icon: 'workloads', group: 'cluster' },
    children: [
      {
        path: 'detail',
        name: 'detail',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '概览', group: 'cluster' }
      },
      {
        path: 'pods',
        name: 'pods',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '容器组', group: 'cluster' }
      },
      {
        path: 'deployments',
        name: 'deployments',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '无状态', group: 'cluster' }
      },
      {
        path: 'statefulsets',
        name: 'statefulsets',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '有状态', group: 'cluster' }
      },
      {
        path: 'daemonsets',
        name: 'daemonsets',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '守护进程集', group: 'cluster' }
      },
      {
        path: 'job',
        name: 'job',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '任务', group: 'cluster' }
      },
      {
        path: 'cronjob',
        name: 'cronjob',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '定时任务', group: 'cluster' }
      }
    ]
  },
    
  {
    path: 'configuration',
    component: Noop,
    name: 'configuration',
    meta: { title: '应用配置', icon: 'configuration', group: 'cluster' },
    children: [
        {
        path: 'configmaps',
        name: 'configmaps',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '配置项', group: 'cluster' }
        },
        {
        path: 'secrets',
        name: 'secrets',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '保密字典', group: 'cluster' }
        },
        {
        path: 'hpa',
        name: 'hpa',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '水平扩缩容', group: 'cluster' }
        },
    ]
  },
    
  {
    path: 'network',
    component: Noop,
    name: 'network',
    meta: { title: '网络', icon: 'network', group: 'cluster' },
    children: [
      {
        path: 'services',
        name: 'services',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '服务', group: 'cluster' }
      },
      {
        path: 'ingress',
        name: 'ingress',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '路由', group: 'cluster' }
      },
      {
        path: 'networkpolicies',
        name: 'networkpolicies',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '网络策略', group: 'cluster' }
      },
    ]
  },
    
  {
    path: 'storage',
    component: Noop,
    name: 'storage',
    meta: { title: '存储', icon: 'storage', group: 'cluster' },
    children: [
      {
        path: 'pvc',
        name: 'pvc',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '存储声明', group: 'cluster' }
      },
      {
        path: 'pv',
        name: 'pv',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '存储卷', group: 'cluster' }
      },
      {
        path: 'storageclass',
        name: 'storageclass',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '存储类', group: 'cluster' }
      },
    ]
  },

  {
    path: 'namespace',
    name: 'namespace',
    component: () => import('@/views/dashboard/index'),
    meta: { title: '命名空间', icon: 'namespace', group: 'cluster' }
  },
]

const clusterRoutes = [
  {
    path: '/cluster/:name',
    component: Layout,
    hidden: true,
    children: Routes
  }
]

export default clusterRoutes