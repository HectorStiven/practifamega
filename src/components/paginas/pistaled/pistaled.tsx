import React, { useState } from "react";

export const Pistaled = () => {

  const imagenes = new Array(8).fill("/images/inicio.jpeg");
  const [imagenActiva, setImagenActiva] = useState(0);

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", background: "#ffffff", color: "#222" }}>

      {/* HERO */}
      <div
        style={{
          width: "100%",
          height: "60vh",
          backgroundImage: "url('/images/inicio.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, rgba(0,0,0,0.5), rgba(0,0,0,0.2))"
          }}
        />

        <div style={{ position: "relative", zIndex: 2, color: "white" }}>
          <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
            PISTA LED DE CRISTAL
          </h1>
          <p style={{ fontSize: "20px", opacity: 0.9 }}>
            Elegancia, tecnología y lujo para tu evento
          </p>
        </div>
      </div>

      {/* CONTENIDO */}
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          padding: "60px 5%",
          gap: "40px"
        }}
      >

        {/* GALERÍA */}
        <div style={{ flex: "1 1 600px", maxWidth: "700px" }}>
          <img
            src={imagenes[imagenActiva]}
            alt="Pista LED"
            style={{
              width: "100%",
              borderRadius: "20px",
              boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
              marginBottom: "15px"
            }}
          />

          {/* MINIATURAS */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "10px" }}>
            {imagenes.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Miniatura ${i + 1}`}
                onClick={() => setImagenActiva(i)}
                style={{
                  width: "100%",
                  height: "80px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  cursor: "pointer",
                  border: imagenActiva === i ? "3px solid #ff00cc" : "2px solid transparent",
                  transition: "0.3s"
                }}
              />
            ))}
          </div>
        </div>

        {/* TEXTO */}
        <div style={{ flex: "1 1 400px" }}>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", color: "#ff00cc" }}>
            💎 Linda y Lujosa Pista LED de Cristal 💎
          </h2>

          <h3 style={{ marginBottom: "10px", color: "#0077ff" }}>🌟 Características</h3>
          <ul style={{ lineHeight: "2", marginBottom: "25px", color: "#555" }}>
            <li>💡 Más de 2,500 LEDs sincronizados al ritmo de la música</li>
            <li>🔲 16 módulos de 1 metro cuadrado cada uno</li>
            <li>📏 Tamaño total: 4 x 4 metros</li>
            <li>🎤 Ideal para escenarios abiertos y cerrados</li>
            <li>✨ Estilo único y moderno</li>
            <li>👗 Perfecta para 15 años y bodas de lujo</li>
          </ul>

          <h3 style={{ marginBottom: "10px", color: "#00c853" }}>👷 Talento Humano</h3>
          <ul style={{ lineHeight: "2", color: "#555" }}>
            <li>👨‍🔧 1 Operario técnico para instalación y desmontaje</li>
            <li>🚚 Transporte incluido</li>
          </ul>

          <a
            href="https://wa.me/573115264022"
            style={{
              display: "inline-block",
              marginTop: "30px",
              padding: "14px 28px",
              background: "linear-gradient(135deg,#ff00cc,#3333ff)",
              color: "white",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
              transition: "0.3s"
            }}
          >
            Cotizar ahora
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <div
        style={{
          textAlign: "center",
          padding: "25px",
          background: "#f5f5f5",
          color: "#777"
        }}
      >
        © 2026 Eventos Premium - Pista LED
      </div>

    </div>
  );
};
