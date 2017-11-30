const fetch = require('isomorphic-fetch')
const PATH = "http://localhost:8080/Commands";

function CommandService(){
    
    this.submit = (cmd)=>{return fetch(PATH, {
        method: 'POST',
        headers: {'content-type' : 'application/json'},
        body: JSON.stringify(cmd)
        })
        
    }
}
export default new CommandService();