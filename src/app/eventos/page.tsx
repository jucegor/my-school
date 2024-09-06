// app/eventos/page.tsx
// import { useState, useEffect } from 'react';

export default function Eventos() {
//   const [eventos, setEventos] = useState([]);

//   useEffect(() => {
//     // Simulación de obtener próximos eventos
//     fetch('/api/eventos')
//       .then(res => res.json())
//       .then(data => setEventos(data));
//   }, []);

  return (
    <div>
      <h1>Próximos Eventos</h1>
      <ul>
        {/* {eventos.map((evento, index) => (
          <li key={index}>{evento.nombre} - {evento.fecha}</li>
        ))} */}
      </ul>
    </div>
  );
}
