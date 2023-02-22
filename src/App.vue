<template>
	<div class="app">
		<!-- Navbar -->
		<Navbar />

		<div class="window-app">
			<!-- Sidebar -->
			<Sidebar />

		<!-- Content -->
		<router-view />
		</div>
	</div>

</template>

<script setup>
import Sidebar from './components/sidebar/Sidebar.vue'
import Navbar from './components/Navbar.vue'

</script>

<style lang="scss">
@import '~@/../mdb/scss/index.free.scss';

:root {
	--primary: #ef812c;
	--primary-alt: #ffb782;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #fff;
	--sidebar-width: 250px;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}

body {
	background: var(--light);
}

button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

.app {
	.window-app{
		display: flex;

		main {
			flex: 1 1 0;
			padding: 1.5rem;
			@media (max-width: 1024px) {
				padding-left: 6rem;
			}
		}
	}
}
</style>