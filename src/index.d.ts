interface ITestExt {
  name: string
  funcA: (value: string) => void
}
interface Window {
  testExt: ITestExt
}
