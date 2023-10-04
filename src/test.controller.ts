import { Controller, Get, Param } from '@nestjs/common';
import { testParam } from './route-tree';
// Uncomment below and comment above to use the workaround and get intended behaviour
// import { testParam } from './workaround-param';

@Controller()
export class TestController {
    @Get(':' + testParam)
    getTest(@Param(testParam) test: string): string {
        return 'This is a test message! Param: ' + test;
    }
}
