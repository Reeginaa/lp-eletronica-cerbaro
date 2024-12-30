import React, { useEffect, useRef } from "react";
import "./Hero.scss";

function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const largeHeaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const largeHeader = largeHeaderRef.current;

    if (canvas && largeHeader) {
      let width = largeHeader.offsetWidth;  // Usar largura da div.hero
      let height = largeHeader.offsetHeight;  // Usar altura da div.hero
      const target = { x: width / 2, y: height / 2 };
      const ctx = canvas.getContext("2d");

      if (ctx) {
        canvas.width = width;
        canvas.height = height;

        // Função para calcular a distância entre dois pontos
        const getDistance = (p1: any, p2: any) => {
          return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
        };

        // Definindo o círculo
        class Circle {
          pos: any;
          radius: number;
          color: string;
          active: number | undefined;
          ctx: CanvasRenderingContext2D;
          velocity: { x: number, y: number };

          constructor(pos: any, rad: number, color: string, ctx: CanvasRenderingContext2D) {
            this.pos = pos;
            this.radius = rad;
            this.color = color;
            this.active = 1;
            this.ctx = ctx;
            this.velocity = {
              x: (Math.random() - 0.5) * 0.5,  // Velocidade aleatória para o movimento
              y: (Math.random() - 0.5) * 0.5,  // Velocidade aleatória para o movimento
            };
          }

          // Atualiza a posição do círculo
          update() {
            this.pos.x += this.velocity.x;
            this.pos.y += this.velocity.y;

            // Limitar os círculos dentro da tela
            if (this.pos.x <= 0 || this.pos.x >= width) this.velocity.x *= -1;
            if (this.pos.y <= 0 || this.pos.y >= height) this.velocity.y *= -1;
          }

          // Desenha o círculo
          draw() {
            if (!this.active) return;
            this.ctx.beginPath();
            this.ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
            this.ctx.fillStyle = `rgba(156,217,249,${this.active})`;
            this.ctx.fill();
          }
        }

        // Pontos e círculos
        const points: any[] = [];
        for (let x = 0; x < width; x += width / 20) {
          for (let y = 0; y < height; y += height / 20) {
            const px = x + Math.random() * width / 20;
            const py = y + Math.random() * height / 20;
            const p = { x: px, originX: px, y: py, originY: py };
            points.push(p);
          }
        }

        // Encontrar os pontos mais próximos
        points.forEach((p1) => {
          const closest: any[] = [];
          points.forEach((p2) => {
            if (p1 !== p2) {
              let placed = false;
              for (let k = 0; k < 5; k++) {
                if (!placed) {
                  if (closest[k] === undefined) {
                    closest[k] = p2;
                    placed = true;
                  }
                }
              }
              for (let k = 0; k < 5; k++) {
                if (!placed) {
                  if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                    closest[k] = p2;
                    placed = true;
                  }
                }
              }
            }
          });
          p1.closest = closest;
        });

        // Criar o círculo de cada ponto
        points.forEach((point) => {
          const c = new Circle(point, 2 + Math.random() * 2, "rgba(255,255,255,0.3)", ctx);
          point.circle = c;
        });

        // Função de animação
        const animate = () => {
          ctx.clearRect(0, 0, width, height);

          points.forEach((point) => {
            // Atualizar posição do ponto
            point.circle.update();

            if (Math.abs(getDistance(target, point)) < 4000) {
              point.active = 0.3;
              point.circle.active = 0.6;
            } else if (Math.abs(getDistance(target, point)) < 20000) {
              point.active = 0.1;
              point.circle.active = 0.3;
            } else if (Math.abs(getDistance(target, point)) < 40000) {
              point.active = 0.02;
              point.circle.active = 0.1;
            } else {
              point.active = 0;
              point.circle.active = 0;
            }

            drawLines(point);
            point.circle.draw();
          });

          requestAnimationFrame(animate);
        };

        // Função para desenhar linhas entre pontos
        const drawLines = (p: any) => {
          if (!p.active) return;
          p.closest.forEach((closestPoint: any) => {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(closestPoint.x, closestPoint.y);
            ctx.strokeStyle = `rgba(156,217,249,${p.active})`;
            ctx.stroke();
          });
        };

        // Iniciar animação
        animate();

        // Função para mover o mouse
        const mouseMove = (e: MouseEvent) => {
          target.x = e.pageX - largeHeader.getBoundingClientRect().left;
          target.y = e.pageY - largeHeader.getBoundingClientRect().top;
        };

        // Ouvir o movimento do mouse
        window.addEventListener("mousemove", mouseMove);

        // Redimensionar a tela
        const resize = () => {
          width = largeHeader.offsetWidth;
          height = largeHeader.offsetHeight;
          canvas.width = width;
          canvas.height = height;
        };

        // Ouvir evento de redimensionamento
        window.addEventListener("resize", resize);

        return () => {
          window.removeEventListener("mousemove", mouseMove);
          window.removeEventListener("resize", resize);
        };
      }
    }
  }, []);

  return (
    <>
      <div ref={largeHeaderRef} className="hero">
        <canvas ref={canvasRef}></canvas>
        <div className="conteudo">
          <h1 className="titulo">ELETRÔNICA CERBARO</h1>
          <h2 className="subtitulo">
            Desde 2013, conectando inovação e qualidade para <br />
            transformar sua experiência em eletrônica.
          </h2>
        </div>
      </div>
    </>
  );
}

export default Hero;
