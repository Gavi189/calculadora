// src/core/hooks/useStoreListener.ts
import { useEffect, useState } from "react";
import { Store } from "tinybase";

export const useStoreListener = (store: Store, tableId: string) => {
  const [data, setData] = useState(store.getTable(tableId));

  useEffect(() => {
    const listenerId = store.addTableListener(tableId, () => {
      setData({ ...store.getTable(tableId) });
    });
    return () => {
      store.delListener(listenerId);
    };
  }, [store]);

  return data;
};
