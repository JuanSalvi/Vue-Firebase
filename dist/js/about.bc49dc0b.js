(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"11b4":function(e,a,t){"use strict";t.r(a);var r=t("7a23"),s=Object(r["h"])('<div class="row row-cols-1 row-cols-md-2 g-4"><div class="col"><div class="card"><a href="https://www.smitegame.com"><img src="https://webcdn.hirezstudios.com/smite/v3/img/smite_website_header.jpg" class="card-img-top" alt="..."></a><div class="card-body"><h5 class="card-title">SMITE</h5><p class="card-text">Juega a ser dios en SMITE, el MOBA de acción gratuito con iconos mitológicos legendarios. Empuña el martillo de Thor, convierte a tus enemigos en piedra con Medusa o desata tu poder divino con uno de los más de 100 dioses jugables. ¡Sea cual sea tu nivel, en SMITE hay algo para ti!</p></div></div></div><div class="col"><div class="card"><a href="https://www.leagueoflegends.com/es-mx/"><img src="https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LeagueofLegends_RiotGames_S1_2560x1440-ee500721c06da3ec1e5535a88588c77f" class="card-img-top" alt="..."></a><div class="card-body"><h5 class="card-title">League of Legends</h5><p class="card-text">League of Legends es un juego de estrategia por equipos en el que dos equipos conformados por cinco poderosos campeones se enfrentan para destruir la base del otro. Elige de entre más de 140 campeones para realizar jugadas épicas, asegurar asesinatos y destruir torretas mientras avanzas hacia la victoria.</p></div></div></div><div class="col"><div class="card"><a href="https://playvalorant.com/es-mx/"><img src="https://cdna.artstation.com/p/assets/images/images/050/710/554/large/suke-fvyuupkviaanauy.jpg?1655487003" class="card-img-top" alt="..."></a><div class="card-body"><h5 class="card-title">Valorant</h5><p class="card-text">Combina tu estilo y experiencia en un escenario global y competitivo. Tienes 13 rondas para atacar y defender tu lado con armas precisas y habilidades tácticas. Además, al contar con una sola vida por ronda, tendrás que pensar más rápido que tu oponente si quieres sobrevivir. Enfréntate a enemigos en los modos competitivo y normal, así como en Deathmatch y Spike Rush.</p></div></div></div><div class="col"><div class="card"><a href="https://overwatch.blizzard.com/es-es/"><img src="https://cdna.artstation.com/p/assets/images/images/054/189/972/large/hong-chan-lim-fdwozbuvsaa1sdo-copy.jpg?1663948453" class="card-img-top" alt="..."></a><div class="card-body"><h5 class="card-title">Overwatch 2</h5><p class="card-text">Overwatch 2 es un juego de acción por equipos gratuito siempre activo y en constante evolución ambientado en un futuro optimista en el que todas las partidas presentan una refriega definitiva 5c5. Forma un grupo con amigos en todas las plataformas y adéntrate en la rediseñada experiencia JcJ metiéndote en la piel de una luchadora por la libertad que salta en el tiempo, un DJ que arrea a base de ritmos o uno de los más de 30 héroes únicos en batallas en diferentes ubicaciones de todo el mundo.</p></div></div></div></div>',1);function n(e,a,t,n,o,i){var c=Object(r["w"])("Navbar");return Object(r["s"])(),Object(r["f"])(r["a"],null,[Object(r["j"])(c),s],64)}var o=t("1da1"),i=(t("96cf"),t("159b"),t("b0c0"),t("d178")),c=t("a680"),u=t("56d7"),d=t("4f60"),l=t("a18c"),m={name:"About",components:{Navbar:i["a"]},data:function(){return{file:null,datoImagen:null,error:null,editar:!1,loading:!1,usuarios:[],usuario:{nombre:"",correo:"",foto:""}}},methods:{obtenerDatos:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var t;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(c["f"])(Object(c["b"])(u["db"],"usuarios"));case 2:t=a.sent,t.forEach((function(a){var t=a.data();t.id=a.id,e.usuarios.push(t),console.log(t)}));case 4:case"end":return a.stop()}}),a)})))()},eliminarDato:function(e){return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(c["c"])(Object(c["d"])(u["db"],"usuarios",e));case 2:l["a"].go("/");case 3:case"end":return a.stop()}}),a)})))()},obtenerDatoID:function(e){var a=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=Object(c["d"])(u["db"],"usuarios",e),t.next=3,Object(c["e"])(r);case 3:s=t.sent,s.exists()?(a.usuario=s.data(),a.usuario.id=s.id):console.log("¡No existe el documento!");case 5:case"end":return t.stop()}}),t)})))()},buscarImagen:function(e){var a=this,t=e.target.files[0].type;if("image/jpeg"!==t&&"image/png"!==t)return this.error="Archivo no válido",void(this.file=null);this.file=e.target.files[0],this.error=null;var r=new FileReader;r.readAsDataURL(this.file),r.onload=function(e){a.datoImagen=e.target.result}},agregarDato:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var t,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,e.loading=!0,t=d["a"].storage().ref(),a.next=5,t.child("imagenes").child(e.file.name).put(e.file);case 5:return a.next=7,t.child("imagenes").child(e.file.name).getDownloadURL();case 7:return r=a.sent,a.next=10,Object(c["a"])(Object(c["b"])(u["db"],"usuarios"),{nombre:e.usuario.nombre,correo:e.usuario.correo,foto:r});case 10:e.error="Imagen subida con éxito",e.file=null,a.next=17;break;case 14:a.prev=14,a.t0=a["catch"](0),console.log(a.t0);case 17:return a.prev=17,l["a"].push("/"),e.loading=!1,a.finish(17);case 21:case"end":return a.stop()}}),a,null,[[0,14,17,21]])})))()},actualizarDato:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var t,r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,e.loading=!0,t=d["a"].storage().ref(),a.next=5,t.child("imagenes").child(e.file.name).put(e.file);case 5:return a.next=7,t.child("imagenes").child(e.file.name).getDownloadURL();case 7:return r=a.sent,s=Object(c["d"])(u["db"],"usuarios",e.usuario.id),a.next=11,Object(c["h"])(s,{nombre:e.usuario.nombre,correo:e.usuario.correo,foto:r});case 11:e.error="Imagen subida con éxito",e.file=null,a.next=18;break;case 15:a.prev=15,a.t0=a["catch"](0),console.log(a.t0);case 18:return a.prev=18,l["a"].push("/"),e.loading=!1,a.finish(18);case 22:case"end":return a.stop()}}),a,null,[[0,15,18,22]])})))()}},mounted:function(){this.obtenerDatos()}},p=t("6b0d"),g=t.n(p);const h=g()(m,[["render",n]]);a["default"]=h},b0c0:function(e,a,t){var r=t("83ab"),s=t("5e77").EXISTS,n=t("9bf2").f,o=Function.prototype,i=o.toString,c=/^\s*function ([^ (]*)/,u="name";r&&!s&&n(o,u,{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=about.bc49dc0b.js.map