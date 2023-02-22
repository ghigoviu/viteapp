<template>
    <main id="EspaciosGeneral-page">
        <h1>Vista general de espacios</h1>

        <a href="/nuevo">
            <MDBBtn color="primary" > Registrar nuevo </MDBBtn>
        </a>
        
        <div> <br> </div>

        <MDBTable responsive striped>
            <thead>
                <tr>
                    <th scope="col">Clave</th>
                    <th scope="col">Municipio</th>
                    <th scope="col">Candidato</th>
                    <th scope="col">Medidas</th>
                    <th scope="col">Permiso</th>
                    <th scope="col">Factura</th>
                    <th scope="col">Contrato</th>
                    <th scope="colgroup" align="center">Acciones</th>
                </tr>
            </thead>
            <tbody class="table-group-divider table-divider-color">
                <tr v-for="space in spacesss" :key="space.id">
                    <td>{{ space.id }}</td>
                    <td>{{ space.country }}</td>
                    <td>{{ space.name }}</td>
                    <td>{{ space.medidas }}</td>
                    <td>
                        <a href="/cambiar-status">
                        <MDBBtn rounded size="sm" :color="getStatusColor(space.status)"> {{ space.status }} </MDBBtn>
                        </a>
                    </td>
                    <td>
                        <a href="/cambiar-status">
                        <MDBBtn rounded size="sm" :color="getStatusColor(space.factura)"> {{ space.factura }} </MDBBtn>
                        </a>
                    </td>
                    <td>
                        <a href="/cambiar-status">
                        <MDBBtn rounded size="sm" :color="getStatusColor(space.contrato)"> {{ space.contrato }} </MDBBtn>
                        </a>
                    </td>
                    <td colspan="3"> 
                        <MDBBtn color="info">Ver</MDBBtn> 
                        <MDBBtn color="warning">Editar</MDBBtn> 
                    </td> 
                    
                </tr>
            </tbody>
        </MDBTable>
    </main>
</template>

<script setup>
import data from './data.json'
import { MDBTable, MDBBtn } from 'mdb-vue-ui-kit';

const spacesss = data;

function getStatusColor(status) {
    if (status === 'Aprobado') {
      return 'success'
    }

    if (status === 'Procesando') {
      return 'warning'
    }

    return 'danger'
  }

</script>

<style>

</style>