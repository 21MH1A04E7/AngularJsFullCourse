import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
})
export class CourseDetailComponent implements OnInit, OnDestroy {
  selectedCourse: Course;
  courseId: number;
  courseService: CourseService = inject(CourseService);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  paramMapObs: Subscription;
  ngOnInit(): void {
    // this will return the inital value
    // this.courseId = this.activatedRoute.snapshot.params['id'];
    //it will return the string
    // this.courseId = +this.activatedRoute.snapshot.paramMap.get('id');
    // console.log(this.courseId);
    // this.selectedCourse = this.courseService.courses.find(
    //   (course) => course.id === this.courseId
    // );
    //observable
    //it wil return the updated value
    // this.activatedRoute.params.subscribe((data) => {
    //   this.courseId = +data['id'];
    //   console.log(data);
    //   console.log('course', this.courseId);
    //   this.selectedCourse = this.courseService.courses.find(
    //     (course) => this.courseId == course.id
    //   );
    // });
    //paramMap
    //when the value of route parameter change then the it wil subscribe
    this.paramMapObs = this.activatedRoute.paramMap.subscribe((data) => {
      this.courseId = +data.get('id');
      console.log(data);
      console.log('course', this.courseId);
      this.selectedCourse = this.courseService.courses.find(
        (course) => this.courseId == course.id
      );
    });
  }
  ngOnDestroy() {
    this.paramMapObs.unsubscribe();
  }
}
