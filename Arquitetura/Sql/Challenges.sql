CREATE TABLE challenges (
    id UUID PRIMARY KEY,
    challenge TEXT NOT NULL UNIQUE,
    user_id UUID NOT NULL,
    rp_id VARCHAR(255) NOT NULL,
    rp_name VARCHAR(255) NOT NULL,
    expiration_date TIMESTAMP NOT NULL,

    CONSTRAINT fk_challenges_user
        FOREIGN KEY (user_id)
        REFERENCES users (id)
        ON DELETE CASCADE
);