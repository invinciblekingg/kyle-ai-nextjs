import { appendFile, mkdir, readFile } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";

const dataDir = path.join(process.cwd(), "data");
const filePath = path.join(dataDir, "demo-requests.ndjson");

export async function saveDemoRequest(request) {
  await mkdir(dataDir, { recursive: true });
  const saved = {
    id: randomUUID(),
    ...request,
  };

  await appendFile(filePath, `${JSON.stringify(saved)}\n`, "utf8");
  return saved;
}

export async function loadDemoRequests() {
  try {
    const content = await readFile(filePath, "utf8");
    return content
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => JSON.parse(line));
  } catch {
    return [];
  }
}
