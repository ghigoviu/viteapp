<template>
  <MDBNavbar container
  expand="lg"
  bg="white"
  class="d-flex justify-content-between"
  position="sticky"
  >
    <div class="logo">
      <img :src="logoURL" alt="Vue" /> 
    </div>
    
    <MDBCollapse v-model="collapse5" id="navbarRightAlign">
      <MDBNavbarNav>    

        <!-- Notificaction -->
        <MDBDropdown class="nav-item" v-model="dropdown4">
          <MDBDropdownToggle tag="a" class="nav-link" color="secondary" @click="dropdown4 = !dropdown4">
            <font-awesome-icon icon="fa-solid fa-bell" fixed-width size="2xl"/>
            <!--
            <font-awesome-icon icon="fa-solid fa-bell" fixed-width size="2x" shake/>
            -->
            <MDBBadge notification color="danger" pill>1</MDBBadge>
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem href="#">Notificación 1</MDBDropdownItem>
            <MDBDropdownItem href="#">Notificación 2</MDBDropdownItem>
            <MDBDropdownItem href="#">Notificación 3</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>

        <!-- Avatar -->
        <MDBDropdown class="nav-item" v-model="dropdown6">
          <MDBDropdownToggle tag="a" class="nav-link" @click="dropdown6 = !dropdown6">
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/img (31).webp"
              class="rounded-circle"
              height="40"
              alt=""
              loading="lazy"
            />
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem href="#">Perfil</MDBDropdownItem>
            <MDBDropdownItem href="#">Configuraciones</MDBDropdownItem>
            <MDBDropdownItem href="#">Salir</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        

      </MDBNavbarNav>
    </MDBCollapse>

  </MDBNavbar>
</template>


<script>
  import logoURL from '../assets/logo.jpg'
  import { ref } from 'vue';

  import {
    MDBBadge,
    MDBIcon,
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBDropdown,
    MDBNavbarBrand,
    MDBDropdownToggle,
    MDBNavbarToggler,
    MDBDropdownMenu,
    MDBDropdownItem,
  } from 'mdb-vue-ui-kit';
  
  export default {
    components: {
      MDBBadge,
      MDBIcon,
      MDBNavbar,
      MDBNavbarNav,
      MDBNavbarItem,
      MDBDropdown,
      MDBNavbarBrand,
      MDBDropdownToggle,
      MDBNavbarToggler,
      MDBDropdownMenu,
      MDBDropdownItem,
    },
    setup() {
      const dropdown6 = ref(false);
      const dropdown4 = ref(false);
      
      return {
        dropdown6,
        dropdown4,
        logoURL,
      };
    },
  };

</script>

<style lang="scss" scoped>
  .logo {
      align: center;
      margin-bottom: 1rem;
      
      img {
        width: 8rem;
      }
    }
</style>