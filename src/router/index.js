import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/view/index'
import aexam from '@/view/aexam'
import bexam from '@/view/bexam'
import cexam from '@/view/cexam'
import cexam1 from '@/view/cexam1'
import cexam2 from '@/view/cexam2'
import dexam from '@/view/dexam'
import eexam from '@/view/eexam'
import fexam from '@/view/fexam'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/aexam',
          name: 'aexam',
          component: aexam
        },
        {
          path: '/bexam',
          name: 'bexam',
          component: bexam
        },
        {
          path: '/cexam',
          name: 'cexam',
          component: cexam
        },
        {
          path: '/cexam1',
          name: 'cexam1',
          component: cexam1
        },
        {
          path: '/cexam2',
          name: 'cexam2',
          component: cexam2
        },
        {
          path: '/dexam',
          name: 'dexam',
          component: dexam
        },
        {
          path: '/eexam',
          name: 'eexam',
          component: eexam
        },
        {
          path: '/fexam',
          name: 'fexam',
          component: fexam
        }
      ]
    }
  ]
})
