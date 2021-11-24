import React, { useEffect } from "react";

export const BorderWalk: React.FC<{ walkId: string }> = ({
  children,
  walkId,
}) => {
  useEffect(() => {
    let wall = 0;
    let yPos = 0;
    let xPos = 0;
    const bb = () => document.body.getBoundingClientRect();
    const el = document.getElementById(walkId);
    const h = el.getBoundingClientRect().height;
    type AbsPosV = null | number;
    const setRTLB = (r: AbsPosV, t: AbsPosV, l: AbsPosV, b: AbsPosV) => {
      el.style.top = t === null ? "" : `${t}px`;
      el.style.right = r === null ? "" : `${r}px`;
      el.style.left = l === null ? "" : `${l}px`;
      el.style.bottom = b === null ? "" : `${b}px`;
    };
    const setPos = () => {
      const bbr = bb();
      switch (wall) {
        case 0:
          if (el.getBoundingClientRect().right > bbr.width) {
            wall = 1;
            yPos = 0;
          } else {
            el.style.transform = "";
            setRTLB(null, null, xPos, 0);
          }
          break;
        case 1:
          if (el.getBoundingClientRect().top < 0) {
            wall = 2;
            xPos = bbr.width;
          } else {
            el.style.transform = "rotate(-90deg)";
            setRTLB(null, null, bbr.width, yPos);
          }
          break;
        case 2:
          if (el.getBoundingClientRect().left < 0) {
            wall = 3;
            yPos = bbr.height;
          } else {
            el.style.transform = "rotate(-180deg)";
            setRTLB(null, 0 - h, xPos, null);
          }
          break;
        case 3:
          if (el.getBoundingClientRect().bottom > bbr.height) {
            wall = 0;
            xPos = 0;
          } else {
            el.style.transform = "rotate(-270deg)";
            setRTLB(null, null, 0, yPos);
          }
          break;
      }
    };
    if (!el) return;
    el.style.position = "absolute";
    (window as any).caml = el;
    let speed = 2;
    const move = () => {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 50) {
          const onScroll = () => {
            if (window.scrollY < 50) {
              el.style.opacity = "1";
              window.removeEventListener("scroll", onScroll);
              move();
            }
          };
          el.style.opacity = "0";
          window.addEventListener("scroll", onScroll);
          return;
        }
        if (wall === 0) {
          xPos += speed;
        } else if (wall === 1) {
          yPos += speed;
        } else if (wall == 2) {
          xPos -= speed;
        } else if (wall == 3) {
          yPos -= speed;
        } else {
          throw new Error("invalid wall");
        }
        setPos();
        move();
      });
    };
    move();
  }, [walkId]);
  return children as any;
};
