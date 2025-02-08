import { Component, inject, OnInit } from '@angular/core';
import { Course } from '../Models/course';
import { CourseService } from '../Services/course.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  constructor() {}
  coursesService = inject(CourseService);
  activatedRoute = inject(ActivatedRoute);
  searchString: string;
  AllCourses: Course[];
  ngOnInit(): void {
    // this.searchString = this.activatedRoute.snapshot.queryParams['search'];
    //it will return undefine
    /*this.searchString =
      this.activatedRoute.snapshot.queryParamMap.get('search');
    if (
      this.searchString === null ||
      this.searchString === undefined ||
      this.searchString === ''
    ) {
      this.AllCourses = this.coursesService.courses;
    } else {
      this.AllCourses = this.coursesService.courses.filter((course) =>
        course.title.toLowerCase().includes(this.searchString.toLowerCase())
      );
    }*/
    //  this is observable
    //  this.activatedRoute.queryParams
    this.activatedRoute.queryParamMap.subscribe((data) => {
      this.searchString = data.get('search');
      if (
        this.searchString === null ||
        this.searchString === undefined ||
        this.searchString === ''
      ) {
        // this.coursesService.getAllcourses().subscribe({
        //   next: (data: Course[]) => {
        //     this.AllCourses = data;
        //   },
        // });
        //accessing the courses data form the resolve
        this.AllCourses = this.activatedRoute.snapshot.data['courses'];
      } else {
        this.AllCourses = this.coursesService.courses.filter((course) =>
          course.title.toLowerCase().includes(this.searchString.toLowerCase())
        );
      }
    });
  }
}
