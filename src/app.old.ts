import fs from 'fs';
import { argv, cwd } from 'process';
import { yarg } from './config/plugins/yargs.plugin';
const {b:base,l:limit,s:show} = yarg;

const calcularMultiplicacion = (base:number,multiplicador:number) => {

    return base * multiplicador;
}

const tablaDel= (base:number,limite:number) => {
    let mensaje = '';
   
    mensaje += "=========================\n"
    mensaje += "Tabla del " + " numero"
    mensaje += "\n=========================\n"

    for (let index = 1; index <=limite; index++) {
        
        mensaje+= `\n${base} x ${index} =  ${calcularMultiplicacion(base,index)}`;

        
    }


    return mensaje;
}



const grabarArchivo = (numero:number,limite:number,show?:boolean) => {
    const archivo = tablaDel(numero,limite);
    if(show) console.log(archivo);
    const path = process.cwd()+'\\output\\';
    if(!fs.existsSync(path)){
        fs.mkdirSync(path);
    }
    fs.writeFileSync(path+`tabla-${numero}.txt`,archivo,'utf-8');
}

const main = async (numero:number,limite:number,show:boolean)=> {
   
    grabarArchivo(numero,limite,show);
}
(async() => {

    await main(base,limit,show);
})()