import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GUEST, PROJECT } from 'src/common/models/models';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { GuestSchema } from './schema/guest.schema';
import { ProjectSchema } from './schema/project.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: PROJECT.name,
        useFactory: () => {
          return ProjectSchema.plugin(require('mongoose-autopopulate'));
        },
      },
      {
        name: GUEST.name,
        useFactory: () => {
          return GuestSchema;
        },
      },
    ]),
    ,
  ],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
