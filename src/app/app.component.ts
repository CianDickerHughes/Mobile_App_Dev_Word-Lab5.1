import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentService } from './services/student.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  students:any = [];
  constructor(private studentSevice:StudentService) {

  }

  ngOnInit(): void {
      this.studentSevice.GetStudentData().subscribe(
        (data)=>{
          this.students = data.students;
        }
      );
  }

}
