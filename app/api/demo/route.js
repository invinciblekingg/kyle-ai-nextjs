import { z } from "zod";
import { saveDemoRequest } from "../../../lib/demo-store";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required"),
  email: z.string().trim().email("A valid email is required"),
  company: z.string().trim().min(2, "Company is required"),
  goal: z.string().trim().min(8, "Tell us a little more about your goal"),
});

export async function POST(request) {
  let payload;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ ok: false, message: "Invalid JSON payload." }, { status: 400 });
  }

  const result = schema.safeParse(payload);

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    return Response.json(
      { ok: false, message: "Please check the form and try again.", errors },
      { status: 400 }
    );
  }

  const saved = await saveDemoRequest({
    ...result.data,
    createdAt: new Date().toISOString(),
  });

  return Response.json({
    ok: true,
    message: "Your demo request was received.",
    request: saved,
  });
}
