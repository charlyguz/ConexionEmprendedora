CREATE TABLE socio (
	socio_id serial primary key,
	telefono varchar(10),
	apellido_pat varchar(25),
	apellido_mat varchar(25),
	nombres varchar(50),
	RFC varchar(13),
	direccion varchar(250)
);

CREATE TABLE articulos (
    articulo_id serial primary key,
	estado varchar (50),
	descripcion_estado text,
	año_publicacion integer,
    pais varchar(50),
    nombre_articulo varchar(50),
    resumen text
);

CREATE TABLE prestamos (
    prestamo_id serial primary key,
    fecha_prestamo date,
    fecha_devolucion date,
    fecha_limite date,
    socio_id integer,
    articulo_id integer,
    foreign key (socio_id) references socio(socio_id),
    foreign key (articulo_id) references articulos(articulo_id)
);

CREATE TABLE libros (
    libro_id serial primary key,
    articulo_id serial,
    foreign key (articulo_id) references articulos(articulo_id),
    escritor varchar(50),
    numero_paginas integer
);

CREATE TABLE cd_s (
    cd_id serial primary key,
    articulo_id serial,
    foreign key (articulo_id) references articulos(articulo_id),
    numero_canciones integer,
    interprete varchar(50)
);

CREATE TABLE dvd_s (
    dvd_id serial primary key,
    articulo_id serial,
    foreign key (articulo_id) references articulos(articulo_id),
    minutos_duracion integer,
    director varchar(50)
);