import React, { useEffect, useState } from 'react';
import { getNotas, createNota } from '../services/notaService';

function App() {
    const [notas, setNotas] = useState([]);

    useEffect(() => {
        loadNotas();
    }, []);

    const loadNotas = async () => {
        const result = await getNotas();
        setNotas(result.data);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newNota = { /* datos del formulario */ };
        await createNota(newNota);
        loadNotas();
    };

    return (
        <div>
            <h1>Sistema de Notas</h1>
            <form onSubmit={handleSubmit}>
                {/* Campos del formulario */}
                <button type="submit">Agregar Nota</button>
            </form>
            <ul>
                {notas.map(nota => (
                    <li key={nota.id}>{nota.estudiante}: {nota.actividades}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;