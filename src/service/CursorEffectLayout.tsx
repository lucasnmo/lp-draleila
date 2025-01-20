'use client';
import { useEffect, ReactNode } from "react";
import "../app/globals.css";

interface Props {
  children: ReactNode;
}

export default function CursorEffectLayout({ children }: Props) {
  useEffect(() => {
    const trailContainer = document.createElement('div');
    trailContainer.classList.add('trail-container');
    document.body.appendChild(trailContainer);

    let isMoving = false;

    const createSparkle = (x: number, y: number) => {
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      trailContainer.appendChild(sparkle);

      setTimeout(() => {
        sparkle.remove();
      }, 1000); // Duração do brilho em milissegundos
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isMoving) {
        isMoving = true;
        requestAnimationFrame(() => {
          const scrollX = window.scrollX || window.pageXOffset;
          const scrollY = window.scrollY || window.pageYOffset;
          createSparkle(e.clientX + scrollX, e.clientY + scrollY);
          isMoving = false;
        });
      }
    };

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.body.removeChild(trailContainer);
    };
  }, []);

  return <>{children}</>;
}
