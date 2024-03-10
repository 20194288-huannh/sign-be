import { User } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class SignatureDocument {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', unique: true, nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  path: string;

  @ManyToOne(() => User, (user) => user.signatureDocuments)
  @JoinColumn({ name: 'user_id' })
  user?: User;
}