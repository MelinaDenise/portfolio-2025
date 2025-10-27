// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Caratula from '@/components/Caratula.vue'
import SobreMi from '@/components/SobreMi.vue'
import Educacion from '@/components/Educacion.vue'
import Experiencia from '@/components/Experiencia.vue'
import MiTrabajo from '@/components/MiTrabajo.vue'
import Gracias from '@/components/Gracias.vue'

const routes = [
  { path: '/', name: 'Caratula', component: Caratula },
  { path: '/sobre-mi', name: 'SobreMi', component: SobreMi },
  { path: '/educacion', name: 'Educacion', component: Educacion },
  { path: '/experiencia', name: 'Experiencia', component: Experiencia },
  { path: '/mi-trabajo', name: 'MiTrabajo', component: MiTrabajo },
  { path: '/gracias', name: 'Gracias', component: Gracias },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // al navegar, scrollea al top
    return { top: 0 }
  }
})

export default router
