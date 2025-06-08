import { AbstractEntity } from '@/database/entities/abstract.entity';
import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v7 } from 'uuid';

@Entity('attachments')
export class AttachmentEntity extends AbstractEntity {
  constructor(data?: Partial<AttachmentEntity>) {
    super();
    this.id = v7();
    Object.assign(this, data);
  }
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  url: string;

  @Column()
  extention: string;
}
