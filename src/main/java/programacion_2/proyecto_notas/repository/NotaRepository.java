package programacion_2.proyecto_notas.repository;

import programacion_2.proyecto_notas.model.Nota;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotaRepository extends JpaRepository<Nota, Long> {
}