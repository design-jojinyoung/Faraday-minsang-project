const { Pool } = require('pg');

// DATABASE_URL이 있으면 사용, 없으면 개별 변수 사용
const pool = new Pool(
  process.env.DATABASE_URL
    ? {
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        }
      }
    : {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
      }
);

pool.on('error', (err) => {
  console.error('Database pool error:', err);
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool,
};
```

---

## 💾 **저장하고 GitHub에 올리기!**

### **Step 1: 저장**
```
Cmd+S
```

### **Step 2: GitHub Desktop**
```
변경사항 확인
→ Summary: "Fix DATABASE_URL connection"
→ Commit
→ Push origin