import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Users from '../views/Users.vue'
import EspaciosGeneral from '../views/espacios/EspaciosGeneral.vue'
import EspaciosEstado from '../views/espacios/EspaciosEstado.vue'
import EspaciosAprobados from '../views/espacios/EspaciosAprobados.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/about',
			component: About
		},
		{
			path: '/users',
			component: Users
		},
		{
			path: '/espacios-general',
			component: EspaciosGeneral
		},
		{
			path: '/espacios-estado',
			component: EspaciosEstado
		},
		{
			path: '/espacios-aprobados',
			component: EspaciosAprobados
		},
		
	],
})

export default router