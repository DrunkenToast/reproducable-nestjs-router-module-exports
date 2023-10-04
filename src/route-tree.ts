import { RouteTree } from '@nestjs/core';
import { TestModule } from './test.module';

export const testParam = 'testMessage';

export const testRouteTree: RouteTree = {
    path: 'test',
    module: TestModule,
};
