export function GET() {
  return Response.json({
    status: "ok",
    service: "Kyle.ai Next backend",
    timestamp: new Date().toISOString(),
  });
}
