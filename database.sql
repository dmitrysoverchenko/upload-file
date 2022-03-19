create TABLE file (
    id SERIAL PRIMARY KEY,
    filename VARCHAR(255),
    extension VARCHAR(255),
    upload_date BIGINT
);