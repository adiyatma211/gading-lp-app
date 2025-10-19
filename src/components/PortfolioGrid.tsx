export default function PortfolioGrid() {
  const items = [
    { id: 1, title: "Banner Event", img: "https://picsum.photos/seed/portfolio1/800/600" },
    { id: 2, title: "MMT Booth", img: "https://picsum.photos/seed/portfolio2/800/600" },
    { id: 3, title: "Pin Komunitas", img: "https://picsum.photos/seed/portfolio3/800/600" },
    { id: 4, title: "Poster A2", img: "https://picsum.photos/seed/portfolio4/800/600" },
    { id: 5, title: "X-Banner Promo", img: "https://picsum.photos/seed/portfolio5/800/600" },
    { id: 6, title: "Stiker Vinyl", img: "https://picsum.photos/seed/portfolio6/800/600" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3">
      {items.map((it) => (
        <figure key={it.id} className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur ring-1 ring-black/5 shadow-sm transition hover:shadow-lg">
          <img
            src={it.img}
            alt={it.title}
            loading="lazy"
            className="h-40 sm:h-48 md:h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] group-hover:rotate-[0.25deg]"
          />
          <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 group-hover:translate-y-0 transition p-3">
            <div className="rounded-md bg-gradient-to-t from-black/60 to-black/10 text-white px-3 py-2 text-xs font-medium backdrop-blur-sm ring-1 ring-white/10">
              {it.title}
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

