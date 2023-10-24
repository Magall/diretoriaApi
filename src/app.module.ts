import { MensalistaAVencer } from './financeiro/models/MensalistaAVencer.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeladaModule } from './pelada/pelada.module';
import { DataSource } from 'typeorm';
import { pelada } from './pelada/models/pelada.entity';
import { RecebimentoModule } from './financeiro/financeiro.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'magal',
      password: 'root',
      database: 'diretoria',
      entities: [pelada, MensalistaAVencer],
      synchronize: false,
    }),
    PeladaModule,
    RecebimentoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
