CREATE TABLE Usuario ( 
    id_usuario INT PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(50),
    fecha_creacion VARCHAR(50),
    mail VARCHAR(50),
    perfil VARCHAR(20) -- ('Paciente', 'Medico' o 'Familiar')
);

CREATE TABLE Paciente (
    id_paciente INT PRIMARY KEY,
    id_usuario INT,
    nombre VARCHAR(50), 
    apellido VARCHAR(50), 
    fecha_nacimiento DATE,
    contacto_Emergencia VARCHAR(20),
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario)
);

CREATE TABLE Familiar ( 
    id_familiar INT PRIMARY KEY,
    id_paciente INT,
    id_usuario INT,
    nombre VARCHAR(50), 
    parentesco VARCHAR(50),
    contacto VARCHAR(20),
    FOREIGN KEY (id_paciente) REFERENCES Paciente(id_paciente),
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario)
);

CREATE TABLE Medicamento ( 
    id_medicamento INT PRIMARY KEY,
    nombre VARCHAR(50), 
    dosis VARCHAR(50),
    indicaciones VARCHAR(100),
    id_paciente INT, 
    FOREIGN KEY (id_paciente) REFERENCES Paciente(id_paciente)
);

CREATE TABLE Medico ( 
    id_medico INT PRIMARY KEY,
    id_usuario INT,
    nombre VARCHAR(50), 
    especialidad VARCHAR(50),
    horario_atencion VARCHAR(50),
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario)
);

CREATE TABLE Consulta (
    id_consulta INT PRIMARY KEY,
    id_paciente INT,
    id_medico INT,
    mensaje VARCHAR(100), 
    fecha DATE,
    FOREIGN KEY (id_paciente) REFERENCES Paciente(id_paciente),
    FOREIGN KEY (id_medico) REFERENCES Medico(id_medico)
);

-- Tabla de productos para compras de medicamentos (usada por el backend)
CREATE TABLE IF NOT EXISTS productos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio NUMERIC(10,2) NOT NULL DEFAULT 0,
    stock INT NOT NULL DEFAULT 0,
    descripcion TEXT
);