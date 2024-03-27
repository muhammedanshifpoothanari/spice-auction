"use client"

import { Provider } from "react-redux";
import { Store } from "../redux/store";

const ReduxProvider = ({children}: any) => {
    return (
      <Provider store={Store}>
         {children} 
      </Provider>
    )
    
}

export default ReduxProvider