"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const app = (0, fastify_1.default)({ logger: true });
;
;
;
app.get('/', (request, reply) => {
    const { username, password } = request.query;
    reply.send({
        code: 200,
        message: 'success',
        body: {
            username,
            password
        }
    });
});
app.listen({ port: 3000, host: '127.0.0.1' }, (err, address) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    // app.log.info(`server listening on ${address}`);
});
