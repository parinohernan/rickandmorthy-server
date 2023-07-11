const http = require("http");

const PORT = 3001;
const characters = require("./utils/data.js")
console.log("iniciando servidor puerto: ", PORT);
const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); //para permitiracceso al servidor que cualquiera pueda hacer servidor "problemas de cords"
    
    if (req.url === "/"){
        res.writeHead(200, { 'Content-Type':'text/plain' }) //Le ponemos el status code y algunos pair-values en el header
	    res.end('Servidor rick and morty!\n');
    }
    
    if (req.url.includes("/rickandmorty/character")) {
        const id = Number(req.url.split("/").pop());//segmento la url por "/" y con el pop saco el ultimo elemento, LUEGO LO TRANSFORMO A NUMBER
       // const id= partes(-1);
        console.log("se llamo desde el id ",id,req.url);
        
        // METODO CON READFILE no lo probe
        // const html = fs.readFile(__dirname + "/utils/data.json", (err,data)=>{
        //     if (err) {
        //             console.log("404");
        //             res.writeHead(404, { "Content-Type":"text/plain" })
        //             return res.end("json not found")
        //             }
        //     else {
        //             const obj = data.find( obj => obj.id === id)
        //             console.log("200");
        //             res.writeHead(200, { "Content-Type":"application/json" });
        //             res.end(JSON.stringify(obj));
        //             }//
        // METODO CON EN JSON IMPORTADO no

        const character = characters.find( (char) => {
                return char.id === id});

        //console.log("200");
        res.writeHead(200, { "Content-Type":"application/json" });
        res.end(JSON.stringify(character));

    }
    
}).listen(PORT, "localhost");