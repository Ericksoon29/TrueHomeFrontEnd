import React from 'react'
import Pelicula from './images/pelicula1.jpeg';

const Peliculas = () => {

    const peliculas =[
        nombre:"El Gran Gatsby",
        añolanzamiento:"2013",
        calificacion:"10",
        descripcion:"Nos encontramos en la década de los veinte, en Nueva York. Jay Gatsby (Leonardo DiCaprio), es un multimillonario excéntrico que pasa las noches alternando con la alta sociedad, organizando suntuosas fiestas en las que se erige como el centro de todo, mientras que se pasa el día completamente solo, recluído en su mansión de Long Island.",
        actores:"Leonardo DiCaprio, Tobey Maguire, Carey Mulligan",
        director:"Baz Luhrmann",
    ]

    return (
        <div className="container">
          <div className="row">
          {
              peliculas.map((peliculas, index) => (
                  <div key={index} className="cold-md-3">
                    <div>
                      <img src={Pelicula} alt="foto"/>
                      <div className="card-body">
                      <p>{peliculas}</p>
                    </div>
                  </div>
              ))
          }
          </div>
        </div>
    )
}

export default Peliculas
