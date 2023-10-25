import { Module } from "@nestjs/common";
import { PoemsService } from "./poems.service";
import { PoemsController } from "./poems.controller";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ElasticsearchModule } from "@nestjs/elasticsearch";

@Module({
  imports: [
    ConfigModule,
    ElasticsearchModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        node: configService.get("ELASTICSEARCH_NODE"),
        auth: {
          username: configService.get("ELASTICSEARCH_USERNAME"),
          password: configService.get("ELASTICSEARCH_PASSWORD"),
        },
        maxRetries: configService.get("ELASTICSEARCH_MAX_RETRIES"),
        requestTimeout: configService.get("ELASTICSEARCH_REQ_TIMEOUT"),
        //tls reject unauthorized
        tls: {
          rejectUnauthorized: false,
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [PoemsController],
  providers: [PoemsService],
})
export class PoemsModule {}
