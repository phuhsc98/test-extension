export default function windowChanger() {
  const funcA = (value: string) => {
    console.log(`Hello from ext: ${value}`)
  }

  // Here's an example where we can reference the window object
  // and add a new property to it
  window.testExt = {
    name: "Text extension",
    funcA
    // you can call other functions from the injected script
    // but they must be declared inside the injected function
    // or be present in the global scope
  }

  // Here's an example where we show you can reference the DOM
  // This console.log will show within the tab you injected into
  // console.log(document.getElementsByTagName("html"))
}
