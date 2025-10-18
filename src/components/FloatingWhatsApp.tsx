type FloatingWhatsAppProps = {
  phone?: string; // e.g. 6281234567890
  message?: string;
};

export default function FloatingWhatsApp({
  phone = "6281234567890",
  message = "Halo! Saya ingin tanya soal cetak.",
}: FloatingWhatsAppProps) {
  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      className="fixed bottom-6 right-6 z-50 rounded-full bg-[#25D366] p-4 shadow-xl transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-6 w-6 text-white"
        fill="currentColor"
        aria-hidden
      >
        <path d="M19.11 17.77c-.27-.13-1.62-.8-1.87-.89-.25-.09-.43-.13-.62.13-.18.27-.71.88-.87 1.05-.16.18-.32.2-.59.07-.27-.13-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.11-.55.11-.11.25-.27.36-.4.12-.13.16-.22.25-.36.08-.13.04-.27-.02-.4-.06-.13-.62-1.5-.85-2.04-.22-.53-.44-.46-.62-.46-.16-.01-.35-.01-.54-.01-.19 0-.49.07-.74.35-.25.27-.97.95-.97 2.32 0 1.37.99 2.7 1.13 2.89.13.18 1.96 2.99 4.74 4.08.66.28 1.18.45 1.59.58.67.21 1.28.18 1.77.11.54-.08 1.62-.66 1.85-1.31.23-.65.23-1.2.16-1.31-.07-.11-.25-.18-.52-.31z"/>
        <path d="M26.62 5.38C23.86 2.62 20.12 1 16 1 7.72 1 1 7.72 1 16c0 2.65.69 5.23 2 7.5L1 31l7.62-2c2.25 1.3 4.83 2 7.38 2 8.28 0 15-6.72 15-15 0-4.12-1.62-7.86-4.38-10.62zM16 28c-2.4 0-4.74-.65-6.78-1.88l-.49-.3-4.51 1.18 1.2-4.39-.32-.52C3.83 19.84 3 17.95 3 16 3 8.83 8.83 3 16 3c3.46 0 6.72 1.35 9.17 3.83C27.65 9.28 29 12.54 29 16c0 7.17-5.83 12-13 12z"/>
      </svg>
    </a>
  );
}

