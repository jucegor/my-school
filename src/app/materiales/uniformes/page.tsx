// app/materiales/uniformes/page.tsx
// import { useState, useEffect } from 'react';

export default function Uniformes() {
//   const [uniformes, setUniformes] = useState([]);

//   useEffect(() => {
//     // Simulación de obtener lista de uniformes
//     fetch('/api/materiales/uniformes')
//       .then(res => res.json())
//       .then(data => setUniformes(data));
//   }, []);

  return (
    <div>
      <h1>Uniformes</h1>
      <ul>
        {/* {uniformes.map((uniforme, index) => (
          <li key={index}>{uniforme.nombre} - {uniforme.precio}</li>
        ))} */}
      </ul>
    </div>
  );
}
