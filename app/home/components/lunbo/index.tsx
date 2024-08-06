"use client";
import Image from "next/image";
import styles from "./index.module.css";
import "@/assets/slide/swiper-bundle.min.css";
import "@/assets/slide/certify.css";
// import Card1 from "@/assets/home/lunbo_test.svg";
import { useLayoutEffect } from "react";

export default function SwiperForHome() {
  useLayoutEffect(() => {
    // ts-ignore
    new Swiper("#certify .swiper-container", {
      watchSlidesProgress: true,
      slidesPerView: "auto",
      centeredSlides: true,
      loop: true,
      loopedSlides: 5,
      autoplay: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      on: {
        progress: function (progress: any) {
          // @ts-ignore
          for (let i = 0; i < this.slides.length; i++) {
            // @ts-ignore
            var slide = this.slides.eq(i);
            // @ts-ignore
            var slideProgress = this.slides[i].progress;
            var modify = 1;
            if (Math.abs(slideProgress) > 1) {
              modify = (Math.abs(slideProgress) - 1) * 0.2 + 1;
            }
            let translate = slideProgress * modify * 550 + "px";
            let scale = 1 - Math.abs(slideProgress) / 5;
            let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
            slide.transform(
              "translateX(" + translate + ") scale(" + scale + ")"
            );
            // @ts-ignore
            slide.css("zIndex", zIndex);
            // @ts-ignore
            slide.css("opacity", 1);
            if (Math.abs(slideProgress) > 3) {
              // @ts-ignore
              slide.css("opacity", 0);
            }
          }
        },
        setTransition: function (swiper: any, transition: any) {
          // @ts-ignore
          for (var i = 0; i < this.slides.length; i++) {
            // @ts-ignore
            var slide = this.slides.eq(i);
            // @ts-ignore
            slide.transition(transition);
          }
        },
      },
    });
  }, []);

  return (
    <div className={styles.swiperPart}>
      <div id="certify">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src={"/assets/home/lunbo_test.svg"} />
            </div>
            <div className="swiper-slide">
              <img src={"/assets/home/lunbo_test.svg"} />
            </div>
            <div className="swiper-slide">
              <img src={"/assets/home/lunbo_test.svg"} />
            </div>
          </div>
          <div className={"swiper-button-next"} />
          <div className={"swiper-button-prev"} />
        </div>
        <div className="swiper-pagination" />
      </div>
      <div className={styles.description}>
        Alchemy is the source of all life, and thus is very powerful. This is
        why Gogolah wants to poison and control it all. His corruption is
        spreading, all true heroes have perished against his armies, and someone
        has to stand up against him. Anyone, really!
        <br />
        <br />
        Hordes of terrible magolis, corrupted elven kings and crazed dwarf
        warlords are destroying everything… and there is not a single hero left
        to oppose them!
      </div>
    </div>
  );
}
