import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  list: any;

  constructor(private httpClient: HttpClient) { }

  findAll(): Course[] {
    return [
      { _id:'1', name:'Bootcamp - SpringBoot 3.0 (DevSuperior)', category: 'Back-end'}
    ];
  }
}
