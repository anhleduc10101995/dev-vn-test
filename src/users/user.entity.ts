import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ObjectType, Field } from '@nestjs/graphql';
import { Work } from "../works/work.entity";

@ObjectType({ description: 'user' })
@Entity()
export class User {

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
    @Column( { nullable: true,  })
    filename: string;

    @Field()
    @Column("double")
    views: number;

    @Field()
    @Column( { nullable: true,  })
    isPublished: boolean;

    @Field(type => Work, { nullable: true,  })
    @OneToMany(() => Work, work => work.user)    
    works: Work[];
}