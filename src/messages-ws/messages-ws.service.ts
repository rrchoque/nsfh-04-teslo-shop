import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';

interface ConnectedClients {
  [id: string]: {
    socket: Socket;
  };
}
@Injectable()
export class MessagesWsService {
  private connectedClients: ConnectedClients = {};

  async registerClient(client: Socket) {
    this.connectedClients[client.id] = {
      socket: client,
    };
  }

  removeClient(clientId: string) {
    delete this.connectedClients[clientId];
  }

  getConnectedClients(): number {
    return Object.keys(this.connectedClients).length;
  }
}
