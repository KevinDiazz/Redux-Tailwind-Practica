import manzanaImg from "../assets/pngegg (11).png";
import peraImg from "../assets/pngegg (12).png";
import bananaImg from "../assets/pngegg (13).png";
import sandiaImg from "../assets/pngegg (14).png";
import melonImg from "../assets/pngegg (15).png";
function ListFruit() {
  return (
    <ul className="flex flex-col items-center  gap-5 mt-5 text-2xl">
      <li className="w-48 text-end">
        Manzanas <img className="inline w-9 mx-2" src={manzanaImg}></img>0
      </li>
      <li className="w-48 text-end">
        Peras <img className="inline w-9 mx-2" src={peraImg}></img>0
      </li>
      <li className="w-48 text-end">
        Platanos <img className="inline w-9 mx-2" src={bananaImg}></img>0
      </li>
      <li className="w-48 text-end">
        Sandias <img className="inline w-9 mx-2" src={sandiaImg}></img>0
      </li>
      <li className="w-48 text-end">
        Melones <img className="inline w-9 mx-2" src={melonImg}></img>0
      </li>
    </ul>
  );
}
export default ListFruit;
