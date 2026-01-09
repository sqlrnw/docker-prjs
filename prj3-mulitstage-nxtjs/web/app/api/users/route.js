export async function GET() {
  return Response.json({
    users: [
      { id: 1, name: "Mina" },
      { id: 2, name: "Sara" }
    ]
  });
}

