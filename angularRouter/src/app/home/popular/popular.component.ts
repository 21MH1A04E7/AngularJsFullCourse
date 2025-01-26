import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';
@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
})
export class PopularComponent implements OnInit {
  courseService = inject(CourseService);
  popularCourses: Course[] = [];
  router: Router = inject(Router);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.popularCourses = this.courseService.courses.filter(
      (c) => c.rating >= 4.5
    );
  }
  navigateToCourses() {
    //by default the path is absolute path
    // this.router.navigate(['Courses']);
    this.router.navigateByUrl('Courses');

    // this.router.navigate(['Courses'], { relativeTo: this.activatedRoute });
  }
}
