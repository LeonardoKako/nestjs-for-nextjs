import { Controller, Get, Param } from '@nestjs/common';
import { CustomParseIntPipe } from 'src/common/pipes/custom-parse-int-pipe';

@Controller('user')
export class UserController {
  @Get(':id')
  findOne(@Param('id', CustomParseIntPipe) id: number) {
    console.log(id, typeof id);
    return 'olá do controler: #' + id;
  }
}
