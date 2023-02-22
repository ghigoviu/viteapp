<template>
	<aside :class="`${is_expanded ? 'is-expanded' : ''}`">

		<div class="menu-toggle-wrap">
			<button class="menu-toggle" @click="ToggleMenu">
				<span class="material-icons">keyboard_double_arrow_right</span>
			</button>
		</div>

		<div class="menu">
			<router-link to="/" class="button">
				<span class="material-icons">home</span>
				<span class="text">Inicio</span>
			</router-link>
			
			<!--
			<router-link to="/admin" class="button">
				<span class="material-icons">paid</span>
				<span class="text">Administración</span>
			</router-link>     -->

			
			<MDBDropdown v-model="dropdownEspacios" align="lg-end">
				<MDBDropdownToggle @click="dropdownEspacios = !dropdownEspacios" color="primary-sidebar" size="lg" class="button">
					<font-awesome-icon icon="fa-solid fa-location-dot" fixed-width size="xl"/> 
					<span class="text">Espacios</span>
					<!--
					<font-awesome-icon icon="fa-solid fa-dollar-sign" fixed-width size="2xl"/>
					-->
				</MDBDropdownToggle>
				<MDBDropdownMenu aria-labelledby="dropdownMenuButton">
					<router-link to="/espacios-general" class="button">
						<span class="text">General</span>
					</router-link>  
					<router-link to="/espacios-estado" class="button">
						<span class="text">Estado</span>
					</router-link> 
					<router-link to="/espacios-aprobados" class="button">
						<span class="text">Aprobados</span>
					</router-link>    
				</MDBDropdownMenu>
			</MDBDropdown>

			<MDBDropdown v-model="dropdownDocumentos" align="lg-end">
				<MDBDropdownToggle @click="dropdownDocumentos = !dropdownDocumentos" color="primary-sidebar" size="lg" class="button">
					<font-awesome-icon icon="fas fa-file-lines" fixed-width size="xl"/>
					<span class="text">Documentos</span>
				</MDBDropdownToggle>
				<MDBDropdownMenu aria-labelledby="dropdownMenuButton">
					<router-link to="/" class="button">
						<span class="text">Todos</span>
					</router-link>  
					<router-link to="/about" class="button">
						<span class="text">En proceso</span>
					</router-link>    
				</MDBDropdownMenu>
			</MDBDropdown>

			<MDBDropdown v-model="dropdownUsers" align="lg-end">
				<MDBDropdownToggle @click="dropdownUsers = !dropdownUsers" color="primary-sidebar" size="lg" class="button">
					<font-awesome-icon icon="fa-solid fa-user-group" fixed-width size="xl"/>
					<span class="text">Usuarios</span>
				</MDBDropdownToggle>
				<MDBDropdownMenu aria-labelledby="dropdownMenuButton">
					<router-link to="/about" class="button">
						<span class="text">General</span>
					</router-link>  
					<router-link to="/" class="button">
						<span class="text">Altas</span>
					</router-link>  
					<router-link to="/about" class="button">
						<span class="text">Bajas</span>
					</router-link>
				</MDBDropdownMenu>
			</MDBDropdown>
		</div>	

		<!-- 
		<div class="flex"></div>
		
		<div class="menu">
			<router-link to="/settings" class="button">
				<span class="material-icons">settings</span>
				<span class="text">Configuración</span>
			</router-link>
		</div>
		-->
	</aside>
</template>

<script setup>
import { ref } from 'vue'

import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdb-vue-ui-kit";

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
	localStorage.setItem("is_expanded", is_expanded.value)
}

const dropdownEspacios = ref(false);
const dropdownDocumentos = ref(false);
const dropdownUsers = ref(false);

</script>

<style lang="scss" scoped>
aside {
	--plain-color: #262824;
	--hover-text: var(--plain-color);

	display: flex;
	flex-direction: column;

	background-color: #ffdbbe;
	color: var(--plain-color);

	width: calc(2rem + 40px);
	overflow: hidden;
	min-height: 95vh;
	padding: 1rem;

	transition: 0.2s ease-in-out;

	.flex {
		flex: none ;
	}

	.menu-toggle-wrap {
		display: flex;
		justify-content: right;
		margin-bottom: 1rem;

		position: relative;
		top: 0;
		transition: 0.2s ease-in-out;

		.menu-toggle {
			transition: 0.2s ease-in-out;
			.material-icons {
				font-size: 2rem;
				color: var(--plain-color);
				transition: 0.2s ease-out;
			}
	
			&:hover {
				.material-icons {
					transform: translateX(0.7rem);
				}
			}
		}
	}

	h3, .button .text .btn {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}

	h3 {
		color: var(--grey);
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}

	.menu {
		margin: 0 -1rem;
		.button {
			display: flex;
			align-items: center;
			text-decoration: none;
			transition: 0.2s ease-in-out;
			padding: 0.75rem 1.25rem;
			.material-icons {
				font-size: 2rem;
				color: var(--plain-color);
				transition: 0.2s ease-in-out;
			}
			.text {
				font-size: 1rem;
				color: var(--plain-color);
				transition: 0.2s ease-in-out;
				opacity: 0;
				margin-left: 1.5rem;
			}

			&:hover {
				background-color: var(--primary-alt);

				.material-icons, .text {
					color: var(--hover-text);
				}
			}

			&.router-link-exact-active {
				background-color: var(--primary);
				border-right: 5px solid var(--primary);

				.material-icons, .text {
					color: var(--light);
				}

				&:hover{
					background-color: var(--primary-alt);
					.material-icons, .text{
					color: var(--plain-color);
					}
				}
			}
		}
	}

	&.is-expanded {
		width: var(--sidebar-width);

		.menu-toggle-wrap {
			top: 0rem;
			
			.menu-toggle { 
				transform: rotate(-180deg);
			}
		}

		h3, .button .text {
			opacity: 1;
		}

		
		.footer {
			opacity: 0;
		}
	}

	@media (max-width: 1024px) {
		position: absolute;
		z-index: 99;
	}
}
</style>