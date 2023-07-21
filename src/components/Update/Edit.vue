<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h4>Modificare Produs</h4>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <label for="produs-id">ID</label>
          <input type="text" id="produs-id" v-model="data.produs.ID" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="produs-denumire">Denumire</label>
          <input
            type="text"
            id="produs-denumire"
            v-model="data.produs.Denumire"
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <label for="produs-stoc">Stoc</label>
          <input type="text" id="produs-stoc" v-model="data.produs.Stoc" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="produs-pret">Pret</label>
          <input type="text" id="produs-pret" v-model="data.produs.Pret" class="form-control" />
        </div>
        <div class="mb-3">
          <button type="button" class="btn btn-primary" @click="updateProdus">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './Edit.css'
import axios from 'axios'

export default {
  name: 'produsEdit',
  data() {
    return {
      produsId:'',
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
  mounted() {
    this.studentId = this.$route.params.id;
    this.getProdusData(this.$route.params.id)
  },

  methods: {
    getProdusData(produsId) {
      axios.get(`https://localhost:8000/api/produse/${produsId}/edit`).then((res) => {
        console.log(res.data.produs)
        this.model.produs = res.data.produs
      })
    },

    updateProdus() {
      axios
        .put(`https://localhost:8000/api/produse/${this.produsId}/edit`, this.data.produs)
        .then((res) => {
          this.data.produs = {
            ID: '',
            Denumire: '',
            Stoc: '',
            Pret: ''
          }
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>
