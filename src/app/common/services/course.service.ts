import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {DataService} from "./data.service";
import {Course} from '../models/course.model';

@Injectable()
export class CourseService extends DataService {
  private _courseUrl = "http://localhost:7000/course";
  private retrievedCourse: string;
  private createdCourse: any;


  constructor(http: HttpClient) {
    super(http);
    this.retrievedCourse = "";
  }

    getCourse() {
    this.get<Course>(this._courseUrl).subscribe(response => {
      if (response === null) {
        this.retrievedCourse = "";
      } else {
        console.log("Retrieved coursename: " + response.courseName)
        this.retrievedCourse = response.courseName;
      }
      }, error => {
        alert('Error when retrieving course!');
        console.log(error);
      })
    return this.retrievedCourse;
  }

  createCourse(courseName: string) {
    this.post({"courseName": courseName}, this._courseUrl)
    .subscribe(response => {
      console.log("Created course: " + courseName)
        this.createdCourse = response;
        alert("Course saved")
      }, error => {
        alert('Error when creating course!');
        console.log(error);
      });
  }
}
