import Image from "next/image";

import AboutImage from "@/public/about.jpg";

export const About = () => {
  return (
    <section
      id={`o-firmie`}
      className={`w-full h-svh min-h-[540px] flex justify-center items-end`}
    >
      <div className={`w-[72rem] h-[90%] px-5 flex gap-24`}>
        <div className={`w-[45%] relative bg-black`}>
          <Image src={AboutImage} alt="" fill objectFit="cover" quality={100} />
        </div>
        <article className={`w-[55%] flex flex-col gap-5 justify-center`}>
          <h1 className={`font-bold text-4xl`}>O firmie</h1>
          <p>
            Mam na imię Mariusz Szustakiewicz. Wszystko zaczęło się od
            młodzieńczej pasji do motoryzacji – już jako nastolatek spędzałem
            godziny w garażu, naprawiając samochody, szukając rozwiązań i ucząc
            się, jak działa technika. To zamiłowanie doprowadziło mnie do
            założenia własnego warsztatu samochodowego, który przez lata zdobył
            zaufanie wielu klientów w Słupcy i okolicach.
            <br />
            <br />
            Z biegiem czasu i rosnącym doświadczeniem postanowiłem pójść o krok
            dalej. Dziś moja firma to nie tylko naprawa aut, ale przede
            wszystkim nowoczesne systemy dla domu i firmy. Specjalizuję się w
            montażu klimatyzacji, pomp ciepła oraz paneli fotowoltaicznych.
            Zawsze zależy mi na tym, by oferować rozwiązania nie tylko
            skuteczne, ale też energooszczędne i dopasowane do realnych potrzeb
            klientów.
            <br />
            <br />
            Niezależnie od tego, czy chodzi o sprawny montaż klimatyzacji,
            wydajną pompę ciepła, instalację paneli słonecznych czy odświeżenie
            klimatyzacji w samochodzie – można na mnie liczyć. Łączę wiedzę
            techniczną z rzetelnym podejściem do pracy i prawdziwą pasją do
            tego, co robię. Każde zlecenie traktuję indywidualnie, bo wiem, że
            zaufanie buduje się poprzez jakość i uczciwość.
          </p>
        </article>
      </div>
    </section>
  );
};
