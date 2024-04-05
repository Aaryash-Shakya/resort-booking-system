import { RoomStatus, RoomType } from "@/enums/rooms.enum";
import { Rooms } from "@/interfaces/rooms.interface";
import { IsNotEmpty } from "class-validator";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { BookingEntity } from "./booking.entity";
import { Booking } from "@/interfaces/booking.interface";

@Entity()
export class RoomsEntity extends BaseEntity implements Rooms {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  @IsNotEmpty()
  name: string;

  @Column()
  description?: string;

  @Column()
  @IsNotEmpty()
  price?: number;

  @Column()
  @IsNotEmpty()
  capacity?: number;

  @Column({
    type: "enum",
    enum: RoomStatus,
  })
  @IsNotEmpty()
  status?: string;

  @Column({
    type: "enum",
    enum: RoomType,
  })
  @IsNotEmpty()
  type?: string;

  @Column()
  @IsNotEmpty()
  top: string;

  @Column()
  @IsNotEmpty()
  left: string;

  @Column({
    default: null,
  })
  @ManyToOne(() => BookingEntity, (booking) => booking.id, { nullable: true })
  bookingId: number;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  @DeleteDateColumn()
  deletedAt: Date;
}
