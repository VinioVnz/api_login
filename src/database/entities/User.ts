import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User{
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "varchar"})
    nome: string

    @Column({type: "varchar", unique: true})
    email: string

    @Column({type: "varchar"})
    password: string

    @Column()
    createdAt: Date
}