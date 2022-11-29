const Server = require("./models/config");

const main = () => {
    const apps = new Server();

    apps.listen();
    
}

main();