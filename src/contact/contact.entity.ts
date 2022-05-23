import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinTable } from "typeorm";
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType({ description: 'contact' })
@Entity()
export class Contact {

    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column({
        length: 100
    })
    name: string;

    @Field()
    @Column("text")
    company: string;

    @Field()
    @Column("text")
    email: string;

    @Field()
    @Column("text")
    phone: string;

    @Field()
    @Column()
    subject: string;

    @Field()
    @Column()
    budget: string;

    @Field()
    @Column()
    details: string;

    
}