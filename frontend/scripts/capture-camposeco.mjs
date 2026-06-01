import { spawn } from "node:child_process"
import { mkdir, rm, writeFile } from "node:fs/promises"
import { join } from "node:path"

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
const baseUrl = "http://localhost:3010"
const artifactsDir = join(process.cwd(), "test-artifacts", "screenshots")
const userDataDir = join(process.cwd(), "test-artifacts", "chrome-capture-profile")
const remotePort = 9333

const routes = [
  ["01-acceso-pin.png", "/acceso"],
  ["02-home.png", "/"],
  ["03-proyecto.png", "/proyecto"],
  ["04-investigacion.png", "/investigacion"],
  ["05-portal-login.png", "/portal"],
  ["06-portal-observador-locked.png", "/portal/observador"],
]

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function waitForChrome() {
  for (let i = 0; i < 40; i += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${remotePort}/json/version`)
      if (response.ok) return
    } catch {}
    await delay(250)
  }
  throw new Error("Chrome remote debugging did not become available.")
}

async function createTab() {
  const response = await fetch(`http://127.0.0.1:${remotePort}/json/new?about:blank`, {
    method: "PUT",
  })
  if (!response.ok) throw new Error(`Could not create tab: ${response.status}`)
  return response.json()
}

function connectCdp(webSocketDebuggerUrl) {
  const socket = new WebSocket(webSocketDebuggerUrl)
  let id = 0
  const pending = new Map()

  socket.addEventListener("message", event => {
    const message = JSON.parse(event.data)
    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id)
      pending.delete(message.id)
      if (message.error) reject(new Error(message.error.message))
      else resolve(message.result)
    }
  })

  return new Promise((resolve, reject) => {
    socket.addEventListener("open", () => {
      resolve({
        send(method, params = {}) {
          id += 1
          socket.send(JSON.stringify({ id, method, params }))
          return new Promise((commandResolve, commandReject) => {
            pending.set(id, { resolve: commandResolve, reject: commandReject })
          })
        },
        close() {
          socket.close()
        },
      })
    })
    socket.addEventListener("error", reject)
  })
}

async function capture(client, fileName, path, withCookie) {
  await client.send("Page.enable")
  await client.send("Network.enable")
  if (withCookie) {
    await client.send("Network.setCookie", {
      name: "camposeco_access",
      value: "2026",
      domain: "localhost",
      path: "/",
      url: baseUrl,
    })
  }
  await client.send("Emulation.setDeviceMetricsOverride", {
    width: 1440,
    height: 1000,
    deviceScaleFactor: 1,
    mobile: false,
  })
  await client.send("Page.navigate", { url: `${baseUrl}${path}` })
  await delay(2500)
  const screenshot = await client.send("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: false,
  })
  await writeFile(join(artifactsDir, fileName), Buffer.from(screenshot.data, "base64"))
}

await mkdir(artifactsDir, { recursive: true })
await rm(userDataDir, { recursive: true, force: true })

const chrome = spawn(chromePath, [
  "--headless=new",
  `--remote-debugging-port=${remotePort}`,
  `--user-data-dir=${userDataDir}`,
  "--disable-gpu",
  "--no-first-run",
  "--window-size=1440,1000",
  "about:blank",
])

try {
  await waitForChrome()
  const tab = await createTab()
  const client = await connectCdp(tab.webSocketDebuggerUrl)
  for (const [fileName, route] of routes) {
    await capture(client, fileName, route, route !== "/acceso")
  }
  client.close()
} finally {
  chrome.kill()
}

console.log(`Screenshots saved to ${artifactsDir}`)
