import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { StudentService } from './student.service';
import { CreateStudentInput } from './create-student.input';

@Resolver(of => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  // @Query(returns => LessonType)
  // lesson(@Args('id') id: string) {
  //   return this.lessonService.getLesson(id);
  // }

  // @Query(returns => [LessonType])
  // lessons() {
  //   return this.lessonService.getLessons()
  // }

  @Mutation(returns => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }
}
