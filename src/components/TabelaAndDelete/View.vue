<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>
          <Button  >
            <RouterLink to="/produse/Add" style="text-decoration:none">Adauga</RouterLink>
          </Button>
        </h3>
      </div>
      <div class="card-board">
        <tr
          style="
            width: 100%;
            display: flex;
            height: auto;
            justify-content: center;
            flex-direction: row;
            align-items: center;
            padding-bottom: 10px;
          "
        >
          Produse
        </tr>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Denumire</th>
              <th>Stoc</th>
              <th>Pret</th>
              <th>Actiuni</th>
            </tr>
          </thead>
          <tbody v-if="this.produse.length > 0">
            <tr v-for="(produs, id) in this.produse" :key="id">
              <td>{{ produs.ID }}</td>
              <td>{{ produs.Denumire }}</td>
              <td>{{ produs.Stoc }}</td>
              <td>{{ produs.Pret }}</td>
              <td>
                <RouterLink
                  :to="{ path: '/produse/' + produs.id + '/edit' }"
                  class="btn btn-success"
                >
                  Edit
                </RouterLink>
                <button type="button" @click="deleteProdus(produs.ID)" class="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>

          <tbody v-else>
            <tr>
              <td colspan="4">Loading</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import './View.css'
import axios from 'axios'
export default {
  name: 'produse',

  data() {
    return {
      produse: [],
      // selectedAction: null,
      // actiunii: [ 
      //   { name: 'Edit' },
      //   { name: 'Delete' }
      // ],
    }
  },

  mounted() {
    this.getProduse()
  },

  methods: {
    getProduse() {
      axios
        .get('http://localhost/get_produse.php')
        .then((res) => {
          this.produse = res.data
          console.log(this.produse)
        })
        .catch((error) => {
          console.error(error)
        })
    },
    deleteProdus(produsId) {
      if (confirm(`Are you sure to delete ${produsId}`)) {
        axios
          .delete(`https://localhost:8000/api/produse/${produsDenumire}/delete`)
          .then((res) => {
            alert(`Deleted ${produsId}`)
          })
          .catch((error) => {
            console.error(error)
          })
      }
    }
  }
}
</script>






