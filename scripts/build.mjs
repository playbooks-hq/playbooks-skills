import { copyFile, cp, mkdir, readdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

process.chdir(fileURLToPath(new URL('../', import.meta.url)))
for (const name of await readdir('src/skills')) {
  const destination = `skills/${name}`
  await mkdir(destination, { recursive: true })
  await copyFile(`src/skills/${name}/instructions.md`, `${destination}/SKILL.md`)
  await cp('src/shared', `${destination}/references`, { recursive: true })
}
