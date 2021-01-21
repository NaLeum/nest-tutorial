import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [],
  // url을 가져오고 함수를 실행
  // express의 라우터
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}
