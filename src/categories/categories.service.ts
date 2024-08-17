import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from 'src/entities/category';
import { NotFoundError } from 'rxjs';

@Injectable()
export class CategoriesService {
  async create(createCategoryDto: CreateCategoryDto) {
    const category = new Category();
    category.name = createCategoryDto.name;
    
    await category.save();

    return category;
  }

  async findAll() {
    const categories = await Category.find();

    return categories;
  }

  async findOne(id: number) {
    try {      
      const category = await Category.findOneByOrFail({ id });
    
      return category;
      
    } catch (error) {
      throw new NotFoundException('Category not found');
    }
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    try {
      const category = await Category.findOneByOrFail({ id });

      category.name = updateCategoryDto.name;

      await category.save();

      return category;
    } catch (error) {
      throw new NotFoundException('Category not found');
    }
  }

  async remove(id: number) {
    try {
      const category = await Category.findOneByOrFail({ id });

      await category.remove();

      return category;
    } catch (error) {
      throw new NotFoundException('Category not found');
    }
  }
}
