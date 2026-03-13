// eslint-disable-next-line
import React from "react";
import { IconType } from "react-icons";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaCalendarAlt,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaYoutube,
  FaClock
} from "react-icons/fa";

export default function ContactosMegafiestas() {

  const WhatsappIcon: IconType = FaWhatsapp;
  const PhoneIcon: IconType = FaPhoneAlt;
  const CalendarIcon: IconType = FaCalendarAlt;
  const InstagramIcon: IconType = FaInstagram;
  const FacebookIcon: IconType = FaFacebook;
  const TiktokIcon: IconType = FaTiktok;
  const YoutubeIcon: IconType = FaYoutube;
  const ClockIcon: IconType = FaClock;

  const estilos = {
    contenedor: {
      background: "#0b0b0b",
      color: "white",
      minHeight: "100vh",
      padding: "60px 20px",
      fontFamily: "Arial"
    } as React.CSSProperties,

    titulo: {
      textAlign: "center",
      fontSize: "40px",
      marginBottom: "10px",
      letterSpacing: "2px"
    } as React.CSSProperties,

    frase: {
      textAlign: "center",
      fontSize: "18px",
      color: "#ccc",
      marginBottom: "50px",
      fontStyle: "italic"
    } as React.CSSProperties,

    botones: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      flexWrap: "wrap",
      marginBottom: "50px"
    } as React.CSSProperties,

    boton: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "14px 22px",
      borderRadius: "10px",
      textDecoration: "none",
      fontWeight: "bold",
      color: "white",
      fontSize: "16px",
      transition: "0.3s"
    } as React.CSSProperties,

    horarios: {
      textAlign: "center",
      marginTop: "40px"
    } as React.CSSProperties,

    tituloHorario: {
      fontSize: "24px",
      marginBottom: "10px"
    } as React.CSSProperties,

    redes: {
      display: "flex",
      justifyContent: "center",
      gap: "25px",
      fontSize: "30px",
      marginTop: "40px"
    } as React.CSSProperties
  };

  return (
    <div style={estilos.contenedor}>

      <h1 style={estilos.titulo}>
        Contacto MegaFiestas
      </h1>

      <p style={estilos.frase}>
        "Las mejores fiestas no se recuerdan por lo que se gastó,  
        sino por lo increíble que se vivió. Nosotros hacemos que tu evento sea inolvidable."
      </p>


      {/* BOTONES DE CONTACTO */}

      <div style={estilos.botones}>

        <a
          href="https://wa.me/573115264022"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...estilos.boton, background: "#25D366" }}
        >
          <WhatsappIcon size={22} />
          WhatsApp
        </a>

        <a
          href="tel:+573115264022"
          style={{ ...estilos.boton, background: "#007bff" }}
        >
          <PhoneIcon size={20} />
          Llamar
        </a>

        <a
          href="https://megafiestas.com/cotizar"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...estilos.boton, background: "#ff9800" }}
        >
          <CalendarIcon size={20} />
          Cotizar Evento
        </a>

      </div>


      {/* HORARIOS */}

      <div style={estilos.horarios}>

        <h2 style={estilos.tituloHorario}>
          <ClockIcon /> Horarios de Atención
        </h2>

        <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
        <p>Sábados: 9:00 AM - 4:00 PM</p>
        <p>Domingos y Festivos: Solo eventos programados</p>

      </div>


      {/* REDES SOCIALES */}

      <div style={estilos.redes}>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <InstagramIcon />
        </a>

        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <FacebookIcon />
        </a>

        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <TiktokIcon />
        </a>

        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <YoutubeIcon />
        </a>

      </div>

    </div>
  );
}
