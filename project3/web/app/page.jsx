export default function Home() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Home</h1>
      <ul>
        <li><a href="/admin">Admin</a></li>
        <li><a href="/api/health">Health</a></li>
        <li><a href="/api/users">Users</a></li>
      </ul>
    </main>
  );
}

