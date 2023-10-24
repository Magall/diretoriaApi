import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class pelada {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  mensalidade: number;

  @Column()
  endereco: string;

  @Column()
  horario: string;
}
