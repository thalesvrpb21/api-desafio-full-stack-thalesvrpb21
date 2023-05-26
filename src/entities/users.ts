import { getRounds, hashSync } from "bcryptjs"
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany, BeforeInsert, 
BeforeUpdate } from "typeorm"
import { Contact } from "./contact"

@Entity("users")
class User {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ length: 70 })
    name: string

    @Column({ length: 50, unique: true })
    email: string

    @Column({ length: 120 })
    password: string
    
    @Column({ length: 13, unique: true })
    phone: string

    @Column({ default: false })
    admin: boolean

    @CreateDateColumn({ type: "date"})
    createdAt: string

    @OneToMany(() => Contact, (contact) => contact.user)
    contacts: Array<Contact>

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const isEncrypted = getRounds(this.password)

        if(!isEncrypted){
            this.password = hashSync(this.password, 10)
        }
    }

}

export { User }