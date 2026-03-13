import React, { useState } from "react";

interface Paquete {
  nombre: string;
  imagen: string;
  descripcion: string;
  precio: string;
  items: string[];
  imagenes: string[];
}

export default function HomeMegafiestas() {

  const [volteadas, setVolteadas] = useState<number[]>([]);
  const [verFotos, setVerFotos] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    if (volteadas.includes(index)) {
      setVolteadas(volteadas.filter((i) => i !== index));
    } else {
      setVolteadas([...volteadas, index]);
    }
  };

  const cerrarCard = (index: number) => {
    setVerFotos(null);
    setVolteadas(volteadas.filter((i) => i !== index));
  };

  const paquetes: Paquete[] = [
    {
      nombre: "Paquete Mis Quince",
      imagen: "/images/inicio.jpeg",
      descripcion: "Sonido profesional, animación e iluminación LED para fiestas de quince años.",
      precio: "$1.200.000",
      items: [
        "DJ profesional",
        "Sonido de alta potencia",
        "Luces LED inteligentes",
        "Animador del evento",
        "Micrófonos inalámbricos"
      ],
      imagenes: [
        "/images/inicio.jpeg",
        "/images/inicio.jpeg",
        "/images/inicio.jpeg",
        "/images/inicio.jpeg",
        "/images/inicio.jpeg",
        "/images/inicio.jpeg",
        "/images/inicio.jpeg",
        "/images/inicio.jpeg"
      ]
    },
    {
      nombre: "Paquete Oro Plus",
      imagen: "/images/inicio.jpeg",
      descripcion: "DJ profesional, sonido premium y luces robóticas.",
      precio: "$2.000.000",
      items: [
        "DJ profesional",
        "Cabina iluminada",
        "Luces robóticas",
        "Máquina de humo",
        "Pantalla LED"
      ],
      imagenes: [
        "/images/inicio.jpeg",
        "/images/inicio.jpeg",
        "/images/inicio.jpeg",
        "/images/inicio.jpeg",
        "/images/inicio.jpeg",
        "/images/inicio.jpeg",
        "/images/inicio.jpeg",
        "/images/inicio.jpeg"
      ]
    }
  ];

  return (
    <div

    >
      <h1
    
      >
        Paquetes de Eventos
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px,1fr))",
          gap: "18px",
          maxWidth: "1500px",
   
        }}
      >
        {paquetes.map((paquete, index) => {

          const estaVolteada = volteadas.includes(index);
          const mostrandoFotos = verFotos === index;

          return (
            <div
              key={index}
              onClick={() => toggleCard(index)}
              style={{
                perspective: "1000px",
                cursor: "pointer"
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "380px",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.6s",
                  transform: estaVolteada ? "rotateY(180deg)" : "rotateY(0deg)"
                }}
              >

                {/* FRENTE */}
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                    background: "#f5f5f5",
                    borderRadius: "14px",
                    overflow: "hidden",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.12)"
                  }}
                >
                  <img
                    src={paquete.imagen}
                    alt={paquete.nombre}
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover"
                    }}
                  />

                  <div style={{ padding: "15px", textAlign: "center" }}>
                    <h2 style={{ fontSize: "22px", marginBottom: "8px" }}>
                      {paquete.nombre}
                    </h2>

                    <p
                      style={{
                        fontSize: "14px",
                        marginBottom: "12px",
                        color: "#555"
                      }}
                    >
                      {paquete.descripcion}
                    </p>

                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold"
                      }}
                    >
                      {paquete.precio}
                    </h3>
                  </div>
                </div>

                {/* ATRÁS */}
                <div
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    background: "#1c1c1c",
                    color: "white",
                    borderRadius: "14px",
                    padding: "20px",
                    overflowY: "auto"
                  }}
                >

                  {!mostrandoFotos ? (
                    <>
                      <h2 style={{ textAlign: "center", marginBottom: "15px" }}>
                        Incluye
                      </h2>

                      <ol
                        style={{
                          paddingLeft: "20px",
                          lineHeight: "2",
                          fontSize: "15px"
                        }}
                      >
                        {paquete.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ol>

                      <div style={{ textAlign: "center", marginTop: "15px", display:"flex", gap:"10px", justifyContent:"center"}}>
                        <button
                          onClick={() => setVerFotos(index)}
                          style={{
                            padding: "8px 16px",
                            border: "none",
                            borderRadius: "8px",
                            background: "#fff",
                            color: "#000",
                            cursor: "pointer"
                          }}
                        >
                          Ver fotos
                        </button>

                        <button
                          onClick={() => cerrarCard(index)}
                          style={{
                            padding: "8px 16px",
                            border: "none",
                            borderRadius: "8px",
                            background: "#444",
                            color: "#fff",
                            cursor: "pointer"
                          }}
                        >
                          Volver
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <h2 style={{ textAlign: "center", marginBottom: "15px" }}>
                        Fotos del Evento
                      </h2>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "12px"
                        }}
                      >
                      {paquete.imagenes.map((img, i) => (
  <img
    key={i}
    src={img}
    alt={`Imagen ${i + 1} del paquete ${paquete.nombre}`}
    style={{
      width: "100%",
      borderRadius: "8px"
    }}
  />
))}
                      </div>

                      <div style={{ textAlign: "center", marginTop: "15px" }}>
                        <button
                          onClick={() => setVerFotos(null)}
                          style={{
                            padding: "8px 16px",
                            border: "none",
                            borderRadius: "8px",
                            background: "#fff",
                            color: "#000",
                            cursor: "pointer"
                          }}
                        >
                          Volver a descripción
                        </button>
                      </div>
                    </>
                  )}

                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
