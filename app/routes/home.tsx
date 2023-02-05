import { Reorder } from "framer-motion";
import {useState} from "react"
import { Item } from "~/conponents/Item";

export default function Home() {
    const initialItems = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"];
    const [items, setItems] = useState(initialItems);

  return (
    <div className="bg-red-400 h-screen flex justify-center items-center">
     <Reorder.Group axis="y" onReorder={setItems} values={items}>
      {items.map((item) => (
        <Item key={item} item={item} />
      ))}
    </Reorder.Group>
    </div>
  )
}
