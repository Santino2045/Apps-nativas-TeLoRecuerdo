CREATE TABLE Paciente (id_paciente INT primary key,
id_usuario INT,
nombre VARCHAR(50), 
apellido VARCHAR(50), 
fecha_nacimiento DATE,
contacto_Emergencia VARCHAR(20),
FOREIGN KEY (id_usuario) REFERENCES USUARIO(id_usuario)
);

CREATE TABLE Familiar ( 
id_familiar INT PRIMARY KEY,
id_paciente INT,
id_usuario,
nombre VARCHAR(50), 
Parentesco VARCHAR(50),
contacto VARCHAR(20),
FOREIGN KEY (id_paciente) REFERENCES PACIENTE (id_paciente)
FOREIGN KEY (id_usuario ) REFERENCES USUARIO(id_usuario)
);

CREATE TABLE Usuario ( 
id_usuario INT PRIMARY KEY,
id_paciente INT,
nombre VARCHAR(50), 
fecha_creacion VARCHAR(50),
mail VARCHAR(20),
FOREIGN KEY (id_paciente) REFERENCES PACIENTE(id_paciente)
);

CREATE TABLE Medicamento ( id_medicamento INT PRIMARY KEY,
nombre VARCHAR(50), 
dosis VARCHAR(50),
indicaciones VARCHAR (20),
id_paciente INT, 
FOREIGN KEY (id_paciente) REFERENCES PACIENTE(id_paciente)
);

CREATE TABLE Medico ( id_medico INT PRIMARY KEY,
id_usuario INT,
nombre VARCHAR(50), 
especialidad VARCHAR(50),
Horario_Atencion VARCHAR(20),
FOREIGN KEY (id_usuario ) REFERENCES USUARIO(id_usuario)
);

CREATE TABLE Consulta (id_consulta INT PRIMARY KEY,
id_paciente INT,
id_medico INT,
mensaje VARCHAR(50), 
fecha DATE,
FOREIGN KEY (id_paciente) REFERENCES PACIENTE(id_paciente),
FOREIGN KEY (id_medico) REFERENCES MEDICO(id_medico)
);