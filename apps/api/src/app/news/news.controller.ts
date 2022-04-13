import { Body, Controller, Get, Header, Post } from '@nestjs/common';

import { IsNotEmpty } from 'class-validator';
import { resolve } from 'path';

export class CreateNewsDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}

interface INews {
  id: number;
  title: string;
  description: string;
  createdAt: number;
}

@Controller('news')
export class NewsController {
  newsCache: INews[] = [];

  // С кешированием
  // @Get()
  // async getNews() {

  //   if (this.newsCache.length > 0) {
  //     return new Promise(resolve => {
  //       resolve(this.newsCache);
  //     })
  //   } else {
  //     return new Promise(resolve => {

  //       const news: INews[] = Object.keys([...Array(20)])
  //         .map(key => Number(key) + 1)
  //         .map(n => ({
  //           id: n,
  //           title: `Важная новость ${n}`,
  //           description: (rand => ([...Array(rand(1000))].map(() => rand(10 ** 16).toString(36).substring(rand(10))).join(' ')))(max => Math.ceil(Math.random() * max)),
  //           createdAt: Date.now()
  //         }))

  //       this.newsCache = [...news]
  //       resolve(this.newsCache);
  //     })
  //   }
  // }

  // Без кеширования
  @Get()
  async getNews() {
    return new Promise(resolve => {
      const news = Object.keys([...Array(20)])
        .map(key => Number(key) + 1)
        .map(n => ({
          id: n,
          title: `Важная новость ${n}`,
          description: (rand => ([...Array(rand(1000))].map(() => rand(10 ** 16).toString(36).substring(rand(10))).join(' ')))(max => Math.ceil(Math.random() * max)),
          createdAt: Date.now()
        }))
      resolve(news);
      // setTimeout(() => {
      //   resolve(news);
      // }, 100)
    });
  }

  @Post()
  @Header('Cache-Control', 'none')
  create(@Body() peaceOfNews: CreateNewsDto) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Новость успешно создана', peaceOfNews);
        resolve({ id: Math.ceil(Math.random() * 1000), ...peaceOfNews });
      }, 100)
    });
  }
}
