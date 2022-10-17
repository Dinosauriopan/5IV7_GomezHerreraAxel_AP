import React,{Component} from "react";
import Card from "./Card";
import img1 from '../assets/pay.png'
import img2 from '../assets/arroz.jpg'
import img3 from '../assets/pollo.jpg'
import img4 from '../assets/sopa.jpg'
import img5 from '../assets/pozole.jpg'
import img6 from '../assets/pastel.jpg'



class Cards extends Component{
    render(){
        return(
            <div className="justify-content-center">
                <header>
                <h1>Componente Recetas</h1>
                <br />
                <h4>Gómez Herrera Axel</h4>
                </header>
                <br />
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-4">
                            <Card imgsrc={img1} title="Pay de Limon"  
                            titleR="Ingredientes:" 
                            ingredientes='•Batido de limón:  
 
                            •180 g Queso Crema Philadelphia
                            •1 lata de leche condensada
                            •1/2  lata de leche evaporada
                            •½ tza. de jugo de limón
                            •1 cdta. de ralladura de limón para decorar
                             
                            Para la base:
                             
                            •2 tzas. de galleta Marbú molida
                            •90 g de mantequilla'

                            bodyR="Pasos:"

                            pasos='1. DERRETIR mantequilla y mezclar con la galleta Marbú molida
                            2.COLOCAR en el molde y refrigerar por 20 minutos.
                            3.LICUAR el Queso Crema Philadelphia, la leche condensada, la leche evaporada y el jugo de limón.
                            4.VERTER sobre la galleta y refrigerar por 2 horas 
                            5.DECORAR con ralladura de limón'
                            />
                        </div>
                        <div className="col-md-4">
                            <Card imgsrc={img2} title="Arroz Chino" 
                            titleR="Ingredientes:" 
                            ingredientes='•2 Tazas de arroz blanco previamente cocido
                            •1 Pechuga de pollo picada en cubos (si no tienes pollo puedes utilizar carne o cerdo)
                            •300 gr. de Langostinos o gambas crudas pelados
                            •250 gr. de Jamón troceado en cubos pequeños
                            •1/2 Pimiento rojo cortado en cuadros pequeños
                            •1 Tallo de apio cortado en cuadros pequeños
                            •2 Zanahorias cortadas en cuadros pequeños
                            •1 Huevo ( batir el huevo, hacer una tortilla en una sartén y trocear)
                            •1 Ramita de cebollín chino
                            •150 gr. de guisantes ( preferiblemente los congelados)
                            •120 gr. de brotes de soja
                            •Trozo pequeño de jengibre rallado (de unos 3 cm)
                            •2 Dientes de ajo rallados
                            •5 Cucharadas de salsa de soja
                            •2 Cucharadas de salsa de soja oscura
                            •Aceite vegetal
                            •1 Cucharada de aceite de sésamo'

                            bodyR="Pasos:"

                            pasos='Paso 1: Comenzamos la elaboración de nuestro arroz chino, 
                            para ello, en un wok bien caliente agregamos el aceite vegetal y el aceite de sésamo, 
                            incorporamos el pollo en cubos y en lo que esté cocinado, lo retiramos del wok y lo reservamos.
                            
                            Paso 2: En el mismo wok, agregamos un poco más de aceite e incorporamos 
                            la zanahoria, el apio y dejamos cocinar por 2 minutos, luego agregamos el ajo rallado,
                             el jengibre rallado, el pimiento rojo, removemos y cocinamos por 2 minutos más, agregamos los guisantes, 
                             los brotes de soja, la salsa de soja ligera y removemos nuevamente.

                             Paso 3: Incorporamos los langostinos y dejamos cocinar por 2 minutos, 
                             luego agregamos el pollo que teníamos reservado, el jamón, el huevo y 
                             removemos muy bien.

                             Paso 4: Agregamos el arroz e integramos 
                             junto al resto de ingredientes, luego agregamos la 
                             salsa de soja oscura y seguimos removiendo hasta que el arroz 
                             tome un color uniforme, finalmente agregamos el ajete (o cebollin chino) 
                             removemos y apartamos del fuego, servimos y ya tenemos listo nuestro rico arroz chino!! que aproveche!!
                            '
                            />
                        </div>
                        <div className="col-md-4">
                            <Card imgsrc={img3} title="Pollo al Brocoli" 
                            titleR="Ingredientes:" 
                            ingredientes='•1 pechuga de pollo cortada en trozos delgados
                            •300 g. de brócoli
                            •1 cebolla cortada en julianas
                            •2 dientes de ajo troceados
                            •2 y 1/2 cucharadas de salsa de soja ligera
                            •2 cucharadas de salsa de ostras
                            •1 y 1/2 cucharadas de aceite de sésamo
                            •1 y 1/2 cucharadas de maicena
                            •25 ml. de agua
                            •Aceite vegetal'

                            bodyR="Pasos:"

                            pasos='Paso 1: Comenzamos la preparación de nuestro pollo con brócoli estilo chino, para ello, en un bol agregamos la maicena, 
                            la salsa de soja e integramos, luego agregamos la salsa de ostras, el aceite de sésamo, mezclamos y reservamos.
                            
                            Paso 2: En una sartén a temperatura media, agregamos la cebolla, los ajos y cocinamos un par de minutos,
                             luego agregamos el pollo y cocinamos durante 8 minutos, agregamos el brócoli y cocinamos por 4 minutos más.

                             Paso 3: Finalmente agregamos la salsa china que teníamos reservada y removemos, luego agregamos los 25 ml. de agua, removemos y dejamos cocinar por 4 minutos más! Pasado los 4 minutos, 
                             retiramos del fuego y ya tenemos listo nuestro riquísimo pollo con brócoli estilo oriental!! que aproveche!!
                            '
                            />
                        </div>
                    </div>
                <br />
                </div>
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-4">
                            <Card imgsrc={img6} title="Pastel de tres leches" 
                            titleR="Ingredientes:" 
                            ingredientes='•3/4 De taza de aceite de maíz
                            •1 Cucharadita de esencia de vainilla
                            •5 Huevos
                            •1 Taza de Leche Evaporada CARNATION CLAVEL
                            •1/2 Taza de azúcar
                            •1 Cucharadita de polvo para hornear
                            •1 1/2 Tazas de harina para hot cakes
                            •1 Lata de Leche Condensada LA LECHERA
                            •1 1/2 Tazas de Leche Evaporada CARNATION CLAVEL
                            •1 Lata de Media Crema NESTLÉ
                            •1/2 Taza de crema batida
                            •1/2 Taza de fresas desinfectadas y cortadas en cuartos
                            •1/2 Taza de duraznos en almíbar cortados en cuartos
                            •4 Hojas de menta fresca desinfectadas'

                            bodyR="Pasos:"

                            pasos='1.  Horno precalentado a 180 °C.
                            2.  Para el pastel, licúa el aceite de maíz con la esencia de vainilla, 
                            los huevos, 1 taza de Leche Evaporada CARNATION CLAVEL, el azúcar, el polvo para hornear 
                            y la harina para hot cakes; vierte en un molde engrasado y enharinado. Hornea a 180 °C
                             de 45 a 50 minutos o hasta que al introducir un palillo este salga limpio.
                             
                            3.  Para la mezcla de tres leches, licúa la Leche Condensada LA LECHERA, 1 ½ tazas
                            de Leche Evaporada CARNATION CLAVEL y la Media Crema NESTLÉ.

                            4.  Desmolda el pastel, pica la superficie con un palillo y baña con la mezcla de tres leches; 
                            refrigera por 2 horas. Decora con la crema batida, las fresas, los duraznos y las hojas de menta. Ofrece.
                             '
                            />
                        </div>
                        <div className="col-md-4">
                            <Card imgsrc={img4} title="Sopa de tortilla" 
                            titleR="Ingredientes:" 
                            ingredientes='•600 gramos de jitomate
                            •1 chile guajillo seco sin semillas remojado en agua
                            •20 gramos de ajo
                            •50 gramos de cebolla blanca
                            •10 gramos de cilantro fresco
                            •30 ml de aceite
                            •1 litro de agua
                            •15 gramos de Knorr En Polvo Caldo De Vegetales
                            •8 tortillas cortadas en julianas y fritas'

                            bodyR="Pasos:"

                            pasos='1. Hervir el jitomate (tomate) con el chile, el ajo y la cebolla. Licuar y colar junto con el cilantro.
                            2. Calentar el aceite en una cacerola y freír el jitomate licuado por 3 minutos a fuego medio.
                            3. Verter el agua y el Knorr Caldo de Vegetales, después llevarlo a ebullición por 5 minutos.
                            4. Repartir una porción de tortillas en cada plato, agregar el caldo y servir.'
                            />
                        </div>
                        <div className="col-md-4">
                            <Card imgsrc={img5} title="Pozole" 
                            titleR="Ingredientes:" 
                            ingredientes='• 1 pollo entero, sin vísceras, picado

                            • ½ cebolla
                            
                            • 3 dientes de ajo
                            
                            • 4 cucharaditas de sal
                            
                            • 1 ramita de cilantro
                            
                            • 2 libras de carne de cerdo sin hueso
                            
                            • 1 libra de lomo de cerdo sin hueso
                            
                            • 2 libras de maíz para pozole, cocido y escurrido
                            
                            • 3 oz de orégano seco
                            
                            • 1 taza de cebolla picada
                            
                            • 3 oz de chile piquín molido
                            
                            • 5 limones, cortados a la mitad'

                            bodyR="Pasos:"

                            pasos='•Coloque el pollo en una olla grande y agregue la cebolla, el ajo, 1 cucharadita de sal y el cilantro. Cubra con 10 tazas de agua, deje que hierva y cocine a fuego lento/medio durante 20 minutos o hasta que el pollo esté tierno. Pase el pollo a un plato y deje enfriar. Una vez frío, quite la piel y los huesos y deshebre la carne. Reserve el caldo (debe de haber 8 tazas, aproximadamente).

                            •Coloque la carne de cerdo y la sal restante en una olla grande y cubra con 14 tazas de agua. Cuando el agua empiece a hervir, quite la grasa de la superficie y cocine a fuego medio durante una hora. Agregue el maíz para pozole y cocine durante 45 minutos. Retire del fuego y deshebre la carne. Colóquela nuevamente en la olla.
                            
                            •Agregue el caldo de pollo y el pollo desmenuzado en la olla, sazone al gusto, tape y cocine a fuego medio durante 20 minutos.
                            
                            •Para la salsa roja, remoje los chiles en agua caliente y cubra durante 20 minutos. Retire el agua y escurra. En una licuadora, haga puré la salsa LAS PALMAS® con el chile, la cebolla y el ajo. Caliente el aceite en una sartén a fuego alto. Agregue el puré de salsa y saltee durante 5 minutos. Baje el fuego y cocine por 30 minutos.
                            
                            •Agregue la salsa a la mezcla de pollo y cerdo. Sirva en platos hondos. Agregue orégano, cebolla picada, chile piquín y limón al gusto. '
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