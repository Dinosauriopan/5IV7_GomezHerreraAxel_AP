import React,{Component} from "react";
import Card from "./Card";
import img1 from '../assets/husky.jpg'
import img2 from '../assets/akita.jpg'
import img3 from '../assets/schnauzer2.jpg'
import img4 from '../assets/persa.jpg'
import img5 from '../assets/siames.jpg'
import img6 from '../assets/wirehair.jpg'



class Cards extends Component{
    render(){
        return(
            <div className="justify-content-center">
                <header>
                <h1>Componente Mascotas</h1>
                <br />
                <h4>Gómez Herrera Axel</h4>
                </header>
                <br />
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-4">
                            <Card imgsrc={img3} title="Kobe"  
                            body="RAZA: Schnauzer,
                            Tanto el miniatura como el gigante se derivan
                             de la variedad estándar del schnauzer. 
                             El hermano mayor, ya sea de color negro o sal y pimienta, 
                             tiene buen carácter y es dócil."
                             nombreM="Información sobre Kobe"
                             datosM=" Tiene: 1 año de edad,
                             Es: Animado / Amoroso / Juguetón / Leal / Alerta / Silencioso / Inteligente / Seguro / Resistente / Trabajador /
                             Información que debe de saber antes de adoptarlo:         
                                - Requiere mucho aseo
                                - Es un gran perro guardián
                                - Es un gran perro familiar
                             "
                             telefono = "Información de contacto:"
                             telefonoD="Telefono: 12 3456 7890
                             correo: adpotarperrito@amigos.com"
                            
                            />
                        </div>
                        <div className="col-md-4">
                            <Card imgsrc={img1} title="Kaiser"  
                            body="RAZA: Alaskan malamute,
                            Los alaskan malamutes pertenecen a una 
                            de las razas árticas de arreo más antiguas. 
                            Son perros poderosos, robustos, con un pecho profundo 
                            y un cuerpo fuerte y musculoso. Su cabeza ancha presenta orejas 
                            triangulares, que se levantan cuando el perro está atento."
                             nombreM="Información sobre Kaiser"
                             datosM=" Tiene: 3 meses de edad,
                             Es: Amoroso / Amistoso / Sociable / Leal / Juguetón / 
                             Información que debe de saber antes de adoptarlo:         
                                - Necesita un dueño experimentado
                                - Requiere aseo moderado
                                - Requiere espacio en el exterior
                             "
                             telefono = "Información de contacto:"
                             telefonoD="Telefono: 12 3456 7890
                             correo: adpotarperrito@amigos.com"
                            />
                        </div>
                        <div className="col-md-4">
                            <Card imgsrc={img2} title="Doge" 
                            body="RAZA: Akita Inu,
                            Estos perros guardianes son grandes y robustos, 
                            con mucha personalidad y una aptitud para el atletismo 
                            que los hace ideales para realizar largas caminatas y ejercicio. 
                            El Akita Inu tiene una expresión noble y digna que lo ha hecho popular en todo el mundo."
                            nombreM="Información sobre Doge"
                             datosM=" Tiene: 2 años de edad,
                             Es: Apacible / Leal / Tranquilo / Obediente /
                             Información que debe de saber antes de adoptarlo:         
                                - Es un gran perro guardián
                                - Necesita un dueño experimentado
                                - Requiere aseo moderado
                             "
                             telefono = "Información de contacto:"
                             telefonoD="Telefono: 12 3456 7890
                             correo: adpotarperrito@amigos.com"
                            />
                        </div>
                    </div>
                <br />
                </div>
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-4 ">
                            <Card imgsrc={img5} title="Zeus" 
                            body="RAZA: Siamés,
                            Los gatos siameses son amorosos, leales, intuitivos,
                            demandantes y sociables. Viven de la atención. Los siameses 
                            son gatos muy inteligentes y juguetones que pueden entretenerse solos 
                            durante horas. "

                             nombreM="Información sobre Zeus"
                             datosM=" Tiene: 1 año de edad,
                             Es: Amoroso / Leal / Juguetón / Maullador / Inteligente / Activo /
                             Información que debe de saber antes de adoptarlo:         
                                - Necesita poco aseo
                                - Adecuado para la vida interior y exterior
                                - Más feliz de a dos
                             "
                             telefono = "Información de contacto:"
                             telefonoD="Telefono: 12 3456 7890
                             correo: adpotargatito@amigos.com"
                            />
                        </div>
                        <div className="col-md-4">
                            <Card imgsrc={img4} title="Sombra" 
                            body="RAZA: Persa, 
                            El persa tiene una naturaleza dulce y dócil, es silencioso, y 
                            convivir con él es sencillo. Les encanta que los peinen y acaricien los niños,
                            pero es poco probable que jueguen alborotadamente con ellos."
                            
                            nombreM="Información sobre Sombra"
                            datosM=" Tiene: 2 meses de edad,
                            Es: Silencioso / Tranquilo / Sociable / Afectuoso / 
                            Información que debe de saber antes de adoptarlo:         
                            - El más adecuado para casas silenciosas
                            - Necesita mucho aseo
                            - El más adecuado para la vida interior
                            "
                            telefono = "Información de contacto:"
                            telefonoD="Telefono: 12 3456 7890
                            correo: adpotargatito@amigos.com
                            "
                            />
                        </div>
                        <div className="col-md-4">
                            <Card imgsrc={img6} title="Felix" 
                            body="RAZA: American wirehair, 
                            Los american wirehair son conocidos por ser muy pacientes con los niños. 
                            Son tranquilos, pero también pueden ser juguetones, incluso cuando envejecen.
                            En general, son gatos inteligentes y se interesan en todo lo que los rodea."
                            
                            nombreM="Información sobre Felix"
                            datosM=" Tiene: 5 meses de edad,
                            es: Tranquilo / Sociable / Silencioso / Afectuoso / Juguetón / Inteligente / Independiente /
                            Información que debe de saber antes de adoptarlo:         
                               - Necesita aseo moderado
                               - El más adecuado para la vida interior
                               - Paciente con los niños y otros animales
                            "
                            telefono = "Información de contacto:"
                            telefonoD="Telefono: 12 3456 7890
                            correo: adpotargatito@amigos.com
                            "
                            />
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        );
    }
}

export default Cards;