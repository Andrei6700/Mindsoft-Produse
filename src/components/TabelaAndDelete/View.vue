<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>
          <Button>
            <RouterLink to="/produse/Add" style="text-decoration: none">Adauga</RouterLink>
          </Button>
        </h3>
      </div>
      <div class="card-board">
        <DataTable :value="produse" :key="id" showGridlines tableStyle="min-width: 30rem">
          <Column field="ID" header="Id">{{ produs.ID }}</Column>
          <Column field="Denumire" header="Denumire">{{ produs.Denumire }}</Column>
          <Column field="Stoc" header="Stoc">{{ produs.Stoc }}</Column>
          <Column field="Pret" header="Pret">{{ produs.Pret }}</Column>
          <Column field="Actiuni" header="Actiuni">
            <template #body="rowData">
              <SplitButton label="Save" :model="produse" :items="label" />
            </template>
          </Column>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script>
import './View.css'
import axios from 'axios'

export default {
  label: 'produse',
  data() {
    return {
      produse: [
        {
          label: 'Update',
          command: () => {}
        },
        {
          label: 'Delete',
          command: () => {}
        }
      ]
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
