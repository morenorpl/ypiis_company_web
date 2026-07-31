"use client";

export default function PetaLokasiSection() {
  // Google Maps embed URL for the address in Tanjung Redeb, Berau
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.24357753738!2d117.4851234!3d2.1558238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x320df5bdc8d3bc45%3A0x6fb837c72f778788!2sJl.%20Pulau%20Panjang%2C%20Tj.%20Redeb%2C%20Kec.%20Tj.%20Redeb%2C%20Kabupaten%20Berau%2C%20Kalimantan%20Timur!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid";

  return (
    <section className="py-12 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Outer Container with Maroon Border */}
        <div className="relative w-full sm:h-145 rounded-sm border-4 border-[#7C3131] overflow-hidden shadow-md">
          {/* Embedded Interactive Google Map */}
          <iframe
            title="Lokasi YPIIS Berau"
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale-[20%] contrast-[105%]"
          />

          {/* Overlaid Floating Info Box at Bottom Center */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 w-[92%] sm:w-[85%] max-w-3xl bg-[#F9F6EE] border-2 border-[#7C3131] rounded-2xl p-4 sm:p-6 shadow-xl z-10 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10  text-xs sm:text-sm">
              {/* Column 1: Alamat */}
              <div className="flex flex-col gap-1">
                <h4 className="font-bold text-[#7C3131] text-sm">Alamat</h4>
                <p className="text-[#552323] leading-relaxed font-medium">
                  Jl. Pulau Panjang Gg. Karomah No.RT 23, Tj. Redeb, Kec. Tj.
                  Redeb, Kabupaten Berau, Kalimantan Timur 77311
                </p>
              </div>

              {/* Column 2: Social Media */}
              <div className="flex flex-col gap-3">
                <div>
                  <h4 className="font-bold text-[#7C3131] text-sm">Facebook</h4>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#552323] hover:underline font-medium"
                  >
                    YPIIS Berau
                  </a>
                </div>

                <div>
                  <h4 className="font-bold text-[#7C3131] text-sm">
                    X(Twitter)
                  </h4>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#552323] hover:underline font-medium"
                  >
                    Yay Imam Syafi'i
                  </a>
                </div>
              </div>

              {/* Column 3: Contact Info */}
              <div className="flex flex-col gap-3">
                <div>
                  <h4 className="font-bold text-[#7C3131] text-sm">Email</h4>
                  <a
                    href="mailto:info@ypiis.com"
                    className="text-[#552323] hover:underline font-medium"
                  >
                    info@ypiis.com
                  </a>
                </div>

                <div>
                  <h4 className="font-bold text-[#7C3131] text-sm">Telp.</h4>
                  <p className="text-[#552323] font-medium">
                    08115405834{" "}
                    <span className="text-[#7C3131]/80 text-xs">
                      (Hanya SMS)
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
