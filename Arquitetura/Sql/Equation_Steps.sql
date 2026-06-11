CREATE TABLE equation_steps (
    id UUID PRIMARY KEY,
    history_id UUID NOT NULL,
    step_order INT NOT NULL,
    step_description TEXT NOT NULL,
    before_expression TEXT NOT NULL,
    after_expression TEXT NOT NULL,

    CONSTRAINT fk_equation_steps_history
        FOREIGN KEY (history_id)
        REFERENCES equation_history (id)
        ON DELETE CASCADE,

    CONSTRAINT uq_equation_steps_order
        UNIQUE (history_id, step_order)
);