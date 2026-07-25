import Image from "next/image";
import Link from "next/link";

// 1. Clean data structures for links
const QUICK_LINKS = [
  { name: "Tentang Kami", href: "/tentang-kami" },
  { name: "Akademik", href: "/akademik" },
  { name: "Berita & Artikel", href: "/berita" },
  { name: "Galeri", href: "/galeri" },
];

const PROGRAM_LINKS = [
  { name: "Sekolah Dasar (SD)", href: "/program/sd" },
  { name: "Sekolah Menengah (SMP)", href: "/program/smp" },
  { name: "Pendaftaran", href: "/pendaftaran" },
  { name: "Donasi", href: "/donasi" },
];

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-[#8C2C2C] text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          {/* Main Footer Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/20">
            {/* Column 1: Brand & Logo */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-full w-12 h-12 flex items-center justify-center">
                  <Image
                    src="/YPIIS logo.svg"
                    alt="YPIIS Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight uppercase tracking-wider">
                    Yayasan Pendidikan
                    <br />
                    Islam Imam Syafi'i
                  </h3>
                </div>
              </div>
              <p className="text-xs text-white/80 max-w-sm leading-relaxed">
                Membentuk generasi Rabbani yang berakhlaqul karimah, cerdas, dan
                mandiri berdasarkan Al-Qur'an dan Sunnah.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm tracking-wide text-amber-200 uppercase">
                Navigasi
              </h4>
              <ul className="space-y-2 text-xs text-white/80">
                {QUICK_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-amber-200 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Programs & Info */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm tracking-wide text-amber-200 uppercase">
                Program & Informasi
              </h4>
              <ul className="space-y-2 text-xs text-white/80">
                {PROGRAM_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-amber-200 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Copyright bar */}
          <div className="pt-6 text-center text-xs text-white/60 flex flex-col sm:flex-row justify-between items-center gap-2">
            <p>
              © {new Date().getFullYear()} Yayasan Pendidikan Islam Imam
              Syafi'i. All rights reserved.
            </p>
            <p className="text-[10px]">Designed & Developed for YPIIS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
