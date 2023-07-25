<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>
          <RouterLink to="/produse/Add" style="text-decoration: none">
            <Button>Adauga</Button>
          </RouterLink>
        </h3>
      </div>
      <div class="card-board">
        <DataTable :value="produse" :key="id" showGridlines tableStyle="min-width: 30rem">
          <Column field="ID" header="Id">{{ produs.ID }}</Column>
          <Column field="Denumire" header="Denumire">{{ produs.Denumire }}</Column>
          <Column field="Stoc" header="Stoc">{{ produs.Stoc }}</Column>
          <Column field="Pret" header="Pret">{{ produs.Pret }}</Column>
          <Column field="Actiuni" header="Actiuni">

            <template #body="produs">
              <Dropdown
                :options="actiunii"
                optionLabel="name"
                placeholder="Select an Action"
                v-model="selectedAction"
                class="min-width: 10rem"
                @change="linkpage(produs)"
              />
            </template>

          </Column>
        </DataTable>
      </div>
    </div>
  </div>
</template>


<script>
import { RouterLink } from 'vue-router'
import './View.css'
import axios from 'axios'

export default {
  data() {
  return {
    selectedAction: null,
    actiunii: [{ name: 'Edit' },
     { name: 'Delete' }],
    produse: []
  };
},

  mounted() {
    this.getProduse()
  },

  methods: {
    getProduse() {
      axios
        .get('http://localhost/get_produse.php')
        .then((res) => {
          this.produse = res.data.map((rowData) => ({
            ...rowData,
            selectedAction: null
          }))
        })
        .catch((error) => {
          console.error(error)
        })
    },

    linkpage(produs) {
  const selectedValue = this.selectedAction.name; 
  if (selectedValue === 'Edit') {
    this.$router.push(`/produse/${produs.ID}/edit`);
  } else if (selectedValue === 'Delete') {
    this.deleteProdus(produs.ID);
  }
},

    deleteProdus(produsId) {
      if (confirm(`Are you sure to delete ${produsId}`)) {
        axios
          .delete(`https://localhost:8000/api/produse/${produsId}/delete`)
          .then((res) => {
            alert(`Deleted ${produsId}`)
            this.getProduse()
          })
          .catch((error) => {
            console.error(error)
          })
      }
    }
  }
}
</script>
