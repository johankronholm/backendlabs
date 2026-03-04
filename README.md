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
