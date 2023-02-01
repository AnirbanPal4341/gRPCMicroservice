import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const microserviceOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ['math', 'user'],
    protoPath: [
      join(__dirname, '../src/proto/app.proto'),
      join(__dirname, '../src/proto/user.proto'),
    ],
  },
};
