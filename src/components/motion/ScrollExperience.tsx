"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ScrollExperience() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      return;
    }

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.075,
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1,
      syncTouch: false,
      overscroll: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const context = gsap.context(() => {
      gsap.utils
        .toArray<HTMLElement>("main > section")
        .forEach((section, index) => {
          if (index === 0) {
            return;
          }

          gsap.fromTo(
            section,
            {
              y: 34,
            },
            {
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "top 70%",
                scrub: 0.75,
              },
            },
          );
        });

      gsap.utils
        .toArray<HTMLElement>("[data-scroll-reveal]")
        .forEach((element) => {
          const direction = element.dataset.scrollReveal ?? "up";

          let x = 0;
          let y = 42;

          if (direction === "left") {
            x = -48;
            y = 0;
          }

          if (direction === "right") {
            x = 48;
            y = 0;
          }

          gsap.fromTo(
            element,
            {
              x,
              y,
              autoAlpha: 0,
              filter: "blur(7px)",
            },
            {
              x: 0,
              y: 0,
              autoAlpha: 1,
              filter: "blur(0px)",
              duration: 0.95,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
                once: true,
              },
            },
          );
        });

      gsap.utils
        .toArray<HTMLElement>("[data-scroll-surface]")
        .forEach((element) => {
          gsap.fromTo(
            element,
            {
              y: 56,
              scale: 0.955,
            },
            {
              y: -4,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: element,
                start: "top 98%",
                end: "center 56%",
                scrub: 0.9,
              },
            },
          );
        });

      gsap.utils
        .toArray<HTMLElement>("[data-scroll-stagger]")
        .forEach((container) => {
          const children = Array.from(container.children);

          gsap.fromTo(
            children,
            {
              y: 32,
              autoAlpha: 0,
              scale: 0.965,
            },
            {
              y: 0,
              autoAlpha: 1,
              scale: 1,
              duration: 0.72,
              stagger: 0.11,
              ease: "power3.out",
              scrollTrigger: {
                trigger: container,
                start: "top 86%",
                once: true,
              },
            },
          );
        });

      gsap.utils
        .toArray<HTMLElement>("[data-scroll-parallax]")
        .forEach((element) => {
          const amount = Number(element.dataset.scrollParallax ?? "35");

          gsap.fromTo(
            element,
            {
              y: -amount,
            },
            {
              y: amount,
              ease: "none",
              scrollTrigger: {
                trigger: element.closest("section") ?? element,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.15,
              },
            },
          );
        });

      gsap.utils
        .toArray<HTMLElement>("[data-scroll-float]")
        .forEach((element) => {
          const amount = Number(element.dataset.scrollFloat ?? "22");

          gsap.fromTo(
            element,
            {
              y: amount,
              rotate: -1.2,
            },
            {
              y: -amount,
              rotate: 1.2,
              ease: "none",
              scrollTrigger: {
                trigger: element,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.05,
              },
            },
          );
        });

      gsap.utils
        .toArray<HTMLElement>("[data-scroll-line]")
        .forEach((element) => {
          gsap.fromTo(
            element,
            {
              scaleX: 0,
              transformOrigin: "left center",
            },
            {
              scaleX: 1,
              ease: "none",
              scrollTrigger: {
                trigger: element,
                start: "top 86%",
                end: "top 58%",
                scrub: 0.8,
              },
            },
          );
        });
    });

    const anchorHandler = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor =
        target.closest<HTMLAnchorElement>('a[href^="#"]');

      if (!anchor) {
        return;
      }

      const href = anchor.getAttribute("href");

      if (!href || href === "#") {
        return;
      }

      const destination =
        document.querySelector<HTMLElement>(href);

      if (!destination) {
        return;
      }

      event.preventDefault();

      lenis.scrollTo(destination, {
        offset: -82,
        duration: 1.2,
      });

      window.history.replaceState(null, "", href);
    };

    document.addEventListener("click", anchorHandler);

    const refresh = () => ScrollTrigger.refresh();

    const firstRefresh = window.setTimeout(refresh, 150);
    const secondRefresh = window.setTimeout(refresh, 800);

    document.fonts?.ready.then(refresh);

    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh);

    return () => {
      window.clearTimeout(firstRefresh);
      window.clearTimeout(secondRefresh);

      document.removeEventListener("click", anchorHandler);
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);

      context.revert();
      lenis.destroy();
    };
  }, []);

  return null;
}