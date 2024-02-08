import { asyncValue} from "./redux/slices-redux";
const valuesFruit =()=>(dispatch)=> {
  setTimeout(() => {
    const values={manzana: 0, pera: 0, melon: 0, sandia: 0, platano: 0 };
    dispatch(asyncValue(values))
  }, 2000);
}
export default valuesFruit;
