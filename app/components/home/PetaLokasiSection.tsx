"use client";

import FadeIn from "../animation/FadeIn";

export default function PetaLokasiSection() {
  // Google Maps embed URL for the address in Tanjung Redeb, Berau
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.24357753738!2d117.4851234!3d2.1558238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x320df5bdc8d3bc45%3A0x6fb837c72f778788!2sJl.%20Pulau%20Panjang%2C%20Tj.%20Redeb%2C%20Kec.%20Tj.%20Redeb%2C%20Kabupaten%20Berau%2C%20Kalimantan%20Timur!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid";

  return (
    <section className="py-6 bg-[#FAF8F5]">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 2xl:px-8">
        {/* Outer Container with Maroon Border */}
        <FadeIn delay={0.2} duration={1} y={50} once={true}>
          <div className="relative w-full h-130 2xl:h-145 rounded-sm border-4 border-[#7C3131] overflow-hidden shadow-md">
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
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
