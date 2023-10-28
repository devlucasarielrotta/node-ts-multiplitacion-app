import { yarg } from "./config/plugins/yargs.plugin";
import { ServerApp } from "./presentation/server-app";



const main = async () => {
    const {b:base,l:limit,s:showTable,n:name,d:destination} = yarg;
    ServerApp.run({base,limit,showTable,name,destination});
}

(async() => {
    await main();
    
    
})();
