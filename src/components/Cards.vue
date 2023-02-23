<template>
  <MDBRow>
    <MDBCol sm="3">
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>Documentos</MDBCardTitle>
          
           <MDBBtn size="" tag="a" href="#!" color="danger" class="mb-3">Pendientes 45</MDBBtn> 
            <MDBBtn tag="a" href="#!" color="warning" class="mb-3">En proceso 20</MDBBtn>
            <MDBBtn tag="a" href="#!" color="success" class="mb-3">Aprobados 20</MDBBtn> 
            <MDBBtn tag="a" href="#!" color="primary" class="mb-3">Ver informe completo</MDBBtn> 
          
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol sm="3">
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>Espacios registrados: 45</MDBCardTitle>
          
          <MDBBtn tag="a" href="#!" color="primary">Ver informe</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol sm="3">
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>Informe 3</MDBCardTitle>
          <MDBCardText>
            Espacios registrados: 45
          </MDBCardText>
          <MDBBtn tag="a" href="#!" color="primary">Ver informe completo</MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>Otro informe</MDBCardTitle>
            
        </MDBCardBody>
      </MDBCard>
      
    </MDBCol>
  </MDBRow>
</template>

<script>
  import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBCardTitle, MDBCardText, MDBBtn } from "mdb-vue-ui-kit";
  export default {
    components: {
      MDBRow,
      MDBCol,
      MDBCard,
      MDBCardBody,
      MDBCardHeader,
      MDBCardTitle,
      MDBCardText,
      MDBBtn
    }
  };
</script>  

<style lang="scss" scoped>

</style>