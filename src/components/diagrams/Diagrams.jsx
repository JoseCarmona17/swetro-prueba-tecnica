import { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import Chart from 'chart.js/auto';
import './Diagrams.css';

export const Diagrams = () => {
  const [excelData, setExcelData] = useState(null);

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
        })

        const noSospechososRitmo = dataExcel.filter(actividad => !sosRitmo.includes(actividad));
        const noSospechososElevation = dataExcel.filter(actividad => !sosElevacion.includes(actividad));
        const noSospechososRitmoCar = dataExcel.filter(actividad => !sosRitmoCardiaco.includes(actividad));
        const noSospechososMetroSeg = dataExcel.filter(actividad => !sosMetroSeg.includes(actividad));

        graficoRitmo(sosRitmo.length, noSospechososRitmo.length);
        graficoElevacion(sosElevacion.length, noSospechososElevation.length);
        graficoRitmoCar(sosRitmoCardiaco.length, noSospechososRitmoCar.length);
        graficoMetroSeg(sosMetroSeg.length, noSospechososMetroSeg.length);     

        setExcelData(dataExcel);
      } catch (error) {
        console.error('Error al cargar el archivo:', error);
      }
    };
    fetchExcelData();
  }, []);

  // Grafico #1
  function graficoRitmo(sospechosos, noSospechosos) {
    const contenedorGrafico = document.getElementById('graficoRitmo');
    const canvas = document.getElementById('graficoRitmo');
    const ctx = canvas.getContext('2d');

    // Ajusta el tamaño del lienzo y del contenedor 
    canvas.width = contenedorGrafico.clientWidth;
    canvas.height = contenedorGrafico.clientHeight;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Duración Prolongada', 'Duración Normal'],
        datasets: [{
          label: 'Total de Registros',
          data: [sospechosos, noSospechosos],
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)', // color para sospechosos
            'rgba(75, 192, 192, 0.7)'  // color para no sospechosos
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              font: {
                size: 14, // Ajusta el tamaño del texto en el eje y
              },
              color: 'rgba(0, 0, 0, 0.7)' // Ajusta el color del texto en el eje y
            }
          },
          x: {
            ticks: {
              font: {
                size: 14, // Ajusta el tamaño del texto en el eje x
              },
              color: 'rgba(0, 0, 0, 0.7)' // Ajusta el color del texto en el eje x
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              font: {
                size: 16, // Ajusta el tamaño del texto en la leyenda
                weight: 'bold' // Ajusta el peso del texto en la leyenda
              },
              color: 'rgba(0, 0, 0, 0.8)' // Ajusta el color del texto en la leyenda
            }
          }
        }
      }
    });
  }

  //Grafico #2
  function graficoElevacion(sospechosos, noSospechosos) {
    const contenedorGrafico = document.getElementById('graficoElevacion');
    const canvas = document.getElementById('graficoElevacion');
    const ctx = canvas.getContext('2d');

    // Ajusta el tamaño del lienzo y del contenedor
    canvas.width = contenedorGrafico.clientWidth;
    canvas.height = contenedorGrafico.clientHeight;

    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Elevación sospechosa', 'Elevación Normal'],
        datasets: [{
          label: 'Total de Registros',
          data: [sospechosos, noSospechosos],
          backgroundColor: [
            'rgba(54, 162, 235, 0.7)', // color para sospechosos
            'rgba(255, 159, 64, 0.7)'  // color para no sospechosos
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              font: {
                size: 14, // Ajusta el tamaño del texto en el eje y
              },
              color: 'rgba(0, 0, 0, 0.7)' // Ajusta el color del texto en el eje y
            }
          },
          x: {
            ticks: {
              font: {
                size: 14, // Ajusta el tamaño del texto en el eje x
              },
              color: 'rgba(0, 0, 0, 0.7)' // Ajusta el color del texto en el eje x
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              font: {
                size: 16, // Ajusta el tamaño del texto en la leyenda
                weight: 'bold' // Ajusta el peso del texto en la leyenda
              },
              color: 'rgba(0, 0, 0, 0.8)' // Ajusta el color del texto en la leyenda
            }
          }
        }
      }
    });
  }

  //Grafico #3
  function graficoRitmoCar(sospechosos, noSospechosos) {
    const contenedorGrafico = document.getElementById('graficoRitmoCar');
    const canvas = document.getElementById('graficoRitmoCar');
    const ctx = canvas.getContext('2d');

    // Ajusta el tamaño del lienzo y del contenedor 
    canvas.width = contenedorGrafico.clientWidth;
    canvas.height = contenedorGrafico.clientHeight;

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Ritmo cardiaco menor o mayor al promedio', 'Ritmo cardiaco Normal'],
        datasets: [{
          label: 'Total de Registros',
          data: [sospechosos, noSospechosos],
          backgroundColor: [
            'rgba(153, 102, 255, 0.7)', // color para sospechosos
            'rgba(255, 205, 86, 0.7)'  // color para no sospechosos
          ],
          borderColor: [
            'rgba(50, 205, 50, 1)',
            'rgba(255, 192, 203, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              font: {
                size: 14, // Ajusta el tamaño del texto en el eje y
              },
              color: 'rgba(0, 0, 0, 0.7)' // Ajusta el color del texto en el eje y
            }
          },
          x: {
            ticks: {
              font: {
                size: 14, // Ajusta el tamaño del texto en el eje x
              },
              color: 'rgba(0, 0, 0, 0.7)' // Ajusta el color del texto en el eje x
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              font: {
                size: 16, // Ajusta el tamaño del texto en la leyenda
                weight: 'bold' // Ajusta el peso del texto en la leyenda
              },
              color: 'rgba(0, 0, 0, 0.8)' // Ajusta el color del texto en la leyenda
            }
          }
        }
      }
    });
  }

  //Grafico#4
  function graficoMetroSeg(sospechosos, noSospechosos) {
    const contenedorGrafico = document.getElementById('graficoMetroSeg');
    const canvas = document.getElementById('graficoMetroSeg');
    const ctx = canvas.getContext('2d');

    // Ajusta el tamaño del lienzo y del contenedor 
    canvas.width = contenedorGrafico.clientWidth;
    canvas.height = contenedorGrafico.clientHeight;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Velocidad Sospechosa', 'Velocidad Normal'],
        datasets: [{
          label: 'Total de Registros',
          data: [sospechosos, noSospechosos],
          backgroundColor: [
            'rgba(0, 136, 136, 0.7)', // color para sospechosos
            'rgba(120, 0, 0, 0.7)'  // color para no sospechosos
          ],
          borderColor: [
            'rgba(255, 215, 0, 1)',
            'rgba(255, 182, 193, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              font: {
                size: 14, // Ajusta el tamaño del texto en el eje y
              },
              color: 'rgba(0, 0, 0, 0.7)' // Ajusta el color del texto en el eje y
            }
          },
          x: {
            ticks: {
              font: {
                size: 14, // Ajusta el tamaño del texto en el eje x
              },
              color: 'rgba(0, 0, 0, 0.7)' // Ajusta el color del texto en el eje x
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              font: {
                size: 16, // Ajusta el tamaño del texto en la leyenda
                weight: 'bold' // Ajusta el peso del texto en la leyenda
              },
              color: 'rgba(0, 0, 0, 0.8)' // Ajusta el color del texto en la leyenda
            }
          }
        }
      }
    });
  }

  return (
    <div className='app-container'>
     
      <div className='graficoContainer'>
        <div>
          <canvas id="graficoRitmo" className='graficoRitmo' style={{ width: '25rem', height: '12.5rem' }}></canvas>
        </div>
        <div>
          <canvas id="graficoElevacion" className='graficoElevacion' style={{ width: '8.75rem', height: '25rem' }}></canvas>
        </div>
      </div>
  
      <div className='graficoContainer'>
        <div>
          <canvas id="graficoRitmoCar" className='graficoRitmoCar' style={{ width: '8.75rem', height: '25rem' }}></canvas>
        </div>
        <div>
          <canvas id="graficoMetroSeg" className='graficoMetroSeg' style={{ width: '25rem', height: '12.5rem' }}></canvas>
        </div>
      </div>
    </div>
  );
};
