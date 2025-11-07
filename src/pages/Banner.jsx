import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Banner.css";
import { techCards } from "../data/banner-skills";

export default function Banner() {
  const [visibleCards, setVisibleCards] = useState([]);
  const [hiddenCards, setHiddenCards] = useState([]);

  // Load particles
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  useEffect(() => {
    const shown = techCards.slice(0, 9);
    const hidden = techCards.slice(9);

    setVisibleCards(shown);
    setHiddenCards(hidden);

    const interval = setInterval(() => {
      if (hidden.length === 0) return;

      const randomVisible = Math.floor(Math.random() * shown.length);
      const randomHidden = hidden.pop();
      hidden.unshift(shown[randomVisible]);
      shown[randomVisible] = randomHidden;

      setVisibleCards([...shown]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false,
    cssEase: "ease-in-out",
  };

  return (
    <section className="banner container-fluid">
      <Particles
        id="particles-js"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 30, density: { enable: true, value_area: 800 } },
            color: { value: "#c80808" },
            opacity: { value: 0.2, random: true },
            size: { value: 3, random: true },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#c80808",
              opacity: 0.2,
              width: 1,
            },
            move: { enable: true, speed: 1, out_mode: "out" },
          },
          interactivity: {
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" },
            },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          retina_detect: true,
        }}
      />

      <div className="container">
        <div className="row align-items-center">
          {/* LEFT SIDE: Banner Text */}
          <div className="col-md-6 banner-content">
            {/* {...sliderSettings}  */}
            <Slider className="banner-slider">
              <div className="carousal">
                <h1>
                  Karunakaran S
                  <br />
                  <span>Frontend Software Engineer</span>
                </h1>
                <p>
                  Passionate about crafting scalable, interactive, and
                  user-friendly interfaces using modern web technologies.
                </p>
                <a className="modern-btn" href="#skills">
                  View Skills{" "}
                   
                </a>
              </div>
            </Slider>
          </div>

          {/* RIGHT SIDE: Floating Cards */}
          <div className="col-md-6 banner-image position-relative">
            <div className="banner-cards-container">
              {visibleCards.map((tech, index) => (
                <div
                  key={tech.id}
                  className={`banner-card float-card-${index + 1}`}
                >
                  <div
                    className={`floating-card zoom-in active card-${index + 1}`}
                  >
                    <img
                      src={tech.img}
                      alt={tech.name}
                      className="w-14 h-14 object-contain"
                    />
                    <span>{tech.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
