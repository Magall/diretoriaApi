import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('mensalista_pelada')
export class MensalistaPelada {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('id_mensalista')
  idMensalistaLancador: number;

  @Column('id_pelada')
  idPeladaLancador: number;

  @Column('dirigente')
  dirigente: boolean;
}
