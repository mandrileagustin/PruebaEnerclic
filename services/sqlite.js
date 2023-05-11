import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./enerclic.db");

export default db;
