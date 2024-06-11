import { ReactElement, ReactNode, createContext, useContext } from "react";
import { Order } from "@/interfaces/Order";
import { listOrders } from "@/lib/fakeData";

const ListOrderContext = createContext<Order[]>([])

type ListOrderContextProps = {
  children: ReactNode
}

export function ListOrderContextProvider({children}: ListOrderContextProps): ReactElement {
  
  return(
    <ListOrderContext.Provider value={listOrders}>
      {children}
    </ListOrderContext.Provider>
  )
}

export function useListOrdersAPI(): Order[] {
  const context = useContext(ListOrderContext)
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context
}