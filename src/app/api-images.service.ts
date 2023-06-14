import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ApiImagesService {

  constructor(private http:HttpClient) { }

  url: string = "http://127.0.0.1:8000/uploadfile"

  upload(image: File){
    const formdata = new FormData()
    formdata.append('file',image)
   return this.http.post(this.url, formdata,{reportProgress: true, observe: 'events' })
  }
  
    
}
