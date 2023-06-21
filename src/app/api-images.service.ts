import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ApiImagesService {

  constructor(private http:HttpClient) { }

  url: string = "https://fastapi-i0h2.onrender.com/cargar"

  upload(image: File){
    const formdata = new FormData()
    formdata.append('file',image)
   return this.http.post(this.url, formdata,{reportProgress: true, observe: 'events' })
  }
  
    
}
