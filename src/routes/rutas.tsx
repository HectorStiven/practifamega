import { Routes, Route } from 'react-router-dom'
import InicioMegafietas from '../components/paginas/Inicio/inicio';
import PaquetesMegafietas from '../components/paginas/Paquetes/paquetes';
import InfoGeneralMegafietas from '../components/paginas/Infogeneral/infoGeneral';
import ContactosMegafietas from '../components/paginas/Contactos/contactos';
import MostrarServiciosMegafiestas from '../components/paginas/Servicios/MuestraServicios';
import HomeMegafiestas from '../components/home/home';

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
                    path={"/servicios"}
                    element={
                        <MostrarServiciosMegafiestas />}
                />
                <Route
                    path={"/Info General"}
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
                        <HomeMegafiestas/>}
                />
                
        </Routes>
 </>

    );

}