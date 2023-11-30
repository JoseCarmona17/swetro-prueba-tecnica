Para realizar la prueba técnica opté por utilizar tecnologías como:

-Html, Css, JavaScript y escogí a React como Framework a utilizar

la aplicación consiste en una Home o página principal que busca mostrar parte de la idea en la que cosiste la página, mostrando servicios, e información para que el usuario se haga la idea de que trata.
Cuenta con un menú superior que permite elegir los demás componentes que hacen parte de la aplicación.

Solución a problemática:
primero determinar algunas condiciones que ayuden a determinar los registros sospechosos de realizar trampa de los que no, por lo cual implemente las siguientes condiciones:

-ritmos cardiacos por encima o por debajo de la media

-ritmos demasiado altos o bajos

-Elevación anormal

-Velocidades demasiado altas


para iniciar a tomar los datos se instaló la dependencia xlsx, ya que esta permite convertir la información de los archivos xlsx en JSON y así poder utilizarlos en Reactjs, una vez obtenida la información se aplicaron dichas condiciones para así poder filtrar la información.

Funcionamiento de la aplicación>
#1 
El Frontend de la aplicación consta de cuatro secciones, una barra de navegación la cual cuenta con 4 botones (Inicio, Servicios, Registros y Gráficas), una página principal u Home, una sección de servicios y un Pie de página o Footer, se usó la dependencia react-router-dom para poder conectar algunos componentes como registros y Gráficas al aplicativo.


![image](https://github.com/JoseCarmona17/swetro-prueba-tecnica/assets/90072739/95f51e8b-7c75-4fe4-b54f-14433a5ddd1a)


#2
Al darle click a la opción de registros en la barra de navegación cargará otro componente, este muestra toda la información que se necesita tal como el total de registros, total de registros sospechosos, total registro no sospechosos, un botón para subir un archivo xlsx y así aplicar las condiciones y filmar los datos y también muestra 4 cajas, cada una de las cajas muestra registros sospechosos, están divididas por condición, así se puede tener mayor control de los datos mostrados.


![image](https://github.com/JoseCarmona17/swetro-prueba-tecnica/assets/90072739/da2023c6-97d1-49bb-a491-27e8019018df)

#3
adicionalmente, se aplicó el componente (Diagramas) el cual se encuentra en la barra de navegación del aplicativo, este componente muestra gráficas de las diferentes condiciones, cuentan con toda la información necesaria y detallada a mostrar, al dejar el mouse o puntero encima de alguno de los colores de los diagramas este mostrará información como el número de registro sospechoso y de los que no lo son dependiendo de donde se coloque el puntero esto muestra de forma más amigable y didáctica los datos evaluados, estas gráficas fueron realizadas con chartjs una dependencia que permite realizar este tipo de gráficas.


![image](https://github.com/JoseCarmona17/swetro-prueba-tecnica/assets/90072739/ff56cd8d-466c-4cc0-b34d-b1461b3293f7)


Para la realización de todo el aplicativo se utilizaron las siguientes tecnologías:
-HTML: 5.0.0
-Css: 4.0.0
-JavaScript: ECMAScript 2021 
-React: 18.2.0
-React-router-dom: 6.20.0
-Chat.js:4.4.0
-xlsx: 0.18.5
