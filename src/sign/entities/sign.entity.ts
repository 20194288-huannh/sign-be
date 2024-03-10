import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sign {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  x: number;

  @Column({ type: 'int' })
  y: number;

  @Column({ type: 'int' })
  width: number;

  @Column({ type: 'int' })
  height: number;

  @Column({ type: 'int' })
  number_page: number;

  @Column({ type: 'varchar' })
  url: string;

  @Column({ type: 'int' })
  size: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  full_path: string;

  @Column({ type: 'varchar' })
  user_id: string;

  @Column({ type: 'varchar' })
  sha256_original_file: string;

  @Column({ type: 'int' })
  priority: number;

  @Column({ type: 'enum', enum: ['Name', 'Text', 'Signature', 'Checkbox', 'Radio', 'Date'] })
  type: string;
}