
import { TabView, TabPanel } from 'primereact/tabview';
import { Box } from "@mui/material";
export default function HeaderIconDemo() {
    return (


        <Box sx={{
   
    border: 1,
    borderColor: "#dddddd", 
    width: "auto",      
    height: "auto",
    margin:0
   }}>

    
        <div className="card">
            <TabView>
                <TabPanel header="15 AÑOSs" rightIcon="pi pi-calendar mr-2">
                    <p className="m-0">
                            PAQUETE MACRO RUMBA $ 450

                            SONIDO PROFESIONAL 2 CABINAS ACTIVAS CON TRIPODES

                            4 LUCES DE RUMBA Y  DE AMBIENTACION

                            DJ   CROSSOVER EN VIVO  BUENA MUSICA

                            MÁQUINA DE HUMO PARA TODA LA NOCHE

                            EXTRUCTURA EN TE PARA LUCES  O ILUMINACION A PISO AMBIENTAL PARA EL EVENTO

                            TRANSPORTES  INCLUIDOS
                    </p>
                </TabPanel>
                <TabPanel header="MATRIMONIOS" rightIcon="pi pi-user ml-2">
                    <p className="m-0">
                            PAQUETE MACRO RUMBA $ 550

                            SONIDO PROFESIONAL 2 CABINAS ACTIVAS CON TRIPODES

                            6 LUCES DE RUMBA Y  DE AMBIENTACION

                            DJ   CROSSOVER EN VIVO  BUENA MUSICA
                            PROTOCOLO Y ANIMACION

                            MÁQUINA DE HUMO PARA TODA LA NOCHE

                            EXTRUCTURA TIPO TRUSS PARA LUCES

                            TRANSPORTES  INCLUIDOS
                    </p>
                </TabPanel>
                <TabPanel header="RUMBOTECAS" >
                    <p className="m-0">
                            PAQUETE ORO MINI CONCIERTO 1.200.000

                            SONIDO PROFESIONAL 2 CABINAS DOBLES FULL RANGO
                            2 BAJOS DE PRESION  DE 18

                            10 LUCES DE RUMBA Y  DE AMBIENTACION DMX SISTEMA INTELIGENTE


                            DJ  EN VIVO CROSSOVER CON CONSOLA Y AUDIFONOS ANIMACION DE RUMBA

                            ANIMACION Y
                            PROTOCOLO MAESTRO DE CEREMONIA
                            PROTOCOLO MUSICALIZADO

                            MÁQUINA DE HUMO PARA TODA LA NOCHE

                            1 CAÑÓN LANZA PAPEL PARA LA OCACION
                            EXPULSION 3 DISPAROS

                            2 VOLCANES DE POLVORA
                            3 METROS DE ALTURA 20 SEGUNDOS  PARA EL VALS
                            ANIMACION DE HORA LOCA
                            IMPLEMENTOS HORA LOCA

                            EXTRUCTURA EN ALUMINIO GLOBAL TRUSS  PARA MONTAJE DE ILUMINACION


                            TRANSPORTES  INCLUIDOS
                    </p>
                </TabPanel>
            </TabView>
        </div>

        </Box>
    )
}
