CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  email VARCHAR(255),
  img TEXT,
  auth_id TEXT
)
