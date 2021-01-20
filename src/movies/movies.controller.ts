import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'this all movie';
  }
  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie made after: ${searchingYear} `;
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return `this return one movie id:${id}`;
  }

  @Post()
  create(@Body() Data) {
    console.log(Data);
    return Data;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `this will delete a movie id:${id}`;
  }

  @Patch(':id')
  path(@Param('id') id: string, @Body() updateData) {
    return {
      updateMovie: id,
      ...updateData,
    };
  }
}
