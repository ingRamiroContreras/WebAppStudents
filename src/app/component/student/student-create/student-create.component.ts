import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit, OnDestroy {

  sub: Subscription;
  students: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router, private studentService: StudentService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params.id;

      if (id) {
        this.studentService.getById(id).subscribe(res => {
          if (res) {
            this.students = res
          } else {
            console.log(`Car with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        }
        );
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/student-list']);
  }

  save(form: NgForm) {
    this.studentService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(id: string) {
    this.studentService.remove(id).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }


}
