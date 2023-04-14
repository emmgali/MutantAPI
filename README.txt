
En esta carpeta estan todos los archivos necesarios de la aplicacion.

Tambien esta disponible en el repo, https://github.com/Trekkar/MutantAPI.

El proyecto fue hecho en nodeJS, y hosteada en la nube con Heroku. 

Nivel 1:

El algoritmo diseñado se basa en recorrer la matriz cuatro veces, de las unicas formas que se pueden encontrar cadenas de letras. Esto es, en vertical, horizontal, y diagonal (ambos sentidos, / y \). A medida que las recorre se va acordando de las letras repetidas y empieza a contar repeticiones hasta obtener una cadena. En caso de cambiar de linea, columna o vertical, resetea sus variables.


A nivel complejidad, su costo es O(4 * n^2), lo que equivaldria a O(n^2), igual al costo de recorrer toda la matriz.

La implementacion se encuentra en mutantLogic.js.



Nivel 2:

La API esta hosteada con Heroku. Una herramienta muy util y gratis para pequeñas apis como esta.

La URL es: https://boiling-caverns-40203.herokuapp.com/SERVICE
NOTA: Dada al modo gratis de prueba del servidor, este se "duerme" cada media hora de inactividad. Esto hace que el primer llamado para "despertarlo" tarde un poco mas de lo normal.

(reemplazar SERVICE con el servicio al que se le desea pegar. Probar con un GET a '/intro')

Para el servicio requerido, y como dice el enunciado, pegarle al metodo POST '/mutant', pasando en el body un json que incluya como parametro con la clave "dna" la lista de ADN para analizar. (como por ejemplo ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"] o  ["ATGCGA", "CAGTGC", "TTATTT", "AGACGG", "GCGTCA", "TCACTG"];)

Si el ADN resulta ser de un mutante, dara como respuesta un 200-OK, y en caso contrario un 403-Forbidden


Nivel 3:

Lamentablemente no llegue a hacer el item 3 ya que tuve algunos problemas con asociar la base al servidor. Sin embargo hacerlo no deberia ser dificil, ya que heroku posee su propia base de datos en Postgres bien integrable al proyecto donde permite trabajar normalmente.
Esta constaria de una tabla con las siguientes columnas: [id(integer), dna(text), is_mutant(bool)]
Notar que el ADN se guarda todo junto como un unico string.
Una vez hecha la conexion correctamente, la logica de la resolucion es bastante sencilla. Solo basta con añadir el dna pasado en el body cada vez que se llame a '/mutant' como a su vez indicando el resultado de isMutant en la columna del booleano correspondiente. (Todo esto siempre y cuando el DNA no este ingresado previamente en la base, sino el servicio siguiente no seria consistente) 

Luego el servicio '/stats' no deberia hacer mas que obtener la cantidad de todos los ADN ingresados menos la cantidad de ADN mutantes. Esto es facil de obtener haciendo una query del estilo (SELECT * FROM adn_table) y (SELECT * FROM adn_table WHERE 'is_mutant' = true). Una vez obtenidos ambos registros, se toma su longitud y se divide entre ellos, devolviendo asi las 3 estadisticas solicitadas.

