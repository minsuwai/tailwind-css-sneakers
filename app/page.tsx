import { transform } from "next/dist/build/swc";
import Image from "next/image";

export default function Home() {
  const sneakers = [
    {
      name: "Adidas",
      transform: "scale-110 -rotate-6",
    },
    {
      name: "Nike",
      transform: "scale-75 rotate-6 translate-x-2 translate-y-15",
    },
    {
      name: "Vans",
      transform: "md:scale-110 rotate-6",
    },
    {
      name: "Asics",
      transform: "md:scale-125 translate-y-11",
    },
    {
      name: "Puma",
      transform: "scale-75 -rotate-6 skew-y-6 translate-x-2 translate-y-15",
    },
    {
      name: "Athletic special edition sneaker",
      transform: "scale-75 md::scale-110 -rotate-45",
    },
  ];

  return (
    <main className="py-20 px-10 p-16 m-auto max-w-6xl">
      <h1 className="">Hi Welcome !</h1>
      <h2 className="my-12">The best sneakers in our town.</h2>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-12 my-20 lg:my-32">
        {sneakers.map(({ name, transform }, idx) => {
          return (
            <div
              key={name}
              className={`border-2 border-opacity-50 border-indigo-400 rounded-xl px-5 pt-1 pb-5 m-auto shadow-xl shadow-purple-300 backdrop-blur-sm bg-white/30 ${transform} hover:bg-purple-200 hover:scale-105 hover:duration-500 hover:transition`}
            >
              <div className="my-3">
                <h2 className="truncate w-60">{name}</h2>
              </div>
              <div>
                <Image
                  className="rounded-lg"
                  src={`/images/${idx + 1}.jpg`}
                  width={260}
                  height={160}
                  alt={name}
                />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
