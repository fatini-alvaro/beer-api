import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'src/entities/category';
import { Beer } from 'src/entities/beer';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Beer,
      Category
    ]),
  ],
  exports: [CategoriesService],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
