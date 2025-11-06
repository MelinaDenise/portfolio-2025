import { createRouter, createWebHistory } from 'vue-router'
import Caratula from '@/components/Caratula.vue'
import SobreMi from '@/components/SobreMi.vue'
import Educacion from '@/components/Educacion.vue'
import Experiencia from '@/components/Experiencia.vue'
import Gracias from '@/components/Gracias.vue'

const routes = [
  { path: '/', name: 'caratula', component: Caratula },
  { path: '/sobre-mi', name: 'sobre-mi', component: SobreMi },
  { path: '/educacion', name: 'educacion', component: Educacion },
  { path: '/experiencia', name: 'experiencia', component: Experiencia },
  { path: '/gracias', name: 'gracias', component: Gracias }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
