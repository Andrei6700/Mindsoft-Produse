<template>
  <div class="container">
    <div class="card">
      <div class="card-header" style="margin-bottom: 3%;">
        <h4>Adaugare Produs</h4>
      </div>

      <div class="container-inputs">
        <div class="input-container">
          <label for="produs-id" class="label">ID</label>
          <InputText  type="text" id="produs-id" v-model="data.produs.ID" class="form-control" />
        </div>
      </div>

      <div class="container-inputs">
        <div class="input-container">
          <label for="produs-denumire" class="label">Denumire</label>
          <InputText  type="text" id="produs-denumire" v-model="data.produs.Denumire" class="form-control" />
        </div>
      </div>

      <div class="container-inputs">
        <div class="input-container">
          <label for="produs-stoc" class="label">Stoc</label>
          <InputText  type="text" id="produs-stoc" v-model="data.produs.Stoc" class="form-control" />
        </div>
      </div>

      <div class="container-inputs">
        <div class="input-container">
          <label for="produs-pret" class="label">Pret</label>
          <InputText  type="text" id="produs-pret" v-model="data.produs.Pret" class="form-control" />
        </div>
      </div>

      <div class="container-inputs">
        <div class="input-container">
          <!-- <button type="button" class="btn btn-primary" @click="saveProdus">Save</button> -->
          <Button  label="Submit"  @click="saveProdus" />
        </div>
      </div>

    </div>
  </div>
</template>


 <script>
 import './Create.css'
 import axios from 'axios'
 
 export default {
   name: 'produsCreate',
   data() {
     return {
       data: { 
         produs: {
           ID: '',
           Denumire: '',
           Stoc: '',
           Pret: ''
         }
       }
     }
   },
   methods: {
     saveProdus() {
       axios.post('https://localhost:8000/api/produse', this.data.produs)
         .then(res => {
           this.data.produs = { 
             ID: '',
             Denumire: '',
             Stoc: '',
             Pret: ''
           }
         })
         .catch(error => {
           console.error(error)
         })
     }
   }
 }
 </script>