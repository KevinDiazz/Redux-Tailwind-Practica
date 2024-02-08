import manzanaImg from "../assets/pngegg (11).png";
import peraImg from "../assets/pngegg (12).png";
import bananaImg from "../assets/pngegg (13).png";
import sandiaImg from "../assets/pngegg (14).png";
import melonImg from "../assets/pngegg (15).png";
import { useSelector } from "react-redux";
function ListFruit() {
  const frutaCounter = useSelector((state) => state.fruta);
  return (
    <ul className="flex flex-col items-center  gap-5 mt-5 text-2xl">
      <li className="w-56 text-end">
        Manzanas <img className="inline w-9 mx-2" src={manzanaImg}></img>
        {frutaCounter.manzana}
      </li>
      <li className="w-56 text-end">
        Peras <img className="inline w-9 mx-2" src={peraImg}></img>
        {frutaCounter.pera}
      </li>
      <li className="w-56 text-end">
        Platanos <img className="inline w-9 mx-2" src={bananaImg}></img>
        {frutaCounter.platano}
      </li>
      <li className="w-56 text-end">
        Sandias <img className="inline w-9 mx-2" src={sandiaImg}></img>
        {frutaCounter.sandia}
      </li>
      <li className="w-56 text-end">
        Melones <img className="inline w-9 mx-2" src={melonImg}></img>
        {frutaCounter.melon}
      </li>
    </ul>
  );
}
export default ListFruit;
