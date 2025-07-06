import {createServer} from 'http';
import Router from './router';
import {Server, version, mime} from 'node-static';

const router = new Router();

const defaultHeaders = {"Content-Type": "text/plain"};

class SkillShareServer {
    constructor (talks){
        this.talks = talks;
        this.version = 0;
        this.waiting = [];

        const fileServer = new Server('./public');
        this.server = createServer((request, response) => {
            let resolved = router.resolve(this, request);
            if(resolved){
                resolved.catch(error => {
                    if(error.status != null)
                        return error;
                    return {body: String(error), status: 500};
                }).then(({
                    body,
                    status = 200,
                    headers = defaultHeaders
                }) => {
                    response.writeHead(status, headers);
                    response.end(body);
                });
            }else{
                fileServer.serve(request, response);
            }
        });
    }

    start(port){
        this.server.listen(port);
    }

    stop(){
        this.server.close();
    }
}