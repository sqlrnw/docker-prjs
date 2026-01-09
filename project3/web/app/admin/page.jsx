export default async function AdminPage() {

  const res = await fetch("http://nginx/api/users", { cache: "no-store" });
  const data = await res.json();

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Admin</h1>
      <p>Fetched through Nginx reverse proxy:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}

