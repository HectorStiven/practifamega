import React, { useState } from "react";

interface Servicio {
  nombre: string;
  imagen: string;
  descripcion: string;
  precio: string;
  items: string[];
  imagenes: string[];
}

export default function BasicDemo() {

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

  const servicios: Servicio[] = [
    {
      nombre: "DJ Profesional",
      imagen: "/images/inicio.jpeg",
      descripcion: "Servicio de DJ profesional para todo tipo de eventos.",
      precio: "$400.000",
      items: [
        "DJ profesional",
        "Consola profesional",
        "Mezcla en vivo",
        "Animación básica",
        "Música personalizada"
      ],
      imagenes: new Array(8).fill("/images/inicio.jpeg")
    },
    {
      nombre: "Sonido Profesional",
      imagen: "/images/inicio.jpeg",
      descripcion: "Sistema de sonido para eventos grandes y pequeños.",
      precio: "$500.000",
      items: [
        "Bafles profesionales",
        "Micrófonos inalámbricos",
        "Consola de audio",
        "Instalación completa",
        "Operador técnico"
      ],
      imagenes: new Array(8).fill("/images/inicio.jpeg")
    },
    {
      nombre: "Luces LED",
      imagen: "/images/inicio.jpeg",
      descripcion: "Iluminación LED para ambientar eventos.",
      precio: "$300.000",
      items: [
        "Luces LED inteligentes",
        "Control DMX",
        "Programación de efectos",
        "Montaje e instalación",
        "Operación durante evento"
      ],
      imagenes: new Array(8).fill("/images/inicio.jpeg")
    },
    {
      nombre: "Máquina de Humo",
      imagen: "/images/inicio.jpeg",
      descripcion: "Efectos de humo para pista de baile.",
      precio: "$150.000",
      items: [
        "Máquina profesional",
        "Líquido de humo",
        "Operación durante evento",
        "Efectos en pista",
        "Instalación incluida"
      ],
      imagenes: new Array(8).fill("/images/inicio.jpeg")
    },
    {
      nombre: "Pantalla LED",
      imagen: "/images/inicio.jpeg",
      descripcion: "Pantalla LED para mostrar videos o fotos.",
      precio: "$600.000",
      items: [
        "Pantalla LED HD",
        "Conexión multimedia",
        "Instalación completa",
        "Operador técnico",
        "Visualización en vivo"
      ],
      imagenes: new Array(8).fill("/images/inicio.jpeg")
    },
    {
      nombre: "Animador",
      imagen: "/images/inicio.jpeg",
      descripcion: "Animación profesional para eventos.",
      precio: "$350.000",
      items: [
        "Animación del evento",
        "Interacción con público",
        "Dinámicas y juegos",
        "Coordinación de actividades",
        "Presentación en vivo"
      ],
      imagenes: new Array(8).fill("/images/inicio.jpeg")
    },
    {
      nombre: "Tarima",
      imagen: "/images/inicio.jpeg",
      descripcion: "Tarima profesional para eventos.",
      precio: "$450.000",
      items: [
        "Estructura resistente",
        "Montaje profesional",
        "Altura segura",
        "Soporte para DJ o artistas",
        "Desmontaje incluido"
      ],
      imagenes: new Array(8).fill("/images/inicio.jpeg")
    },
    {
      nombre: "Pasarela",
      imagen: "/images/inicio.jpeg",
      descripcion: "Pasarela para desfiles y eventos especiales.",
      precio: "$380.000",
      items: [
        "Estructura modular",
        "Instalación completa",
        "Superficie segura",
        "Ideal para desfiles",
        "Montaje y desmontaje"
      ],
      imagenes: new Array(8).fill("/images/inicio.jpeg")
    },
    {
      nombre: "Pista LED",
      imagen: "/images/inicio.jpeg",
      descripcion: "Pista de baile LED interactiva.",
      precio: "$700.000",
      items: [
        "Pista LED iluminada",
        "Efectos de luz dinámicos",
        "Instalación profesional",
        "Control de iluminación",
        "Ideal para pista de baile"
      ],
      imagenes: new Array(8).fill("/images/inicio.jpeg")
    },
    {
      nombre: "Maestra de Ceremonia",
      imagen: "/images/inicio.jpeg",
      descripcion: "Presentación profesional de eventos.",
      precio: "$320.000",
      items: [
        "Presentación del evento",
        "Coordinación de agenda",
        "Interacción con invitados",
        "Guía de protocolo",
        "Locución profesional"
      ],
      imagenes: new Array(8).fill("/images/inicio.jpeg")
    }
  ];

  return (
    <div >


      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px,1fr))",
          gap: "18px",
          maxWidth: "1500px",
    
        }}
      >
        {servicios.map((servicio, index) => {

          const estaVolteada = volteadas.includes(index);
          const mostrandoFotos = verFotos === index;

          return (
            <div
              key={index}
              onClick={() => toggleCard(index)}
              style={{ perspective: "1000px", cursor: "pointer" }}
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
                    src={servicio.imagen}
                    alt={servicio.nombre}
                    style={{ width: "100%", height: "180px", objectFit: "cover" }}
                  />

                  <div style={{ padding: "15px", textAlign: "center" }}>
                    <h2 style={{ fontSize: "22px", marginBottom: "8px" }}>
                      {servicio.nombre}
                    </h2>

                    <p style={{ fontSize: "14px", marginBottom: "12px", color: "#555" }}>
                      {servicio.descripcion}
                    </p>

                    <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>
                      {servicio.precio}
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

                      <ol style={{ paddingLeft: "20px", lineHeight: "2" }}>
                        {servicio.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ol>

                      <div style={{ textAlign: "center", marginTop: "15px", display: "flex", gap: "10px", justifyContent: "center" }}>
                        <button
                          onClick={() => setVerFotos(index)}
                          style={{ padding: "8px 16px", borderRadius: "8px", border: "none", background: "#fff", cursor: "pointer" }}
                        >
                          Ver fotos
                        </button>

                        <button
                          onClick={() => cerrarCard(index)}
                          style={{ padding: "8px 16px", borderRadius: "8px", border: "none", background: "#444", color: "#fff" }}
                        >
                          Volver
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <h2 style={{ textAlign: "center", marginBottom: "15px" }}>
                        Fotos del Servicio
                      </h2>

                      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        {servicio.imagenes.map((img, i) => (
                          <img key={i} src={img} alt="" style={{ width: "100%", borderRadius: "8px" }} />
                        ))}
                      </div>

                      <div style={{ textAlign: "center", marginTop: "15px" }}>
                        <button
                          onClick={() => setVerFotos(null)}
                          style={{ padding: "8px 16px", borderRadius: "8px", border: "none", background: "#fff" }}
                        >
                          Volver a información
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
