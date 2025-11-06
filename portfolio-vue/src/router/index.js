import { createRouter, createWebHistory } from 'vue-router'

import Caratula from '@/components/Caratula.vue'
import SobreMi from '@/components/SobreMi.vue'
import Educacion from '@/components/Educacion.vue'
import Experiencia from '@/components/Experiencia.vue'
import Trabajo from '@/components/Trabajo.vue'
import Cierre from '@/components/Cierre.vue'

const routes = [
  { path: '/', redirect: '/caratula' },
  { path: '/caratula', component: Caratula },
  { path: '/sobre-mi', component: SobreMi },
  { path: '/educacion', component: Educacion },
  { path: '/experiencia', component: Experiencia },
  { path: '/trabajo', component: Trabajo },
  { path: '/cierre', component: Cierre }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
