INSERT INTO Estudiantes (id, nombre, apellido, correo)
VALUES (1, 'Leonel', 'Messi', 'leo.messi@email.com');

INSERT INTO Estudiantes (id, nombre, apellido, correo)
VALUES (2, 'Ricardo', 'Arjona', 'r.arjona@email.com');

INSERT INTO Estudiantes (id, nombre, apellido, correo)
VALUES (3, 'Carlos', 'Sandoval', 'carlos.sandoval@email.com');


SELECT * FROM Estudiantes;

INSERT INTO Notas (id, id_estudiante, carrera, curso, actividades, primer_parcial, segundo_parcial, examen_final, nota_final)
VALUES (1, 1, 'Ingeniería', 'Matemáticas', 85.5, 90.0, 88.0, 92.0, 
       (85.5 + 90.0 + 88.0) / 3);
       
       
SELECT Estudiantes.id, Estudiantes.nombre, Estudiantes.apellido, Estudiantes.correo,
       Notas.carrera, Notas.curso, Notas.actividades, Notas.primer_parcial, Notas.segundo_parcial, 
       Notas.examen_final, Notas.nota_final
FROM Estudiantes
INNER JOIN Notas ON Estudiantes.id = Notas.id_estudiante;



