import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';

const dbPath = path.join(process.cwd(), 'database', 'database.db');

if (!fs.existsSync(dbPath)) {
  fs.writeFileSync(dbPath, '');
}

const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    seating INTEGER,
    content TEXT NOT NULL
  );
`);

console.log('Database initialized');

export default db;
