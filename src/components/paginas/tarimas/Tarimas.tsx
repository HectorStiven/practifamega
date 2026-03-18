import React from "react";

interface Servicio {
  nombre: string;
  imagen: string;
  descripcion: string;
  items: string[];
}

export const Tarimas = () => {

  const servicios: Servicio[] = [
    {
      nombre: "Tarima Profesional 1 Metro de Altura",
      imagen: "/images/inicio.jpeg",
      descripcion: "Tarima alta ideal para eventos grandes, conciertos y presentaciones donde se requiere mayor visibilidad.",
      items: [
        "Altura: 1 metro",
        "Escaleras con pasamanos",
        "Faldón negro",
        "Estructura segura y resistente",
        "Montaje y desmontaje incluido",
        "Ideal para escenarios principales",
        "Uso profesional"
      ]
    },
    {
      nombre: "Tarima Profesional 60 Centímetros de Altura",
      imagen: "/images/inicio.jpeg",
      descripcion: "Tarima de altura media perfecta para eventos sociales, colegios y polideportivos.",
      items: [
        "Altura: 60 cm",
        "Escaleras y faldón negro",
        "Fácil acceso",
        "Montaje y desmontaje incluido",
        "Ideal para eventos sociales",
        "Uso versátil"
      ]
    },
    {
      nombre: "Medidas Disponibles",
      imagen: "/images/inicio.jpeg",
      descripcion: "Contamos con diferentes medidas de tarimas adaptables a cualquier tipo de espacio.",
      items: [
        "10m x 4.80m",
        "10m x 6m",
        "7.20m x 3.60m (polideportivo)",
        "7.20m x 4.80m (polideportivo)",
        "4.80m x 4.80m (ideal para carpa)",
        "6.00m x 4.80m",
        "4.80m x 3.60m",
        "4.80m x 2.40m"
      ]
    }
  ];

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", background: "#fafafa" }}>

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
          color: "white",
          textAlign: "center",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)"
          }}
        />

        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ fontSize: "50px", marginBottom: "10px" }}>
            Servicio de Tarimas
          </h1>
          <p style={{ fontSize: "18px", opacity: 0.9 }}>
            Soluciones profesionales para todo tipo de eventos
          </p>
        </div>
      </div>

      {/* SERVICIOS */}
      {servicios.map((servicio, index) => (
        <section
          key={index}
          style={{
            display: "flex",
            flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            flexWrap: "wrap",
            alignItems: "center",
            padding: "60px 10%",
            gap: "30px",
            background: index % 2 === 0 ? "#ffffff" : "#f3f3f3"
          }}
        >

          {/* IMAGEN */}
          <div
            style={{
              flex: "1 1 450px",
              transition: "transform 0.4s"
            }}
          >
            <img
              src={servicio.imagen}
              alt={servicio.nombre}
              style={{
                width: "100%",
                borderRadius: "20px",
                boxShadow: "0 15px 40px rgba(0,0,0,0.2)"
              }}
            />
          </div>

          {/* TEXTO */}
          <div style={{ flex: "1 1 450px" }}>
            <h2
              style={{
                fontSize: "34px",
                marginBottom: "15px",
                color: "#222"
              }}
            >
              {servicio.nombre}
            </h2>

            <p
              style={{
                fontSize: "17px",
                marginBottom: "25px",
                color: "#666",
                lineHeight: "1.6"
              }}
            >
              {servicio.descripcion}
            </p>

            <ul
              style={{
                lineHeight: "2",
                paddingLeft: "20px",
                color: "#444"
              }}
            >
              {servicio.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            {/* BOTON */}
            <a
              href="https://wa.me/573000000000"
            
              style={{
                display: "inline-block",
                marginTop: "25px",
                padding: "14px 26px",
                background: "linear-gradient(135deg,#25D366,#1ebe5d)",
                color: "white",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "bold",
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                transition: "all 0.3s"
              }}
            >
              Cotizar por WhatsApp
            </a>
          </div>
        </section>
      ))}

      {/* FOOTER SIMPLE */}
      <div
        style={{
          textAlign: "center",
          padding: "30px",
          background: "#111",
          color: "#aaa"
        }}
      >
        © 2026 Servicios de Eventos - Tarimas Profesionales
      </div>
    </div>
  );
};