import { Component, HostListener } from '@angular/core';
import { ApiImagesService } from '../api-images.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { EventType } from '@angular/router';
@Component({
  selector: 'app-card-uploader',
  templateUrl: './card-uploader.component.html',
  styleUrls: ['./card-uploader.component.scss'],
  
})
export class CardUploaderComponent {
  error!: string;
  dragAreaClass!: string;
  draggedFiles: any; 
  objectURL!: string;
  progress: number = 0;
  link: any 
  code: any
 
  constructor (private app:ApiImagesService){}
  onFileChange(event: any) {
    let files: FileList = event.target.files;
    this.saveFiles(files);
  }
  ngOnInit() {
    this.dragAreaClass = "dragarea";
  }
  @HostListener("dragover", ["$event"]) onDragOver(event: any) {
    this.dragAreaClass = "droparea";
    event.preventDefault();
  }
  @HostListener("dragenter", ["$event"]) onDragEnter(event: any) {
    this.dragAreaClass = "droparea";
    event.preventDefault();
  }
  @HostListener("dragend", ["$event"]) onDragEnd(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
  }
  @HostListener("dragleave", ["$event"]) onDragLeave(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
  }
  @HostListener("drop", ["$event"]) onDrop(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files) {
      let files: FileList = event.dataTransfer.files;
      this.saveFiles(files);
    }
  }

   saveFiles(files: FileList) {

    if (files.length > 1) this.error = "Only one file at time allow";
    else {
      this.error = "";
      console.log(files[0].size,files[0].name,files[0].type);
      this.draggedFiles = files;
      this.objectURL = URL.createObjectURL(files[0]);
      console.log(files);
      this.onUpload(files[0])
    }
  }
  onUpload(files: any): void{
      this.app.upload(files).pipe().subscribe((event: HttpEvent<any>)=>{
         this.link = event
         this.code = this.link.body
        switch (event.type) {
          case HttpEventType.Sent:
            console.log('Request has been made!');
            break;
      
          case HttpEventType.UploadProgress:
            // Compute and show the % done:
            this.progress = event.total ? Math.round(100 * event.loaded / event.total) : 0;
            console.log(`Uploaded! ${this.progress}%`);
            
            break;
      
          case HttpEventType.Response:
            
          default:
            
        }
      })
      
  }

}
