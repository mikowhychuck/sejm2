import sql from 'better-sqlite3';

const db = sql('database/database.db');

try {
  const result = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
  console.log("Tables in DB:", result);
} catch (err) {
  console.error("Error accessing database:", err);
}

export async function getComments(seating: number){
  const stmt = db.prepare(`SELECT * FROM comments WHERE seating = ?`);
  const comments = stmt.all(seating);
  return comments;
}

export async function addComment(seating: number, content: string){
  const stmt = db.prepare(`INSERT INTO comments (seating, content)
    VALUES (?, ?)`);
  return stmt.run(seating, content);
}