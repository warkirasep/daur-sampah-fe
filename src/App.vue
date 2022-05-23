
<template>
	<div v-if="!$route.meta.plainLayout">
		<Topbar/>
		<!-- Page content -->
		<div class="page-content">
			<Sidebar/>
			<!-- Main content -->
			<div class="content-wrapper">

				<!-- Inner content -->
				<div class="content-inner">
					<router-view></router-view>
					<Footer/>
				</div>
			</div>
		</div>
	</div>
	<!-- Main navbar -->
	<template v-if="$route.meta.plainLayout">
		<Login/>
	</template>
</template>
<script>
	import Login from '../src/components/Login.vue'
	import Topbar from '../src/components/Topbar.vue'
	import Sidebar from '../src/components/Sidebar.vue'
	import Footer from '../src/components/Footer.vue'
	export default {
		name: 'App',
		components: {
			Login,
			Topbar,
			Sidebar,
			Footer
		}
	}
</script>
