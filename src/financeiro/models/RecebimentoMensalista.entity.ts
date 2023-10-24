import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('recebimento_mensalista')
export class RecebimentoMensalista {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('id_mensalista_lancador')
  idMensalistaLancador: number;

  @Column('id_pelada_lancador')
  idPeladaLancador: string;

  @Column('id_mensalista_favorecido')
  idMensalistaFavorecido: number;

  @Column('id_pelada_favorecido')
  idPeladaFavorecido: string;

  @Column('data_lancamento')
  dataLancamento: Date;
}
