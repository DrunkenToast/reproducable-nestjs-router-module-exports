import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RouterModule } from '@nestjs/core';
import { TestModule } from './test.module';
import { testRouteTree } from './route-tree';

@Module({
    imports: [
        // Register all routes
        RouterModule.register([testRouteTree]),
        // Import used modules by RouterModule
        TestModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
