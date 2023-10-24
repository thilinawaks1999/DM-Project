import { Body, Controller, Get, Post } from '@nestjs/common';
import { PoemsService } from './poems.service';
import { SearchBody } from 'src/types/search-body.type';

@Controller('poems')
export class PoemsController {
  constructor(private readonly poemsService: PoemsService) {}

  @Post('search')
  async search(@Body() body: SearchBody): Promise<{
    hits: Record<string, any>[];
    aggs: Record<string, any>;
  }> {
    return await this.poemsService.search(body);
  }

  @Get('all-poems')
  async getAllPoems(): Promise<Record<string, any>[][]> {
    return await this.poemsService.getAllPoems();
  }

  @Get('all-poems-names')
  async getAllPoemNames(): Promise<Record<string, any>[]> {
    return await this.poemsService.getAllPoemsNames();
  }

  @Post('poem-by-name')
  async getPoemByName(
    @Body('poemName') poemName: string,
  ): Promise<Record<string, any>[]> {
    return await this.poemsService.getPoemByName(poemName);
  }

  @Get('poems-with-metaphors')
  async getPoemsWithMetaphors(): Promise<Record<string, any>[][]> {
    return await this.poemsService.getPoemsWithMetaphors();
  }

  @Get('all-poets-names')
  async getAllPoetsNames(): Promise<Record<string, any>[]> {
    return await this.poemsService.getPoetNames();
  }

  @Post('poems-by-poet')
  async getPoemsByPoet(
    @Body('poetName') poetName: string,
  ): Promise<Record<string, any>[]> {
    return await this.poemsService.getPoemsByPoet(poetName);
  }

  @Get('years')
  async getYears(): Promise<Record<string, any>[]> {
    return await this.poemsService.getYears();
  }

  @Post('poems-by-year')
  async getPoemsByYear(
    @Body('year') year: string,
  ): Promise<Record<string, any>[]> {
    return await this.poemsService.getPoemsByYear(year);
  }

  @Post('poems-by-poet-and-year')
  async getPoemsByPoetAndYear(
    @Body('poetName') poetName: string,
    @Body('year') year: string,
  ): Promise<Record<string, any>[]> {
    return await this.poemsService.getPoemsByPoetAndYear(poetName, year);
  }

  @Post('poems-by-poet-and-name')
  async getPoemsByPoetAndName(
    @Body('poetName') poetName: string,
    @Body('poemName') poemName: string,
  ): Promise<Record<string, any>[]> {
    return await this.poemsService.getPoemsByPoetAndPoemName(
      poetName,
      poemName,
    );
  }

  @Post('poems-by-year-and-name')
  async getPoemsByYearAndName(
    @Body('year') year: string,
    @Body('poemName') poemName: string,
  ): Promise<Record<string, any>[]> {
    return await this.poemsService.getPoemsByYearAndPoemName(year, poemName);
  }

  @Post('poems-by-poet-and-year-and-name')
  async getPoemsByPoetAndYearAndName(
    @Body('poetName') poetName: string,
    @Body('year') year: string,
    @Body('poemName') poemName: string,
  ): Promise<Record<string, any>[]> {
    return await this.poemsService.getPoemsByPoetAndYearAndPoemName(
      poetName,
      year,
      poemName,
    );
  }

  @Post('years-by-poet')
  async getYearsByPoet(
    @Body('poetName') poetName: string,
  ): Promise<Record<string, any>[]> {
    return await this.poemsService.getYearsByPoet(poetName);
  }

  @Post('poems-by-poet')
  async getYearsByPoemName(
    @Body('poetName') poetName: string,
  ): Promise<Record<string, any>[]> {
    return await this.poemsService.getPoemNamesByPoet(poetName);
  }
}
