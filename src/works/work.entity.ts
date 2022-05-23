import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinTable } from "typeorm";
import { ObjectType, Field } from '@nestjs/graphql';
import { User } from "../users/user.entity";

@ObjectType({ description: 'work' })
@Entity()
export class Work {

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
    description: string;

    @Field()
    @Column()
    filename: string;

    @Field()
    @Column()
    thumbnail: string;

    @Field()
    @Column()
    title: string;

    @Field()
    @Column("double")
    views: number;

    @Field()
    @Column()
    isPublished: boolean;

    @Field(type => User, { nullable: true,  })
    @ManyToOne(() => User, user => user.works)
    @JoinTable()
    user: User;
}