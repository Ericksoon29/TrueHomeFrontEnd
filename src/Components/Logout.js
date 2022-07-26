import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import "./Logout.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Logout = () => {
  const peliculas = {
    nombre: "",
    añolanzamiento: "",
    calificacion: "",
    descripcion: "",
    actores: "",
    director: "",
  };
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  const recorreArray = arr => arr.forEach(nombre => {
    console.log(nombre);
  });
  const [isFavorite, setIsFavorite] = useState("");
  const handleFav = (e) => {
    e.preventDefault();
    recorreArray(peliculas);
    console.log(recorreArray)
  };
  const handleVistaFav = (e) => {
    e.preventDefault();
    console.log("Vamos a los favoritos")
  };

  return (
    <div>
      <div>
        <Navbar bg="dark" expand="lg">
          <Container>
            <h1 className="title_h1">Bienvenido <span className='user_name'>{user.name}</span></h1>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              </Nav>
            </Navbar.Collapse>
          </Container>
          <div className="logout_title">
            <button className='logout_button' onClick={(e) => handleVistaFav(e)}>
              Ver favoritos
            </button>
            <button className='logout_button' onClick={(e) => handleLogout(e)}>
              Cerrar Sesion
            </button>
          </div>
        </Navbar>
      </div>

      <form onSubmit={(e) => handleFav(e)}>
        <div className="container_peliculas">
          <div className='peliculas_container'> <br /><br />
            <table className='center_table'>
              <thead>
                <tr>
                  <td className="td">
                    <img alt="imagen" src={require('./images/pelicula1.jpeg')} width="200px" />
                  </td>
                  <td className="td">
                    <h6 className="tetxt-grey">Nombre: <span>{peliculas.nombre = "El Gran Gatsby"}</span></h6>
                    <h6 className="tetxt-grey">Año de lanzamiento: <span>{peliculas.añolanzamiento = "2013"}</span></h6>
                    <h6 className="tetxt-grey">Calificacion: <span>{peliculas.calificacion = "10"}</span></h6>
                    <h6 className="tetxt-grey">Descripcion: <span>{peliculas.descripcion = "Nos encontramos en la década de los veinte, en Nueva York. Jay Gatsby (Leonardo DiCaprio), es un multimillonario excéntrico que pasa las noches alternando con la alta sociedad, organizando suntuosas fiestas en las que se erige como el centro de todo, mientras que se pasa el día completamente solo, recluído en su mansión de Long Island."}</span></h6>
                    <h6 className="tetxt-grey">Actores: <span>{peliculas.actores="Leonardo DiCaprio, Tobey Maguire, Carey Mulligan"}</span></h6>
                    <h6 className="tetxt-grey">Director: <span>{peliculas.director="Baz Luhrmann"}</span></h6>
                    <button className="btn btn-success btn-sm" value={isFavorite} onClick={(e) => setIsFavorite(e.target.value)}>Agregar a favoritos</button>
                  </td>

                  <td className="td">
                    <img alt="imagen" src={require('./images/pelicula2.jpg')} width="200px" />
                  </td>
                  <td className="td">
                    <h6 className="tetxt-grey">Nombre: <span>{peliculas.nombre = "Liga de la Justicia"}</span></h6>
                    <h6 className="tetxt-grey">Año de lanzamiento: <span>{peliculas.añolanzamiento="2021"}</span></h6>
                    <h6 className="tetxt-grey">Calificacion: <span>{peliculas.calificacion="10"}</span></h6>
                    <h6 className="tetxt-grey">Descripcion: <span>{peliculas.descripcion="Liga de la Justicia (originalmente en inglés, Justice League) ​es una película estadounidense de superhéroes de 2017, basada en las historietas de DC Comics acerca de la Liga de la Justicia, convirtiéndose en la primera película de este equipo y la quinta producción del Universo extendido de DC."}</span></h6>
                    <h6 className="tetxt-grey">Actores: <span>{peliculas.actores="Ben Affleck, Henry Cavill, Gal Gadot, Jason Momoa."}</span></h6>
                    <h6 className="tetxt-grey">Director: <span>{peliculas.director="Zack Snyder"}</span></h6>
                    <button className="btn btn-success btn-sm" value={isFavorite} onChange={(e) => setIsFavorite(e.target.value)}>Agregar a favoritos</button>
                  </td>
                </tr>
                <tr>
                  <td className="td">
                    <img alt="imagen" src={require('./images/pelicula3.jpg')} width="200px" />
                  </td>
                  <td className="td">
                    <h6 className="tetxt-grey">Nombre: <span>{peliculas.nombre = "MAD MAX"}</span></h6>
                    <h6 className="tetxt-grey">Año de lanzamiento: <span>{peliculas.añolanzamiento="2015"}</span></h6>
                    <h6 className="tetxt-grey">Calificacion: <span>{peliculas.calificacion="8"}</span></h6>
                    <h6 className="tetxt-grey">Descripcion: <span>{peliculas.descripcion="La ley y la sociedad ya no existe en este mundo formado por una páramo desértico, pero sí que hay sangre, fuego y muerte. Sin embargo, hay dos rebeldes que son capaces de restaurar el orden perdido, por un lado está Max, que sigue buscando su propia paz tras la muerte de su mujer y su hijo; y por otro lado está Imperator Furiosa, una misteriosa mujer que trata de sobrevivir en este peligroso viaje hacia su hogar."}</span></h6>
                    <h6 className="tetxt-grey">Actores: <span>{peliculas.actores="Tom Hardy, Charlize Theron, Zoë Kravitz, Nicholas Hoult"}</span></h6>
                    <h6 className="tetxt-grey">Director: <span>{peliculas.director="George Miller"}</span></h6>
                    <button className="btn btn-success btn-sm" value={isFavorite} onChange={(e) => setIsFavorite(e.target.value)}>Agregar a favoritos</button>
                  </td>

                  <td className="td">
                    <img alt="imagen" src={require('./images/pelicula4.jpg')} width="200px" />
                  </td>
                  <td className="td">
                    <h6 className="tetxt-grey">Nombre: <span>{peliculas.nombre = "Avengers"}</span></h6>
                    <h6 className="tetxt-grey">Año de lanzamiento: <span>{peliculas.añolanzamiento="2012"}</span></h6>
                    <h6 className="tetxt-grey">Calificacion: <span>{peliculas.calificacion="10"}</span></h6>
                    <h6 className="tetxt-grey">Descripcion: <span>{peliculas.descripcion="es una película de superhéroes estadounidense de 2012 basada en el equipo de superhéroes homónimo de Marvel Comics, producida por Marvel Studios y distribuida por Walt Disney Studios Motion Pictures, en colaboración con Paramount Pictures."}</span></h6>
                    <h6 className="tetxt-grey">Actores: <span>{peliculas.actores="Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson y Jeremy Renner"}</span></h6>
                    <h6 className="tetxt-grey">Director: <span>{peliculas.director="Joss Whedon"}</span></h6>
                    <button className="btn btn-success btn-sm" value={isFavorite} onChange={(e) => setIsFavorite(e.target.value)}>Agregar a favoritos</button>
                  </td>
                </tr>
                <tr>
                  <td className="td">
                    <img alt="imagen" src={require('./images/pelicula5.jpg')} width="200px" />
                  </td>
                  <td className="td">
                    <h6 className="tetxt-grey">Nombre: <span>{peliculas.nombre = "Una noche en el museo"}</span></h6>
                    <h6 className="tetxt-grey">Año de lanzamiento: <span>{peliculas.añolanzamiento="2006"}</span></h6>
                    <h6 className="tetxt-grey">Calificacion: <span>{peliculas.calificacion="10"}</span></h6>
                    <h6 className="tetxt-grey">Descripcion: <span>{peliculas.descripcion="Noche en el museo Sinopsis Larry Daley (Stiller) es un soñador de buen corazón que se cree destinado al éxito. Cuando acepta un trabajo de guardia de seguridad en un museo, empiezan a ocurrir cosas extraordinarias: gladiadores, guerreros, toda clase de personajes épicos empiezan a cobrar vida."}</span></h6>
                    <h6 className="tetxt-grey">Actores: <span>{peliculas.actores="Ben Stiller como Larry Daley Robin Williams como Theodore Roosevelt Jake Cherry como Nicky Daley, hijo de Larry Dick Van Dyke como Cecil Fredericks"}</span></h6>
                    <h6 className="tetxt-grey">Director: <span>{peliculas.director="Shawn Levy"}</span></h6>
                    <button className="btn btn-success btn-sm" value={isFavorite} onChange={(e) => setIsFavorite(e.target.value)}>Agregar a favoritos</button>
                  </td>

                  <td className="td">
                    <img alt="imagen" src={require('./images/pelicula6.jpg')} width="200px" />
                  </td>
                  <td className="td">
                    <h6 className="tetxt-grey">Nombre: <span>{peliculas.nombre = "Perfectos desconocidos"}</span></h6>
                    <h6 className="tetxt-grey">Año de lanzamiento: <span>{peliculas.añolanzamiento="2018"}</span></h6>
                    <h6 className="tetxt-grey">Calificacion: <span>{peliculas.calificacion="8"}</span></h6>
                    <h6 className="tetxt-grey">Descripcion: <span>{peliculas.descripcion="Varios amigos de toda la vida se reúnen para cenar. Cuando deciden compartir entre ellos el contenido de cada mensaje de texto, correo electrónico y llamada telefónica que reciben, muchos secretos comienzan a develarse y el equilibrio se rompe. Versión mexicana de la exitosa película italiana 'Perfetti sconosciuti' (2016), dirigida por Paolo Genovese."}</span></h6>
                    <h6 className="tetxt-grey">Actores: <span>{peliculas.actores="Cecilia Suárez, Manuel García-Rulfo, Mariana Treviño, Miguel Rodarte, Bruno Bichir, Ana Claudia Talancón, Franky Martín, Camila Valero"}</span></h6>
                    <h6 className="tetxt-grey">Director: <span>{peliculas.director="Manolo Caro"}</span></h6>
                    <button className="btn btn-success btn-sm" value={isFavorite} onChange={(e) => setIsFavorite(e.target.value)}>Agregar a favoritos</button>
                  </td>
                </tr>
                <tr>
                  <td className="td">
                    <img alt="imagen" src={require('./images/pelicula7.jpg')} width="200px" />
                  </td>
                  <td className="td">
                    <h6 className="tetxt-grey">Nombre: <span>{peliculas.nombre = "OUIJA"}</span></h6>
                    <h6 className="tetxt-grey">Año de lanzamiento: <span>{peliculas.añolanzamiento="2016"}</span></h6>
                    <h6 className="tetxt-grey">Calificacion: <span>{peliculas.calificacion="9"}</span></h6>
                    <h6 className="tetxt-grey">Descripcion: <span>{peliculas.descripcion="Cuenta la historia de una madre viuda y sus dos hijas, quienes añaden un nuevo truco para reforzar su estafador negocio de espiritismo, invitando involuntariamente al auténtico demonio a entrar en su casa. Cuando la hija pequeña, es poseída por este espíritu despiadado, la familia se tendrá que enfrentar a sus temores más impensables para poder salvarla."}</span></h6>
                    <h6 className="tetxt-grey">Actores: <span>{peliculas.actores="Annalise Basso, Elizabeth Reaser, Lulu Wilson, Henry Thomas, Kate Siegel, Doug Jones, Lin Shaye, Alexis G. Zall, Sam Anderson, Ele Keats"}</span></h6>
                    <h6 className="tetxt-grey">Director: <span>{peliculas.director="Mike Flanagan"}</span></h6>
                    <button className="btn btn-success btn-sm" value={isFavorite} onChange={(e) => setIsFavorite(e.target.value)}>Agregar a favoritos</button>
                  </td>

                  <td className="td">
                    <img alt="imagen" src={require('./images/pelicula8.jpg')} width="200px" />
                  </td>
                  <td className="td">
                    <h6 className="tetxt-grey">Nombre: <span>{peliculas.nombre = "Yo Frankenstein"}</span></h6>
                    <h6 className="tetxt-grey">Año de lanzamiento: <span>{peliculas.añolanzamiento="2014"}</span></h6>
                    <h6 className="tetxt-grey">Calificacion: <span>{peliculas.calificacion="9"}</span></h6>
                    <h6 className="tetxt-grey">Descripcion: <span>{peliculas.descripcion="Doscientos años después de su estremecedora creación, la criatura del Dr. Frankenstein, Adam, aún camina sobre la tierra. Sin embargo, cuando se ve en medio de una guerra en la que se juega el destino de la humanidad, Adam descubre que tiene la clave que podría destruir la especie humana."}</span></h6>
                    <h6 className="tetxt-grey">Actores: <span>{peliculas.actores="Aaron Eckhart, Bill Nighy, Yvonne Strahovski, Jai Courtney, Miranda Otto, Kevin Grevioux."}</span></h6>
                    <h6 className="tetxt-grey">Director: <span>{peliculas.director="Stuart Beattie"}</span></h6>
                    <button className="btn btn-success btn-sm" value={isFavorite} onChange={(e) => setIsFavorite(e.target.value)}>Agregar a favoritos</button>
                  </td>
                </tr>
                <tr>
                  <td className="td">
                    <img alt="imagen" src={require('./images/pelicula9.jpg')} width="200px" />
                  </td>
                  <td className="td">
                    <h6 className="tetxt-grey">Nombre: <span>{peliculas.nombre = "RED"}</span></h6>
                    <h6 className="tetxt-grey">Año de lanzamiento: <span>{peliculas.añolanzamiento="2022"}</span></h6>
                    <h6 className="tetxt-grey">Calificacion: <span>{peliculas.calificacion="10"}</span></h6>
                    <h6 className="tetxt-grey">Descripcion: <span>{peliculas.descripcion="Mei Lee, una niña de 13 años un poco rara pero segura de sí misma, se debate entre ser la hija obediente que su madre quiere que sea y el caos propio de la adolescencia. Ming, su protectora y ligeramente exigente madre, no se separa nunca de ella lo que es una situación poco deseable para una adolescente."}</span></h6>
                    <h6 className="tetxt-grey">Actores: <span>{peliculas.actores="Animación"}</span></h6>
                    <h6 className="tetxt-grey">Director: <span>{peliculas.director="Domee Shi"}</span></h6>
                    <button className="btn btn-success btn-sm" value={isFavorite} onChange={(e) => setIsFavorite(e.target.value)}>Agregar a favoritos</button>
                  </td>

                  <td className="td">
                    <img alt="imagen" src={require('./images/pelicula10.jpg')} width="200px" />
                  </td>
                  <td className="td">
                    <h6 className="tetxt-grey">Nombre: <span>{peliculas.nombre = "IRON MAN"}</span></h6>
                    <h6 className="tetxt-grey">Año de lanzamiento: <span>{peliculas.añolanzamiento="2008"}</span></h6>
                    <h6 className="tetxt-grey">Calificacion: <span>{peliculas.calificacion="10"}</span></h6>
                    <h6 className="tetxt-grey">Descripcion: <span>{peliculas.descripcion="El multimillonario fabricante de armas Tony Stark (Robert Downey Jr.) debe enfrentarse a su turbio pasado después de sufrir un accidente con una de sus armas. Equipado con una armadura de última generación tecnológica, se convierte en El hombre de hierro, un héroe que se dedica a combatir el mal en todo el mundo. "}</span></h6>
                    <h6 className="tetxt-grey">Actores: <span>{peliculas.actores="Robert Downey Jr., Terrence Howard, Gwyneth Paltrow, Jeff Bridges, Stan Lee, Leslie Bibb"}</span></h6>
                    <h6 className="tetxt-grey">Director: <span>{peliculas.director="Jon Favreau"}</span></h6>
                    <button className="btn btn-success btn-sm" value={isFavorite} onChange={(e) => setIsFavorite(e.target.value)}>Agregar a favoritos</button>
                  </td>
                </tr>
                <tr>
                  <td className="td">
                    <img alt="imagen" src={require('./images/pelicula11.jpg')} width="200px" />
                  </td>
                  <td className="td">
                    <h6 className="tetxt-grey">Nombre: <span>{peliculas.nombre = "Piratas del Caribe"}</span></h6>
                    <h6 className="tetxt-grey">Año de lanzamiento: <span>{peliculas.añolanzamiento="2003"}</span></h6>
                    <h6 className="tetxt-grey">Calificacion: <span>{peliculas.calificacion="10"}</span></h6>
                    <h6 className="tetxt-grey">Descripcion: <span>{peliculas.descripcion="Mar Caribe, siglo XVIII. El aventurero capitán Jack Sparrow piratea en aguas caribeñas, pero su andanzas terminan cuando su enemigo, el Capitán Barbossa, después de robarle su barco, el Perla Negra, ataca la ciudad de Port Royal y secuestra a Elizabeth Swann, la hija del Gobernador. "}</span></h6>
                    <h6 className="tetxt-grey">Actores: <span>{peliculas.actores="Johnny Depp, Orlando Bloom, Keira Knightley, Geoffrey Rush, Jack Davenport, Kevin McNally, Jonathan Pryce"}</span></h6>
                    <h6 className="tetxt-grey">Director: <span>{peliculas.director="Gore Verbinski"}</span></h6>
                    <button className="btn btn-success btn-sm" value={isFavorite} onChange={(e) => setIsFavorite(e.target.value)}>Agregar a favoritos</button>
                  </td>

                  <td className="td">
                    <img alt="imagen" src={require('./images/pelicula12.jpg')} width="200px" />
                  </td>
                  <td className="td">
                    <h6 className="tetxt-grey">Nombre: <span>{peliculas.nombre = "THOR"}</span></h6>
                    <h6 className="tetxt-grey">Año de lanzamiento: <span>{peliculas.añolanzamiento="2013"}</span></h6>
                    <h6 className="tetxt-grey">Calificacion: <span>{peliculas.calificacion="10"}</span></h6>
                    <h6 className="tetxt-grey">Descripcion: <span>{peliculas.descripcion="Thor lucha por restablecer el orden en el cosmos, pero una antigua raza liderada por el vengativo Malekith regresa con el propósito de volver a sumir el universo en la oscuridad. Se trata de un villano con el que ni siquiera Odín y Asgard se atreven a enfrentarse; por esa razón, Thor tendrá que emprender un viaje muy peligroso, durante el cual se reunirá con Jane Foster y la obligará a sacrificarlo todo para salvar el mundo."}</span></h6>
                    <h6 className="tetxt-grey">Actores: <span>{peliculas.actores="Chris Hemsworth, Natalie Portman, Tom Hiddleston, Anthony Hopkins, Christopher Eccleston, Kat Dennings"}</span></h6>
                    <h6 className="tetxt-grey">Director: <span>{peliculas.director="Alan Taylor"}</span></h6>
                    <button className="btn btn-success btn-sm" value={isFavorite} onChange={(e) => setIsFavorite(e.target.value)}>Agregar a favoritos</button>
                  </td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </form>
    </div>

  );
};

