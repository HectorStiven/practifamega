import { Routes, Route } from 'react-router-dom'
import InicioMegafietas from '../components/paginas/inicio';
import PaquetesMegafietas from '../components/paginas/paquetes';
import InfoGeneralMegafietas from '../components/paginas/infoGeneral';
import ResponsiveDrawer from '../components/drawer/drawer';
import ContactosMegafietas from '../components/paginas/contactos';

export default function RutasMegafiestas() {

    return (
        
<>

           
        <Routes>

            <Route
                path={"/Inicio"}
                element={
                    <InicioMegafietas/>}
            />
                <Route
                    path={"/Paquetes"}
                    element={
                        <PaquetesMegafietas />}
                />
                <Route
                    path={"/inf General"}
                    element={
                        <InfoGeneralMegafietas />}
                />
                <Route
                    path={"/Contacto"}
                    element={
                        <ContactosMegafietas />}
                />
              
                
        </Routes>
 </>

    );

}