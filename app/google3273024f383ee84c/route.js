export async function GET() {
  return new Response("google-site-verification: google3273024f383ee84c.html", {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
