import { IsNotEmpty, Length } from "class-validator";

export class CreateCategoryDto {
    @IsNotEmpty({message: "Name is required"})
    @Length(3, 200)
    name: string;
}
