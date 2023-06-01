import { createPool } from 'mysql2/promise';

export const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: 'p3rr1t4g4t1t0',
  port: 3306,
  database: 'companydb'
})