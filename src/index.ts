import {Client, Message, VoiceConnection} from "discord.js";

export class Bot {
    public client: Client;
    private token: string;
    public connection: VoiceConnection;

    constructor (token: string) {
        this.client = new Client();

        this.client.on('message', this.handleMessage.bind(this));
        this.token = token;
    }

    public async login() {
        return this.client.login(this.token);
    }

    public async handleMessage(message: Message) {
        const command = this.parseCommand(message);

    }

    private parseCommand(message: Message) {
    }
}