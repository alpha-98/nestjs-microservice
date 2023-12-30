import { Module } from '@nestjs/common';
import {
  ConfigService,
  ConfigModule as NestjsConfigModule,
} from '@nestjs/config';
import { envSchema } from './env/env.schema';

@Module({
  imports: [
    NestjsConfigModule.forRoot({
      envFilePath: `./libs/common/src/config/env/.env.${
        process.env.NODE_ENV || 'development'
      }`,
      validationSchema: envSchema,
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
