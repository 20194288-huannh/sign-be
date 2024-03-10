import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Document {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  name_signed: string;

  @Column({ type: 'int', nullable: true })
  size: number;

  @Column({ type: 'int', nullable: true })
  size_signed: number;

  @Column({ type: 'varchar', nullable: false })
  full_path: string;

  @Column({ type: 'varchar', nullable: true })
  full_path_signed: string;

  @Column({ type: 'varchar', nullable: false })
  url: string;

  @Column({ type: 'varchar', nullable: true })
  url_signed: string;

  @Column({ type: 'varchar', nullable: false })
  sha256_original_file: string;

  @Column({ type: 'varchar', nullable: true })
  sha256_file: string;

  @Column({ type: 'varchar', nullable: true })
  contract_address: string;

  @Column({ type: 'varchar', nullable: true })
  transaction_hash: string;

  @Column({ type: 'varchar', nullable: true })
  smart_contract_address: string;

  @Column({ type: 'enum', enum: ['Completed', 'Draft', 'Void', 'In-Progress', 'Sent'], default: 'Draft' })
  status: string;

  @Column({ type: 'varchar', nullable: false })
  user_id: string;

  @Column({ type: 'json', nullable: true })
  receiver: any[];

  @Column({ type: 'json', nullable: true })
  signature: any[];

  @Column({ type: 'varchar', nullable: true })
  type_document: string;

  @Column({ type: 'json', nullable: true })
  audits: any[];
}