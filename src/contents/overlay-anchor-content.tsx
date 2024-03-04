import cssText from "data-text:~style.css"
import type { PlasmoCSConfig, PlasmoCSUIProps } from "plasmo"

import AppProviders from "~app-providers"
import OverlayAnchor from "~components/overlay-anchor"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

// export const getOverlayAnchor: PlasmoGetOverlayAnchor = async () =>
//   document.querySelector(`body`)

// function getSelectionText(value) {}
// debounce

const OverlayAnchorContent = ({ anchor }: PlasmoCSUIProps) => {
  return (
    <AppProviders>
      <OverlayAnchor />
    </AppProviders>
  )
}

export default OverlayAnchorContent
