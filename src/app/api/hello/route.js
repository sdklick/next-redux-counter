export async function GET(request) {
  return new Response(
    JSON.stringify({ message: "Hello from App Router API!" }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
