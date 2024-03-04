import { useEffect, useRef, useState } from "react"

import { sendToBackground } from "@plasmohq/messaging"

import App from "~app"
import AppProviders from "~app-providers"

import "./style.css"

function IndexPopup() {
  const [data, setData] = useState("")

  const iframeRef = useRef<HTMLIFrameElement>(null)

  async function sendMessage() {
    console.log("sendMessage")

    const resp = await sendToBackground({
      name: "ping",
      body: {
        id: 123
      }
    })

    console.log("resp", resp)
  }

  useEffect(() => {
    window.addEventListener("message", (event) => {
      console.log("EVAL output: " + event.data)
    })
  }, [])

  return (
    <AppProviders>
      <div className="container w-96">
        <button onClick={sendMessage}>Test func</button>
        <App />
      </div>
    </AppProviders>
  )
}

export default IndexPopup
