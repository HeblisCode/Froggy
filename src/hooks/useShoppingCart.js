import { useState, useEffect } from "react";

export default function useShoppingCart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    _clearEmptyItems();
    console.log(items);
  }, [items]);

  const add = (itemId, quantity) => {
    const correctQuantity = quantity === 0 || !quantity ? 0 : quantity;
    if (items.some((item) => item.id === itemId)) {
      setItems(
        items.map((item) => {
          return item.id === itemId
            ? {
                ...item,
                count: item.count + correctQuantity,
              }
            : item;
        })
      );
    } else {
      setItems([...items, { id: itemId, count: correctQuantity }]);
    }
  };

  const remove = (itemId) => {
    if (items.some((item) => item.id === itemId)) {
      setItems(
        items.map((item) => {
          return item.id === itemId ? { ...item, count: item.count - 1 } : item;
        })
      );
    }
  };

  const getCount = (itemId) => {
    const item = items.filter((item) => item.id === itemId);
    console.log(item);

    return item[0] ? item[0].count : 0;
  };

  const removeAll = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  const _clearEmptyItems = () => {
    items.forEach((item) => {
      if (item.count === 0) removeAll(item.id);
    });
  };

  return {
    items,
    getCount,
    add,
    remove,
    removeAll,
  };
}
