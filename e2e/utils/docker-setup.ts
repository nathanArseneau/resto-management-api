import compose from "docker-compose";
import path from "path";

function sleep(duration: number): Promise<void> {
  return new Promise((r) => setTimeout(r, duration));
}

export async function startDockerCompose(): Promise<void> {
  if (!process.env.CI) return;

  await compose.upAll({
    cwd: path.join(__dirname),
    log: true,
  });
  await sleep(45_000);
}

export async function stopDockerCompose(): Promise<void> {
  if (!process.env.CI) return;

  await sleep(5000);
  await compose.down();
}
