import { Routes, Route } from 'react-router-dom'
import InicioMegafietas from '../components/paginas/Inicio/inicio';
import PaquetesMegafietas from '../components/paginas/Paquetes/paquetes';
import InfoGeneralMegafietas from '../components/paginas/Infogeneral/infoGeneral';
import ContactosMegafietas from '../components/paginas/Contactos/contactos';

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
                <Route
                    path={"/"}
                    element={
                        <>bienbenido</>}
                />
                
        </Routes>
 </>

    );

}