# Install dependencies

From the project root, run:

```bash
npm install
```

# MariaDB setup

Use this SQL in MariaDB to create the `tasks` table and insert the requested entries.

```sql
DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks (
  id INT(11) NOT NULL AUTO_INCREMENT,
  description VARCHAR(50) NOT NULL,
  completed TINYINT(1) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO tasks (id, description, completed) VALUES
  (1, 'Buy milk', 1),
  (2, 'Do dishes', 0),
  (3, 'Mow the lawn', 0),
  (4, 'Study', 1);
```

Optional checks:

```sql
DESCRIBE tasks;
SELECT * FROM tasks;
```

# Environment credentials (`.env`)

Create a `.env` file in the project root (same folder as `app.js`) and provide your MariaDB credentials:

```env
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_SCHEMA=your_database_name
PORT=3000
```

Notes:
- `DB_HOST`, `DB_USER`, `DB_PASSWORD`, and `DB_SCHEMA` are required.
- `PORT` is optional (defaults to `3000` if not set).
