import Image from "next/image";
import img1 from "@/asstes/1.jpeg";
import img2 from "@/asstes/2.jpeg";
import img3 from "@/asstes/3.jpeg";
import img4 from "@/asstes/4.jpeg";
import img5 from "@/asstes/5.jpeg";
import img6 from "@/asstes/6.jpeg";
import img7 from "@/asstes/7.jpeg";
import img8 from "@/asstes/8.jpeg";
import img9 from "@/asstes/9.jpeg";

export default function PortfolioGrid() {
  const items = [
    { id: 1, title: "Galery 1", img: img1 },
    { id: 2, title: "Galery 2", img: img2 },
    { id: 3, title: "Galery 3", img: img3 },
    { id: 4, title: "Galery 4", img: img4 },
    { id: 5, title: "Galery 5", img: img5 },
    { id: 6, title: "Galery 6", img: img6 },
    { id: 7, title: "Galery 7", img: img7 },
    { id: 8, title: "Galery 8", img: img8 },
    { id: 9, title: "Galery 9", img: img9 },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3">
      {items.map((it) => (
        <figure
          key={it.id}
          className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur ring-1 ring-black/5 shadow-sm transition hover:shadow-lg"
        >
          <div className="relative h-40 sm:h-48 md:h-56 w-full">
            <Image
              src={it.img}
              alt={it.title}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03] group-hover:rotate-[0.25deg]"
              priority={it.id <= 3}
            />
          </div>
          <figcaption className="absolute left-2 bottom-2 sm:left-3 sm:bottom-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 text-gray-900 px-3 py-1.5 text-xs sm:text-sm font-medium shadow-sm ring-1 ring-black/5 backdrop-blur transition-transform group-hover:-translate-y-0.5">
              {it.title}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
