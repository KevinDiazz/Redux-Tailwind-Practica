import manzanaImg from "../assets/pngegg (11).png";
import peraImg from "../assets/pngegg (12).png";
import bananaImg from "../assets/pngegg (13).png";
import sandiaImg from "../assets/pngegg (14).png";
import melonImg from "../assets/pngegg (15).png";
function Buttons() {
  return (
    <>
    <div className="flex justify-center my-2 gap-5">
      <button className="flex flex-col justify-center items-center gap-2 w-28 h-20 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-md hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">Manzanas +1<img className="block w-9 mx-2 mb-1" src={manzanaImg}></img></button>
      <button className="flex flex-col justify-center items-center gap-2 w-28 h-20 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-md hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">Peras +1<img className="block w-9 mx-2 mb-1" src={peraImg}></img></button>
      <button className="flex flex-col justify-center items-center gap-2 w-28 h-20 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-md hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">Platanos +1<img className="block w-9 mx-2 mb-3" src={bananaImg}></img></button>
      <button className="flex flex-col justify-center items-center gap-2 w-28 h-20 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-md hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">Sandias +1<img className="block w-9 mx-2 mb-1" src={sandiaImg}></img></button>
      <button className="flex flex-col justify-center items-center gap-2 w-28 h-20 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-md hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">Melón +1<img className="block w-9 mx-2 mb-1" src={melonImg}></img></button>
    </div>
      <div className="flex justify-center my-2 gap-5">
      <button className="flex flex-col justify-center items-center gap-2 w-28 h-20 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-md hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">Manzanas -1<img className="w-9 mx-2 mb-1" src={manzanaImg}></img></button>
      <button className="flex flex-col justify-center items-center gap-2 w-28 h-20 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-md hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">Peras -1<img className="block w-9 mx-2 mb-1" src={peraImg}></img></button>
      <button className="flex flex-col justify-center items-center gap-2 w-28 h-20 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-md hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">Platanos -1<img className="block w-9 mx-2 mb-3" src={bananaImg}></img></button>
      <button className="flex flex-col justify-center items-center gap-2 w-28 h-20 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-md hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">Sandias -1<img className="block w-9 mx-2 mb-1" src={sandiaImg}></img></button>
      <button className="flex flex-col justify-center items-center gap-2 w-28 h-20 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-md hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">Melón -1<img className="block w-9 mx-2 mb-1" src={melonImg}></img></button>
    </div>
    </>
  );
}
export default Buttons;