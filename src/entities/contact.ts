import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from "typeorm"
import { User } from "./users"

@Entity("contacts")
class Contact {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ length: 70 })
    name: string

    @Column({ length: 50, unique: true })
    email: string

    @Column({ length: 13, unique: true })
    phone: string

    @CreateDateColumn({ type: "date"})
    createdAt: string

    @ManyToOne(() => User, (user) => user.contacts)
    user: User

}

export { Contact }