import { useEffect, useRef, useState } from "react"

import { useAppDispatch } from "~store"
import { addItem } from "~store/slices/sample-slice"

function debounce(func, timeout = 300) {
  let timer

  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, timeout)
  }
}

// function getSelectionText(value) {}
// debounce

const OverlayAnchor = () => {
  const dispatch = useAppDispatch()

  // Make sure to use "useAppSelector" instead of "useSelector" to automatically get the correct types

  const [selectText, setSelectText] = useState("")
  const testAnchorRef = useRef<HTMLDivElement>()
  function onSelectionChange(event: Event) {
    const currentText = document.getSelection().toString()?.trim()
    setSelectText(currentText)
  }

  function onMouseMove(event: MouseEvent) {
    if (!selectText) {
      testAnchorRef.current.style.top = `${event.clientY}px`
      testAnchorRef.current.style.left = `${event.clientX}px`
    }
  }

  function onSelectStart(event: Event) {
    setSelectText("")
  }

  function handleSaveText() {
    dispatch(
      addItem({
        timestamp: Date.now(),
        value: selectText,
        origin: window.location.origin
      })
    )
    setSelectText("")
  }

  const debounceSelect = debounce(onSelectionChange)
  const debounceMouseMove = debounce(onMouseMove, 100)

  useEffect(() => {
    document.addEventListener("selectionchange", debounceSelect)
    document.addEventListener("selectstart", onSelectStart)
    document.addEventListener("mousemove", debounceMouseMove)
    return () => {
      document.removeEventListener("selectionchange", debounceSelect)
      document.removeEventListener("selectstart", onSelectStart)
      document.removeEventListener("mousemove", debounceMouseMove)
    }
  }, [selectText])

  return (
    <div
      ref={testAnchorRef}
      className={`rounded-md bg-slate-600 text-white p-4 fixed ${selectText ? "inline-block" : "hidden"}`}
      id="test-anchor">
      <div className="max-h-60 overflow-y-auto">{selectText}</div>
      <button
        onClick={handleSaveText}
        className="border-white border rounded-sm px-1">
        Save text
      </button>
    </div>
  )
}

export default OverlayAnchor
