import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Category } from "./category";

@Entity('beers')
export class Beer extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 200,
        nullable: false,
    })
    name: string;

    @Column({
        default: false,
    })
    premium: boolean;

    @Column({
        type: 'float',
        default: 0,
    })
    price: number;

    @ManyToOne(() => Category, category => category.beers)
    category: Category;

    @CreateDateColumn({
        type: 'timestamp',
    })
    createdAt: Date;

    @UpdateDateColumn({
        type: 'timestamp',
    })
    updatedAt: Date;
}