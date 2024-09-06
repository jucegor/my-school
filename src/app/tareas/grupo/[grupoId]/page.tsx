'use client'
// app/tareas/grupo/[grupoId]/page.tsx
import { useParams } from 'next/navigation';

//visualizar tareas por grupo

export default function TareasPorGrupo() {
    const { grupoId } = useParams();

    // const [tareas, setTareas] = useState([]);

    // useEffect(() => {
    //     // Simulación de obtener tareas por grupo
    //     if (grupoId) {
    //         fetch(`/api/tareas?grupoId=${grupoId}`)
    //             .then(res => res.json())
    //             .then(data => setTareas(data));
    //     }
    // }, [grupoId]);

    return (
        <div>
            <h1>Tareas del grupo {grupoId}</h1>
            {/* <ul>
                {tareas.map((tarea, index) => (
                    <li key={index}>{tarea.nombre}</li>
                ))}
            </ul> */}
        </div>
    );
}
