import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PoemsModule } from "./poems/poems.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [PoemsModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
