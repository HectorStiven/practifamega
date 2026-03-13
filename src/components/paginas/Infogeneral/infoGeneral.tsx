import { Grid, Card, CardContent, Typography, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";

export default function InfoGeneralMegafietas() {

  const [experiencia, setExperiencia] = useState(0);
  const [eventos, setEventos] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {

      setExperiencia((prev) => {
        if (prev >= 12) return 12;
        return prev + 1;
      });

      setEventos((prev) => {
        if (prev >= 500) return 500;
        return prev + 20;
      });

    }, 80);

    return () => clearInterval(timer);

  }, []);

  const cardStyle = {
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    transition: "0.3s",
    height: "100%"
  };

  return (

    <Grid container spacing={4} style={{ padding: "0px", background: "#f5f5f5" }}>


      {/* MISION */}

      <Grid item xs={12} md={4}>
        <Card style={cardStyle}>
          <CardContent>

            <Typography variant="h5" style={{ fontWeight: "bold", color: "#ff4081", marginBottom: "15px" }}>
              Misión
            </Typography>

            <Typography>
              Brindar experiencias inolvidables a través de servicios
              profesionales de sonido, iluminación y animación para eventos
              como quince años, matrimonios y celebraciones especiales,
              garantizando calidad, tecnología y diversión en cada evento.
            </Typography>

          </CardContent>
        </Card>
      </Grid>


      {/* VISION */}

      <Grid item xs={12} md={4}>
        <Card style={cardStyle}>
          <CardContent>

            <Typography variant="h5" style={{ fontWeight: "bold", color: "#3f51b5", marginBottom: "15px" }}>
              Visión
            </Typography>

            <Typography>
              Convertirnos en una empresa líder en eventos y entretenimiento
              en la región del llano, reconocida por la calidad de nuestros
              equipos, innovación tecnológica y la capacidad de transformar
              cada celebración en una experiencia única e inolvidable.
            </Typography>

          </CardContent>
        </Card>
      </Grid>


      {/* VALORES */}

      <Grid item xs={12} md={4}>
        <Card style={cardStyle}>
          <CardContent>

            <Typography variant="h5" style={{ fontWeight: "bold", color: "#4caf50", marginBottom: "15px" }}>
              Valores
            </Typography>

            <Typography>
              • Responsabilidad<br/>
              • Puntualidad<br/>
              • Innovación<br/>
              • Pasión por la música<br/>
              • Compromiso con nuestros clientes
            </Typography>

          </CardContent>
        </Card>
      </Grid>


      {/* POR QUE ELEGIRNOS */}

      <Grid item xs={12} md={4}>
        <Card style={cardStyle}>
          <CardContent>

            <Typography variant="h5" style={{ fontWeight: "bold", color: "#ff9800", marginBottom: "15px" }}>
              ¿Por qué elegir MegaFiestas?
            </Typography>

            <Typography>
              • Sonido profesional de alta calidad<br/>
              • Animación garantizada<br/>
              • Equipos modernos de iluminación<br/>
              • Atención personalizada<br/>
              • Experiencia comprobada en eventos
            </Typography>

          </CardContent>
        </Card>
      </Grid>


      {/* EVENTOS */}

      <Grid item xs={12} md={4}>
        <Card style={cardStyle}>
          <CardContent>

            <Typography variant="h5" style={{ fontWeight: "bold", color: "#9c27b0", marginBottom: "15px" }}>
              Eventos que realizamos
            </Typography>

            <Typography>
              🎉 Quince años<br/>
              💍 Matrimonios<br/>
              🎂 Cumpleaños<br/>
              🎧 Fiestas privadas<br/>
              🏢 Eventos empresariales
            </Typography>

          </CardContent>
        </Card>
      </Grid>


      {/* EQUIPOS */}

      <Grid item xs={12} md={4}>
        <Card style={cardStyle}>
          <CardContent>

            <Typography variant="h5" style={{ fontWeight: "bold", color: "#009688", marginBottom: "15px" }}>
              Equipos profesionales
            </Typography>

            <Typography>
              • Consolas profesionales para DJ<br/>
              • Parlantes de alto rendimiento<br/>
              • Iluminación LED inteligente<br/>
              • Máquinas de humo y efectos<br/>
              • Cabina DJ moderna
            </Typography>

          </CardContent>
        </Card>
      </Grid>


      {/* EXPERIENCIA */}

      <Grid item xs={12}>

        <Card style={{ borderRadius: "20px", boxShadow: "0 12px 30px rgba(0,0,0,0.2)" }}>

          <CardContent>

            <Typography
              variant="h4"
              align="center"
              style={{ fontWeight: "bold", marginBottom: "30px" }}
            >
              Nuestra Experiencia
            </Typography>


            {/* AÑOS */}

            <Typography variant="h6">
              {experiencia} años de experiencia en el mercado
            </Typography>

            <LinearProgress
              variant="determinate"
              value={(experiencia / 12) * 100}
              style={{
                height: "12px",
                borderRadius: "10px",
                marginBottom: "30px"
              }}
            />


            {/* EVENTOS */}

            <Typography variant="h6">
              Más de {eventos}+ eventos realizados en el llano
            </Typography>

            <LinearProgress
              variant="determinate"
              value={(eventos / 500) * 100}
              style={{
                height: "12px",
                borderRadius: "10px"
              }}
            />

          </CardContent>

        </Card>

      </Grid>

    </Grid>

  );
}
