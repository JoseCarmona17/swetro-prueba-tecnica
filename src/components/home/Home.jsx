import './home.css'

export const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-text">
        <h1>
          Swetro<br />
        </h1>
        <h2>Evolutionary Fitness.</h2>
        <p>
        Optimiza tu rendimiento físico con nuestra aplicación de seguimiento de ejercicios. 
        Registra fácilmente tus entrenamientos, analiza tu progreso y recibe programas personalizados. 
        Alcanza tus metas fitness de manera más inteligente. ¡Únete ahora!
        </p>
        <a href="#" className="btn">Iniciar </a>
      </div>
      <div className="home-img">
        <img src="src\assets\HomePageGraphic.png" alt="" />
      </div>
    </section>
  )
}
