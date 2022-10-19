<template>
  <Navbar/>
 <div class=" row row-cols-1 row-cols-md-2 g-4 ">
  <div class="col ">
    <div class="card">
      <a href="https://www.smitegame.com">
      <img src="https://webcdn.hirezstudios.com/smite/v3/img/smite_website_header.jpg" class="card-img-top" alt="...">
      </a>
      <div class="card-body">
        <h5 class="card-title">SMITE</h5>
        <p class="card-text">Juega a ser dios en SMITE, el MOBA de acción gratuito con iconos mitológicos legendarios. Empuña el martillo de Thor, convierte a tus enemigos en piedra con Medusa o desata tu poder divino con uno de los más de 100 dioses jugables. ¡Sea cual sea tu nivel, en SMITE hay algo para ti!</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <a href="https://www.leagueoflegends.com/es-mx/">
      <img src="https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LeagueofLegends_RiotGames_S1_2560x1440-ee500721c06da3ec1e5535a88588c77f" class="card-img-top" alt="...">
      </a>
      <div class="card-body">
        <h5 class="card-title">League of Legends</h5>
        <p class="card-text">League of Legends es un juego de estrategia por equipos en el que dos equipos conformados por cinco poderosos campeones se enfrentan para destruir la base del otro. Elige de entre más de 140 campeones para realizar jugadas épicas, asegurar asesinatos y destruir torretas mientras avanzas hacia la victoria.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <a href="https://playvalorant.com/es-mx/">
      <img src="https://cdna.artstation.com/p/assets/images/images/050/710/554/large/suke-fvyuupkviaanauy.jpg?1655487003" class="card-img-top" alt="...">
     </a>
      <div class="card-body">
        <h5 class="card-title">Valorant</h5>
        <p class="card-text">Combina tu estilo y experiencia en un escenario global y competitivo. Tienes 13 rondas para atacar y defender tu lado con armas precisas y habilidades tácticas. Además, al contar con una sola vida por ronda, tendrás que pensar más rápido que tu oponente si quieres sobrevivir. Enfréntate a enemigos en los modos competitivo y normal, así como en Deathmatch y Spike Rush.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <a href="https://overwatch.blizzard.com/es-es/">
      <img src="https://cdna.artstation.com/p/assets/images/images/054/189/972/large/hong-chan-lim-fdwozbuvsaa1sdo-copy.jpg?1663948453" class="card-img-top" alt="...">
      </a>
      <div class="card-body">
        <h5 class="card-title">Overwatch 2</h5>
        <p class="card-text">Overwatch 2 es un juego de acción por equipos gratuito siempre activo y en constante evolución ambientado en un futuro optimista en el que todas las partidas presentan una refriega definitiva 5c5. Forma un grupo con amigos en todas las plataformas y adéntrate en la rediseñada experiencia JcJ metiéndote en la piel de una luchadora por la libertad que salta en el tiempo, un DJ que arrea a base de ritmos o uno de los más de 30 héroes únicos en batallas en diferentes ubicaciones de todo el mundo.</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import { collection, getDocs, addDoc, deleteDoc, doc, getDoc, updateDoc  } from 'firebase/firestore/lite';
import { db, storage } from "../main";
import firebase from 'firebase/compat/app';
import router from '../router/index'

export default {
  name: 'About',
  components: {
    Navbar
  },
  data() {
    return {
      file: null,
      datoImagen: null,
      error: null,
      editar: false,
      loading: false,

      usuarios: [],
      usuario: {
      nombre: '',
      correo: '',
      foto: ''
    }
  }
  },
  methods: {
    async obtenerDatos () { 
      const querySnapshot = await getDocs(collection(db, "usuarios"));
        querySnapshot.forEach((doc) => {
        let usuario = doc.data()
        usuario.id = doc.id
        this.usuarios.push(usuario)
        console.log(usuario)
      });
    },
    // DELETE / ELIMINAR / BORRAR
    async eliminarDato (id){
      await deleteDoc(doc(db, "usuarios", id ));
      router.go('/')
    },
    // GET BY ID / OBTENER POR ID
    async obtenerDatoID (id){
      const docRef = doc(db, "usuarios", id);
      const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            this.usuario = docSnap.data()
            this.usuario.id = docSnap.id
            } 
            else {
            console.log("¡No existe el documento!");
            }
    },

     // BUSCAR IMAGEN
    buscarImagen(event){
      const tipoArchivo = event.target.files[0].type;
      if(tipoArchivo === 'image/jpeg' || tipoArchivo === 'image/png'){
          this.file = event.target.files[0]
          this.error = null
      }
          else{
          this.error = 'Archivo no válido'
          this.file = null
          return 
          }
          const reader = new FileReader();
          reader.readAsDataURL(this.file);
          reader.onload = (e) => {
          this.datoImagen = e.target.result
          }
    },
    // SUBIR IMAGEN STORAGE
  async agregarDato(){
    try {
     this.loading = true
      var storageRef = firebase.storage().ref();
      await storageRef.child('imagenes').child(this.file.name).put(this.file)
      const urlDescarga = await storageRef.child('imagenes').child(this.file.name).getDownloadURL()
      await addDoc(collection(db, "usuarios"), {
          nombre: this.usuario.nombre,
          correo: this.usuario.correo,
          foto: urlDescarga
        })
        this.error = 'Imagen subida con éxito'
        this.file = null
    } 
      catch (error) {
        console.log(error);
      } 
      finally {
        router.push('/')
        this.loading = false
      }
    },

// MÉTODO actualizarDato
async actualizarDato(){
    try {
      this.loading = true
      var storageRef = firebase.storage().ref();
      await storageRef.child('imagenes').child(this.file.name).put(this.file)
      const urlDescarga = await storageRef.child('imagenes').child(this.file.name).getDownloadURL()
      const elemento = doc(db, "usuarios", this.usuario.id )
      await updateDoc(elemento, {
          nombre: this.usuario.nombre,
          correo: this.usuario.correo,
          foto: urlDescarga
        })
        this.error = 'Imagen subida con éxito'
        this.file = null
    } 
      catch (error) {
        console.log(error);
      } 
      finally {
        router.push('/')
        this.loading = false
      }}
  },
  mounted() {
    this.obtenerDatos();
  },
}

</script>