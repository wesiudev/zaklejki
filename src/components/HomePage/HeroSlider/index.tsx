"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaRightLong } from "react-icons/fa6";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [userInteraction, setUserInteraction] = useState(false);

  useEffect(() => {
    let timeoutId: any;

    const handleTimeout = () => {
      if (currentSlide <= 4) {
        setCurrentSlide(currentSlide + 1);
      } else {
        setCurrentSlide(0);
      }
    };

    if (!userInteraction) {
      timeoutId = setTimeout(handleTimeout, 5000);
    }

    return () => {
      // Cleanup function to clear the timeout when the component unmounts or when user interacts
      clearTimeout(timeoutId);
    };
  }, [currentSlide, userInteraction]);

  return (
    <div
      className={`relative w-full h-[50vh] overflow-hidden rounded-2xl lg:border-2 lg:border-[#F87FF0] drop-shadow-xl shadow-black`}
    >
      {[
        {
          id: 0,
          text: "Unikalne naklejki!",
          link: {
            href: "/sklep-z-naklejkami",
            title: "Otwórz sklep",
            Icon: <FaRightLong className="ml-2" />,
          },
          description:
            "Każda z naszych naklejek to unikalny wzór, niepowtarzalny w swoim rodzaju. W naszej bogatej kolekcji, obejmującej ponad 2000 różnorodnych naklejek, z pewnością znajdziesz coś idealnego dla siebie!",
        },
        {
          id: 1,
          text: "Naklejki na wymiar!",
          link: { href: "", title: "" },
          description:
            "W naszym asortymencie znajdziesz różnorodne wymiary, dostosowane do różnych preferencji i potrzeb.",
          center: true,
        },
        {
          id: 2,
          text: "Pobudź kreatywność!",
          link: {
            href: "/tworzenie-naklejek",
            title: "Do kreatora",
            Icon: <FaRightLong className="ml-2" />,
          },
          description:
            "Rozpocznij niepowtarzalną podróż w świat swoich pomysłów za pomocą naszego ekscytującego Kreatora Naklejek! Oferujemy Ci szansę stworzenia własnej, personalizowanej naklejki, która idealnie odzwierciedli Twój wyjątkowy styl.",
        },
        {
          id: 3,
          text: "Naklejki holograficzne!",
          link: { href: "", title: "" },
          description: (
            <div className="flex flex-col">
              <p>
                <Link
                  href="/about/o-naszych-naklejkach"
                  className="text-blue-200"
                >
                  Nasze usługi
                </Link>{" "}
                to nie tylko wysoka jakość i dbałość o szczegóły, oferujemy druk
                naklejek na zwykłych i holograficznych strukturach papieru.
              </p>
              <ul className="flex flex-row items-start justify-center mt-2 space-x-3 flex-wrap sm:flex-no-wrap">
                <li className="flex flex-row items-center">
                  <FaStar className="h-4 w-4 text-[#F87FF0] mr-2" />
                  Papier złoty
                </li>
                <li className="flex flex-row items-center">
                  <FaStar className="h-4 w-4 text-[#F87FF0] mr-2" />
                  Papier srebrny
                </li>
                <li className="flex flex-row items-center mt-1 sm:mt-0">
                  <FaStar className="h-4 w-4 text-[#F87FF0] mr-2" />
                  Papier zwykły
                </li>
              </ul>
            </div>
          ),
          center: true,
        },
        {
          id: 4,
          text: "Dowolność zakupów",
          link: {
            href: "/sklep-z-naklejkami",
            title: "Zobacz wzory",
            Icon: <FaRightLong className="ml-2" />,
          },
          description: (
            <p>
              Nie musisz zamawiać naklejek w dużych ilościach. Każda naklejka
              jest wycinana własnoręcznie, dzięki czemu w naszym sklepie możesz
              zacząć kolekcjonować unikalne wzory od jednej sztuki!
            </p>
          ),
          center: true,
        },
        {
          id: 5,
          text: "Udekoruj przedmioty!",
          link: {
            href: "/about/inspiracja-naklejkami",
            title: "Inspiracja naklejkami",
            Icon: <FaRightLong className="ml-2" />,
          },
          description:
            "Dodaj niepowtarzalny element do swojego otoczenia dzięki naszym twórczym naklejkom. Odkryj nowoczesne wzory i zanurz się w pełni barw, które ożywią każde pomieszczenie oraz przedmiot!",
        },
      ].map((slide) => (
        <>
          <Slider
            key={slide.id}
            slideNumber={slide.id}
            currentSlide={currentSlide}
            text={slide.text}
          />
          <SliderContent
            currentSlide={currentSlide}
            slideNumber={slide.id}
            slide={slide}
            key={slide.text}
          />
        </>
      ))}
      <div
        className={`flex flex-row items-center absolute left-1/2 -translate-x-1/2 bottom-3 lg:bottom-6 text-4xl space-x-3 font-bold text-white drop-shadow-xl shadow-black p-3 bg-opacity-20 z-[500]`}
      >
        {[0, 1, 2, 3, 4, 5].map((slideNumber) => (
          <button
            onClick={() => {
              setCurrentSlide(slideNumber);
              setUserInteraction(true);
            }}
            className={`${
              currentSlide === slideNumber ? "bg-[#F87FF0]" : "bg-transparent"
            } h-4 w-4 rounded-full border-2 border-[#F87FF0] duration-200`}
            key={slideNumber}
          ></button>
        ))}
      </div>
    </div>
  );
}

function Slider({
  slideNumber,
  currentSlide,
  text,
}: {
  slideNumber: number;
  currentSlide: number;
  text: string;
}) {
  const isActive = slideNumber === currentSlide;

  return (
    <div
      className={`left-1/2 -translate-x-1/2 top-0 absolute w-full h-[65vh] flex items-center justify-center slider  ${
        isActive ? "active" : ""
      }`}
    >
      <Image
        src={`/sliderImages/${slideNumber}.webp`} // Adjust image paths accordingly
        width={1300}
        height={1024}
        alt={text}
        className={`h-full lg:w-full lg:h-auto object-cover relative z-0`}
      />
    </div>
  );
}
function SliderContent({
  slideNumber,
  currentSlide,
  slide,
}: {
  slideNumber: number;
  currentSlide: number;
  slide: any;
}) {
  const isActive = slideNumber === currentSlide;

  return (
    <div
      className={`${isActive ? "active z-[50]" : "z-[0]"} ${
        slideNumber === 1 && "!p-0"
      } ${
        slide.center
          ? "left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
          : "left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:left-12 top-1/2 -translate-y-1/2 md:translate-y-0 md:top-12"
      } absolute slider flex flex-col h-max bg-black bg-opacity-50 w-[90%] lg:max-w-[750px] p-3 md:p-6 rounded-3xl`}
    >
      <h2
        className={`${slideNumber === 1 && "px-3 pt-3 sm:pt-6 sm:px-6"} ${
          slide.center ? "text-center" : "text-center lg:text-left"
        } text-2xl md:text-4xl font-bold text-white`}
      >
        {slide.text}
      </h2>
      <div
        className={`${slideNumber === 1 && "px-3 sm:px-12 lg:px-16"} ${
          slide.center ? "text-center" : "text-center lg:text-left"
        } text-sm md:text-base text-white drop-shadow-xl shadow-black mt-3`}
      >
        {slide.description}
        {slide.link.title && (
          <Link
            title={slide.link.title}
            href={slide.link.href}
            className={`${
              slide.center ? "mx-auto" : "mx-auto lg:mx-0"
            } w-max px-3 py-1.5 rounded-lg text-white font-bold text-base sm:text-xl flex flex-row items-center border-2 border-[#F87FF0] bg-[#F87FF0] hover:bg-[#eb9ee5] duration-300 mt-2 lg:mt-3`}
          >
            {slide.link.title}
            {slide.link.Icon && slide.link.Icon}
          </Link>
        )}
      </div>
      {slideNumber === 1 && (
        <>
          <div className="w-full mt-2 gap-3 grid grid-cols-3 mx-auto lg:mx-0 text-white md:mt-4 bg-black bg-opacity-20 py-2 rounded-b-3xl">
            <div className="flex flex-col items-center">
              <span className="lg:font-bold">Mała</span>{" "}
              <span className="text-[#F87FF0]">6cm</span>
            </div>
            <div className="flex flex-col items-center border-x border-gray-200 px-3">
              <span className="lg:font-bold">Średnia</span>{" "}
              <span className="text-[#F87FF0]">8cm</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="lg:font-bold">Duża</span>{" "}
              <span className="text-[#F87FF0]">14cm</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
