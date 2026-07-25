import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#F8F7F3] z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-center">
        {/* Logo Section */}

        {/* Simple Text Navigation */}
        <nav className="flex items-center gap-50 text-sm text-[#8F918F]">
          <Link href="/about">Tentang Kami</Link>
          <Link href="/akademik">Akademik</Link>

          <div className="flex items-center gap-2">
            <Image
              src="/YPIIS logo.svg"
              alt="YPIIS Logo"
              width={40}
              height={40}
            />
          </div>

          <Link href="/pendaftaran">Pendaftaran</Link>
          <Link href="/berita">Berita</Link>
        </nav>
      </div>
    </header>
  );
}
