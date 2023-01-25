import {Column, Entity, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class Card {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    text: string

    @Column({name: "image_path"})
    imagePath: string

    @Column({name: "audio_path"})
    audioPath: string
}