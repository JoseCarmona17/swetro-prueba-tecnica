Para realizar la prueba técnica opté por utilizar tecnologías como:

-Html, Css, JavaScript y escogí a React como Framework a utilizar

La aplicación consiste en una Home o página principal donde se muestran los servicios y ofrece la información necesaria para el usuario. Esta, cuenta con un menú superior que permite elegir los demás componentes que hacen parte de la aplicación.

La solución a la problemática se basa en determinar  los registros sospechosos en los usuarios que tengas datos sospechosos de usuarios, tales como:

-Ritmos cardiacos por encima o por debajo de la media

-Ritmos demasiado altos o bajos

-Elevación anormal

-Velocidades demasiado altas


Para tomar los datos se instaló la dependencia xlsx, ya que esta permite convertir la información de los archivos xlsx en JSON y así poder utilizarlos en Reactjs. Una vez obtenida la información, se aplicaron dichas condiciones para filtrar la información.

Funcionamiento de la aplicación:

- El funcionamiento consta de:
1. El Frontend muestra cuatro secciones que se dividen en; una barra de navegación, la cual cuenta con 4 botones (Inicio, Servicios, Registros y Gráficas), una página principal u Home, una sección de servicios y un Pie de página o Footer. Se usó la dependencia react-router-dom para poder conectar algunos componentes como registros y Gráficas al aplicativo.


![image](https://github.com/JoseCarmona17/swetro-prueba-tecnica/assets/90072739/95f51e8b-7c75-4fe4-b54f-14433a5ddd1a)



2. Visualización de datos:
Al darle click a la opción de registros en la barra de navegación cargará otro componente que muestra la información total de registros sospechosos, no sospechosos y un botón para subir un archivo xlsx para filtrar los datos y aplicar las condiciones del programa, también se muestran 4 cajas, divididas por condición para así tener mayor control sobre los datos de registros sospechosos que contiene cada una.


![image](https://github.com/JoseCarmona17/swetro-prueba-tecnica/assets/90072739/da2023c6-97d1-49bb-a491-27e8019018df)


3. Visualización de Gráficas:
Este botón, el cual se encuentra en la barra de navegación del aplicativo, muestra las gráficas de las diferentes condiciones junto a la información detallada (registros sospechosos y no sospechosos) la cual se despliega de forma didactica al colocar el puntero encima de alguno de los colores de las gráficas. Para la realización de estas gráficas se utilizó chartjs una dependencia que permite realizar este tipo de gráficas.


![image](https://github.com/JoseCarmona17/swetro-prueba-tecnica/assets/90072739/ff56cd8d-466c-4cc0-b34d-b1461b3293f7)


En el desarollo del aplicativo se emplearon las siguientes tecnologias:
-HTML: 5.0.0
-Css: 4.0.0
-JavaScript: ECMAScript 2021 
-React: 18.2.0
-React-router-dom: 6.20.0
-Chat.js:4.4.0
-xlsx: 0.18.5
