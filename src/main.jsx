import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import UserDefinedFunction1 from './funct_exer/func_comp1'
//import Test1 from './funct_exer/func_comp2'
//import CancelRequest from './funct_exer/func_comp3'
//import Test2 from './funct_exer/func_comp6'
import ReducerExmp from './funct_exer/func_comp7'
import ReducerDependency from './funct_exer/func_comp8'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ReducerDependency />
  </StrictMode>,
);
