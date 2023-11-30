import './services.css'

export const Services = () => {
  return (
    <div className="customers-container">
    <div className="box">
    <h2>Registro de Actividad</h2>
      <p>
      La aplicación posibilita a los usuarios registrar sus sesiones de ejercicio, ya sea manualmente o mediante dispositivos wearables, incluyendo detalles como tipo de ejercicio, duración, intensidad, distancia, repeticiones y métricas relevantes.
      </p>
    </div>

    <div className="box">
    <h2>Seguimiento de Progreso</h2>
      <p>
      La app ofrece análisis y visualizaciones de datos para que los usuarios monitoricen su progreso. Gráficos, estadísticas y resúmenes facilitan la identificación de patrones, establecimiento de metas y ajuste de rutinas para mejores resultados.
      </p>
    </div>

    <div className="box">
    <h2>Programas Personalizados</h2>
      <p>
      Con base en los datos recopilados sobre la actividad y objetivos del usuario, la app podría sugerir programas de entrenamiento personalizados. Estos se ajustarían a necesidades individuales, considerando factores como frecuencia cardíaca, fuerza y resistencia.
      </p>
    </div>
  </div>
  )
}
