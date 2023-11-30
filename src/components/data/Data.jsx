import { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import './data.css';

export const Data = () => {
  const [excelData, setExcelData] = useState(null);
  const [sosRitmo, setSosRitmo] = useState([]);
  const [sosElevacion, setSosElevacion] = useState([]);
  const [sosRitmoCardiaco, setSosRitmoCardiaco] = useState([]);
  const [sosMetroSeg, setSosMetroSeg] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showUploadButton, setShowUploadButton] = useState(false);

  useEffect(() => {
    const fetchExcelData = async () => {
      const rutaArchivo = './public/Test.xlsx';

      try {
        const response = await fetch(rutaArchivo);
        const arrayBuffer = await response.arrayBuffer();

        const data = new Uint8Array(arrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });

        const sheetName = workbook.SheetNames[0];
        const dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

        const umbralRitmo = 4;
        const umbralElevacion = 0.1;
        const umbralMetroSeg = 4.5;

        const sosRitmo = dataExcel.filter(actividad => {
          const ritmo = actividad.DurationInSeconds / (actividad.DistanceInMeters / 1000) / 60;
          return ritmo < umbralRitmo;
        });
        const sosElevacion = dataExcel.filter(elevacion => {
          const elevacionRate = elevacion.TotalElevationGainInMeters / elevacion.DurationInSeconds;
          return elevacionRate > umbralElevacion;
        });

        const sosRitmoCardiaco = dataExcel.filter(ritmo => {
          const ritmoCardiaco = ritmo.AverageHeartRateInBeatsPerMinute > 180 || ritmo.AverageHeartRateInBeatsPerMinute < 140;
          return ritmoCardiaco;
        });

        const sosMetroSeg = dataExcel.filter(metro => {
          const metroSeg = metro.AverageSpeedInMetersPerSecond > umbralMetroSeg;
          return metroSeg;
        });

        setExcelData(dataExcel);
        setSosRitmo(sosRitmo);
        setSosElevacion(sosElevacion);
        setSosRitmoCardiaco(sosRitmoCardiaco);
        setSosMetroSeg(sosMetroSeg);
        setIsLoading(false);
        setShowUploadButton(true);

      } catch (error) {
        console.error('Error al cargar el archivo:', error);
        setIsLoading(false);
      }
    };
    fetchExcelData();
  }, []);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: 'array' });

      const sheetName = workbook.SheetNames[0];
      const dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

      // Actualizar los datos con el nuevo archivo cargado
      setExcelData(dataExcel);
      setShowUploadButton(true);
    };

    reader.readAsArrayBuffer(file);
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        Cargando...
      </div>
    );
  }

  const totalRegistros = excelData ? excelData.length : 0;
  const totalSospechosos = sosRitmo.length + sosElevacion.length + sosRitmoCardiaco.length + sosMetroSeg.length;
  const totalNoSospechosos = totalRegistros - totalSospechosos;

  return (
    <div className='buttom'>
      {showUploadButton && (
        <div>
          <input type="file" onChange={handleFileUpload} accept=".xlsx" />
        </div>
      )}
      
        {/* Mostrar totales */}
      <div className="totals-container">
        <p>Total de registros: {totalRegistros}</p>
        <p>Total de registros sospechosos: {totalSospechosos}</p>
        <p>Total de registros no sospechosos: {totalNoSospechosos}</p>
      </div>

      {/* Mostrar resultados de sosRitmo */}
      <h2>Resultados con Ritmos sospechosos: </h2>
      <div className="result-container table-container">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>UserId</th>
              <th>StartTimeInSeconds</th>
              <th>DurationInSeconds</th>
              <th>DistanceInMeters</th>
              <th>Steps</th>
              <th>AverageSpeedInMetersPerSecond</th>
              <th>AveragePaceInMinutesPerKilometer</th>
              <th>TotalElevationGainInMeters</th>
              <th>AverageHeartRateInBeatsPerMinute</th>
            </tr>
          </thead>
          <tbody>
            {sosRitmo.map((actividad, index) => (
              <tr key={index}>
                <td>{actividad.Id}</td>
                <td>{actividad.UserId}</td>
                <td>{actividad.StartTimeInSeconds}</td>
                <td>{actividad.DurationInSeconds}</td>
                <td>{actividad.DistanceInMeters}</td>
                <td>{actividad.Steps}</td>
                <td>{actividad.AverageSpeedInMetersPerSecond}</td>
                <td>{actividad.AveragePaceInMinutesPerKilometer}</td>
                <td>{actividad.TotalElevationGainInMeters}</td>
                <td>{actividad.AverageHeartRateInBeatsPerMinute}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mostrar resultados de sosElevacion */}
      <h2>Resultados de son Elevación sospechosa:</h2>
      <div className="result-container table-container">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>UserId</th>
              <th>StartTimeInSeconds</th>
              <th>DurationInSeconds</th>
              <th>DistanceInMeters</th>
              <th>Steps</th>
              <th>AverageSpeedInMetersPerSecond</th>
              <th>AveragePaceInMinutesPerKilometer</th>
              <th>TotalElevationGainInMeters</th>
              <th>AverageHeartRateInBeatsPerMinute</th>
            </tr>
          </thead>
          <tbody>
            {sosElevacion.map((elevacion, index) => (
              <tr key={index}>
                <td>{elevacion.Id}</td>
                <td>{elevacion.UserId}</td>
                <td>{elevacion.StartTimeInSeconds}</td>
                <td>{elevacion.DurationInSeconds}</td>
                <td>{elevacion.DistanceInMeters}</td>
                <td>{elevacion.Steps}</td>
                <td>{elevacion.AverageSpeedInMetersPerSecond}</td>
                <td>{elevacion.AveragePaceInMinutesPerKilometer}</td>
                <td>{elevacion.TotalElevationGainInMeters}</td>
                <td>{elevacion.AverageHeartRateInBeatsPerMinute}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mostrar resultados de sosRitmoCardiaco */}
      <h2>Resultados con Ritmo Cardiaco mayor o menor al promedio:</h2>
      <div className="result-container table-container">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>UserId</th>
              <th>StartTimeInSeconds</th>
              <th>DurationInSeconds</th>
              <th>DistanceInMeters</th>
              <th>Steps</th>
              <th>AverageSpeedInMetersPerSecond</th>
              <th>AveragePaceInMinutesPerKilometer</th>
              <th>TotalElevationGainInMeters</th>
              <th>AverageHeartRateInBeatsPerMinute</th>
            </tr>
          </thead>
          <tbody>
            {sosRitmoCardiaco.map((ritmo, index) => (
              <tr key={index}>
                <td>{ritmo.Id}</td>
                <td>{ritmo.UserId}</td>
                <td>{ritmo.StartTimeInSeconds}</td>
                <td>{ritmo.DurationInSeconds}</td>
                <td>{ritmo.DistanceInMeters}</td>
                <td>{ritmo.Steps}</td>
                <td>{ritmo.AverageSpeedInMetersPerSecond}</td>
                <td>{ritmo.AveragePaceInMinutesPerKilometer}</td>
                <td>{ritmo.TotalElevationGainInMeters}</td>
                <td>{ritmo.AverageHeartRateInBeatsPerMinute}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mostrar resultados de sosMetroSeg */}
      <h2>Resultados de velocidades sospechas:</h2>
      <div className="result-container table-container">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>UserId</th>
              <th>StartTimeInSeconds</th>
              <th>DurationInSeconds</th>
              <th>DistanceInMeters</th>
              <th>Steps</th>
              <th>AverageSpeedInMetersPerSecond</th>
              <th>AveragePaceInMinutesPerKilometer</th>
              <th>TotalElevationGainInMeters</th>
              <th>AverageHeartRateInBeatsPerMinute</th>
            </tr>
          </thead>
          <tbody>
            {sosMetroSeg.map((metro, index) => (
              <tr key={index}>
                <td>{metro.Id}</td>
                <td>{metro.UserId}</td>
                <td>{metro.StartTimeInSeconds}</td>
                <td>{metro.DurationInSeconds}</td>
                <td>{metro.DistanceInMeters}</td>
                <td>{metro.Steps}</td>
                <td>{metro.AverageSpeedInMetersPerSecond}</td>
                <td>{metro.AveragePaceInMinutesPerKilometer}</td>
                <td>{metro.TotalElevationGainInMeters}</td>
                <td>{metro.AverageHeartRateInBeatsPerMinute}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

