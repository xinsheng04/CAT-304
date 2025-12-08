// import { createPool } from '../config.js';
import { supabase } from "./supabase.js";

// const pool = await createPool();

/*
Example controller function
document your request queries and body like so:
query:
?email=userEmail
body:
{
  assetLiability: {
    title: string,
    value: number,
    description: string,
    date: string,
    type: "asset" | "liability",
    category: "current" | "fixed",
  }
}
*/

/*
export async function exampleController(req, res) {
  try {
    const [rows] = await pool.query('SELECT * FROM ExampleTable'); // Replace with your table
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
*/

// Example supabase usage

app.get("/projects", async (req, res) => {
  const { data, error } = await supabase
    .from("projects")
    .select("*");

  if (error) return res.status(500).json({ error });

  res.json(data);
});
