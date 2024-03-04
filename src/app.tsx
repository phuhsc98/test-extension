import { useEffect } from "react"

import { useAppDispatch, useAppSelector } from "~store"
import { removeItem, type IText } from "~store/slices/sample-slice"

type Props = {}

function SaveItem({
  data,
  order,
  onRemove
}: {
  data: IText
  order: number
  onRemove?: (item: IText) => void
}) {
  function handleRemove() {
    onRemove(data)
  }
  return (
    <div className="p-1">
      <div>
        {order} - {new Date(data.timestamp).toLocaleString()}
        <button className="ml-2 text-red-500" onClick={handleRemove}>
          Remove
        </button>
      </div>
      <div>From: {data.origin}</div>
      <div className="text-xs border-l-2 border-l-black pl-2">{data.value}</div>
    </div>
  )
}

function App({}: Props) {
  const dispatch = useAppDispatch()
  const saveList = useAppSelector((store) => store.sample.saveList)

  function handleRemoveItem(item: IText) {
    dispatch(removeItem(item))
  }

  useEffect(() => {}, [])

  return (
    <div className="container px-2 py-5 rounded-xl ">
      {!saveList.length && <div>No item</div>}
      {saveList.map((item, index) => (
        <SaveItem
          key={item.timestamp}
          order={index + 1}
          data={item}
          onRemove={handleRemoveItem}
        />
      ))}
    </div>
  )
}

export default App
