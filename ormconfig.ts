import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';

config();

const configService = new ConfigService();

export default new DataSource({
    type: 'mysql',
    port: configService.get('DATABASE_PORT'),
    host: configService.get('DATABASE_HOST'),
    username: configService.get('DATABASE_USER'),
    password: configService.get('DATABASE_PASSWORD'),
    database: configService.get('DATABASE_NAME'),
    namingStrategy: new SnakeNamingStrategy(),
    synchronize: false,    
    entities: [        
        './src/entities/*{.ts,.js}'
    ],
    migrations: [
        './src/migrations/*{.ts,.js}'
    ],
});
