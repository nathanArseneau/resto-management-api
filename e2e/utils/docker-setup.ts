import compose from "docker-compose";
import path from "path";

function sleep(duration: number): Promise<void> {
  return new Promise((r) => setTimeout(r, duration));
}

export async function startDockerCompose(): Promise<void> {
  await compose.upAll({
    cwd: path.join(__dirname),
    log: true,
  });
  await sleep(5000);
}

export async function stopDockerCompose(): Promise<void> {
  await sleep(5000);
  await compose.down();
}
