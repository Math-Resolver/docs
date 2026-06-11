CREATE TABLE credentials (
    id UUID PRIMARY KEY,
    user_id UUID NOT NULL,
    credential_id TEXT NOT NULL UNIQUE,
    public_key TEXT NOT NULL,

    CONSTRAINT fk_credentials_user
        FOREIGN KEY (user_id)
        REFERENCES users (id)
        ON DELETE CASCADE
);