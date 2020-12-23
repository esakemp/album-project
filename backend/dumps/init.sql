CREATE TABLE bands (
    id         integer PRIMARY KEY,
    band_name       varchar NOT NULL,
    resource_url    varchar NOT NULL,
    created_at      timestamp DEFAULT current_timestamp,
    updated_at      timestamp DEFAULT current_timestamp
);

CREATE TABLE albums (
    id        integer PRIMARY KEY,
    title           varchar NOT NULL,
    date_added      timestamp,
    year            integer,
    resource_url    varchar NOT NULL,
    created_at      timestamp DEFAULT current_timestamp,
    updated_at      timestamp DEFAULT current_timestamp
);

CREATE TABLE albumartists (
    id          SERIAL PRIMARY KEY,
    album_id    integer,
    band_id     integer,
    created_at  timestamp DEFAULT current_timestamp,
    updated_at  timestamp DEFAULT current_timestamp,
    CONSTRAINT fk_album_id
        FOREIGN KEY(album_id) 
	        REFERENCES albums(id),
    CONSTRAINT fk_band_id
        FOREIGN KEY(band_id) 
	        REFERENCES bands(id)
);