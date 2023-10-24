import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('selectMensalistasDevedoresPeriodo')
export class MensalistaAVencer {
  @Column()
  nome: string;

  @Column()
  telefone: string;

  @Column()
  email: string;

  @PrimaryColumn()
  id_pelada: number;

  @Column()
  id_mensalista: number;
}
