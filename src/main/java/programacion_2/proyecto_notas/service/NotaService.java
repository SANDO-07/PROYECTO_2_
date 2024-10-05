package programacion_2.proyecto_notas.service;
import programacion_2.proyecto_notas.model.Nota;
import programacion_2.proyecto_notas.repository.NotaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotaService {
    @Autowired
    private NotaRepository notaRepository;

    public List<Nota> findAll() {
        return notaRepository.findAll();
    }

    public Nota save(Nota nota) {
        return notaRepository.save(nota);
    }

    // Otros métodos CRUD según sea necesario
}