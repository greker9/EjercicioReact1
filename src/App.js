import './App.css';
import Testimonio from './components/Testimonio'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen los estudiantes de CEUTEC HND:</h1>
        <Testimonio
          imagen='testimonio-emma.png'
          nombre='Emma Bostian'
          pais='Suecia'
          cargo='Ingeniera de software'
          empresa='Spotify'
          testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero la clase de programación web I fue donde aprendí. Estudiar JavaScript, así como estructuras de datos y algoritmos en la clase me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.' />
      

      <h2>Esto es lo que dicen los estudiantes de CEUTEC HND:</h2>
        <Testimonio
          imagen='testimonio-allan.png'
          nombre='Allan Fuentes'
          pais='Cánada'
          cargo='Ingeniero FullStack'
          empresa='Scotian Bank'
          testimonio='CEUTEC me acompañó en momentos cruciales de mi carrera. Desde que ingresé ya estaba en el mercado laboral y esta condición me permitía aprender y fortalecer lo aprendido. Podía debatir con los profesores, adquirir conocimiento valioso para mi desempeño laboral, y aperturarme a nuevas tecnologías.' />
      
      <h2>Esto es lo que dicen los estudiantes de CEUTEC HND:</h2>
        <Testimonio
          imagen='testimonio-linda.png'
          nombre='Linda Polanco'
          pais='Colombia'
          cargo='Diseño Web'
          empresa='Scotian Bank'
          testimonio='Lo que más me gustó de estar en CEUTEC fue el reto de encontrar un lugar donde pudiera desarrollar mis habilidades tanto creativas como administrativas. Cuando terminé la carrera ya era redactora, productora y asistente de la gerente comercial del programa de noticias número uno en el pais donde actualmente vivo”..' />
      
      <h2>Esto es lo que dicen los estudiantes de CEUTEC HND:</h2>
        <Testimonio
          imagen='testimonio-shawn.png'
          nombre='Shawn Rodriguez'
          pais='Japón'
          cargo='Maestria en Logística'
          empresa='Gomsa Logística'
          testimonio='Desde que me gradué me he dedicado al ámbito aduanero, trabajando en empresas grandes como Gomsa Logística. Ahí comencé como documentador de importación dedicado a la captura de pedimentos de importación y trabajando con la importación de tres proyectos de parques solares.' />
      
      <h2>Esto es lo que dicen los estudiantes de CEUTEC HND:</h2>
        <Testimonio
          imagen='testimonio-danna.png'
          nombre='Danna Santamaría'
          pais='Alemania'
          cargo='Ingenieria en redes y telecomunicaciones'
          empresa='Siemens'
          testimonio='Fue una grata experiencia, había que darse tiempo para complementar todo: trabajos, plataforma, tareas, etc. Queda una grata satisfacción que cuando uno se propone darle continuidad a sus estudios nunca es tarde para concluirlos… Aplico lo aprendido en mi trabajo cada día y en espera de continuar escalando puestos y poniendo en práctica mis conocimientos adquiridos.' />

<h2>Esto es lo que dicen los estudiantes de CEUTEC HND:</h2>
        <Testimonio
          imagen='testimonio-sarah.png'
          nombre='Sarah Suazo'
          pais='España'
          cargo='Máster en Mercadotecnia'
          empresa='Moviestar Iberica'
          testimonio='Soy orgullosa egresada de CEUTEC y cada que tengo oportunidad, recomiendo estudiar en CEUTEC por todas las posibilidades y beneficios que brinda… a mi me encantó haber cursado en línea toda la carrera porque me aportó muchas habilidades para ser autodidacta, organizarme mejor y alcanzar mis objetivos, habilidades que hoy en día reconocen en mi trabajo y me han permitido crecer tanto profesional como personalmente.' />



      </div>



    </div>
  );
}

export default App;
