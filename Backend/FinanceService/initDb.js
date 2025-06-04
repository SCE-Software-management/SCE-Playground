// Import the database connection pool
const pool = require('./src/data-access/db');

// Create all the tables in the database
const createTables = async () => {
  try {
    await pool.query(`

      -- Table to store invoices issued to customers
      CREATE TABLE IF NOT EXISTS invoices (
        id SERIAL PRIMARY KEY,                       -- unique ID for each invoice
        customer VARCHAR(100) NOT NULL,              -- customer's name
        amount NUMERIC(10, 2) NOT NULL,              -- amount to pay
        date DATE DEFAULT CURRENT_DATE,              -- invoice date
        transaction_id INTEGER                       -- optional: related transaction
      );

      -- Table to store financial transactions
      CREATE TABLE IF NOT EXISTS transactions (
        id SERIAL PRIMARY KEY,                       -- unique ID for each transaction
        status VARCHAR(20) NOT NULL,                 -- status: pending/paid/failed
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- when it was created
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- last update
        amount NUMERIC(10, 2),                       -- transaction amount
        customer VARCHAR(100)                        -- customer's name
      );

      -- Table to store receipts sent to customers
      CREATE TABLE IF NOT EXISTS receipts (
        id SERIAL PRIMARY KEY,                       -- unique ID for each receipt
        customer VARCHAR(100),                       -- customer's name
        transaction_id INTEGER,                      -- related transaction ID
        email VARCHAR(100),                          -- email to send the receipt
        amount NUMERIC(10, 2),                       -- receipt amount
        sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- when it was sent
      );

      -- Table to store monthly financial reports
      CREATE TABLE IF NOT EXISTS monthly_reports (
        id SERIAL PRIMARY KEY,                       -- unique ID for the report
        month VARCHAR(2),                            -- e.g., "04"
        year VARCHAR(4),                             -- e.g., "2025"
        total_transactions INTEGER,                  -- number of transactions
        total_amount NUMERIC(10, 2),                 -- total money processed
        generated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- when report was created
      );

      -- Table to store a general overview of financial status
      CREATE TABLE IF NOT EXISTS overview_reports (
        id SERIAL PRIMARY KEY,
        total_income NUMERIC(10, 2),                 -- total income amount
        total_expenses NUMERIC(10, 2),               -- total expenses amount
        net_profit NUMERIC(10, 2),                   -- income - expenses
        generated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      -- Table to track live income/expenses for real-time monitoring
      CREATE TABLE IF NOT EXISTS live_tracking (
        id SERIAL PRIMARY KEY,
        type VARCHAR(20),                            -- "income" or "expense"
        amount NUMERIC(10, 2),                       -- value of the transaction
        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        source TEXT                                  -- optional description
      );

    `);

    console.log("All tables created successfully on Render DB!");
    process.exit();
  } catch (err) {
    console.error("Error creating tables:", err);
    process.exit(1);
  }
};

// Run the table creation function
createTables();
