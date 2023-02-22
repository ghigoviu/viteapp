<template>
  <MDBRow>
    <MDBCol sm="3">
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>Documentos</MDBCardTitle>
          <MDBCardText>
            
          </MDBCardText>
          <MDBBtn tag="a" href="#!" color="danger">45</MDBBtn> 
          <MDBBtn tag="a" href="#!" color="warning">20</MDBBtn> 
          <MDBBtn tag="a" href="#!" color="success">20</MDBBtn> 
          <MDBBtn tag="a" href="#!" color="primary">Ver informe</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol sm="4">
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>Espacios registrados: 45</MDBCardTitle>
          
          <MDBBtn tag="a" href="#!" color="primary">Ver informe</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol sm="4">
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>Informe 3</MDBCardTitle>
          <MDBCardText>
            Espacios registrados: 45
          </MDBCardText>
          <MDBBtn tag="a" href="#!" color="primary">Ver informe completo</MDBBtn>
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