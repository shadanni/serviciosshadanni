// Este texto se ejecuta en el servidor.
/** Se importa el objeto functions de la librería "firebase-functions". */
const functions = require('firebase-functions');

/* Se exporta la función sobre https llamada "reco". */
exports.ciudad = functions.https.onRequest(
  /** Código para la función saludo.
   * @param {{query:Object}} request solicitud que recibe el servidor.
   * Corresponde a la librería Express.
   * @param {{send:(texto:string)=>void}} response respuesta que devuelve el
   * servidor. Corresponde a la librería Express. */
  (request, response) => {
    try {
      
	if (!request.query.edad) {
        // Entra aquí si el nombre2 es null, undefined o ""
        throw new Error("Falta agregar la edad");
      }
      /* Solo se llega a esta parte si nombre1 y nombre 2 tienen un texto.
       * Devuelve un saludo. */

      if (request.query.visitas == "1" && request.query.edad >= "18" && request.query.edad < 60) {
        response.send("Recomendamos que visite: º El callejon del Besoº en guanajuato para que la pase muy bien");
      } 

      

      else if (request.query.visitas == "2" && request.query.edad >= 18 && request.query.edad < 60) {
              response.send("Recomendamos que visite : º San Pedro Tlaquepaque º en Jalisco para que la pase muy bien");
        
          } 
      else if (request.query.visitas == "3" && request.query.edad >= 18 && request.query.edad < 60) {
              response.send("Recomendamos que visite : ºSanta Clara del Cobreº en Michoacan para que la pase muy bien");

        }

      
    } catch (e) {
      // Devuelve un texto de error.
      response.send(e.message);
    }
  });