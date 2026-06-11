CREATE TABLE equation_history (
    id UUID PRIMARY KEY,
    user_id UUID NOT NULL,
    equation TEXT NOT NULL,
    result TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL,

    CONSTRAINT fk_equation_history_user
        FOREIGN KEY (user_id)
        REFERENCES users (id)
        ON DELETE CASCADE
);