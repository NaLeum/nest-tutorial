import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [MoviesModule],
  // url을 가져오고 함수를 실행
  // express의 라우터
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
