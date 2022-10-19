<template class="position-relative">
    <Navbar />

    
    <div class="cover-container .bg-dark">
      <div>
        <h2 class="position-absolute top-50 start-50 translate-middle ">Inicia sesion para ver El catalogo.</h2>
      </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from "../main";
export default {
    name: 'Home',
    components: { 
      Navbar,   
    },
    data() {
        return {
          usuarios: [],
          usuario: {
            nombre: '',
            correo: '',
            foto: ''
          }
        }
    },
    methods:{
  // GET
    async obtenerDatos () { 
      const querySnapshot = await getDocs(collection(db, "usuarios"));
        querySnapshot.forEach((doc) => {
        let usuario = doc.data()
        usuario.id = doc.id
        this.usuarios.push(usuario)
        console.log(usuario)
      });
    }
    },
    mounted() {
        this.obtenerDatos();
    },
}
</script>
