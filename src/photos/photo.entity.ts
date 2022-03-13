import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType({ description: 'photo' })
@Entity()
export class Photo {

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
    @Column("double")
    views: number;

    @Field()
    @Column()
    isPublished: boolean;
}