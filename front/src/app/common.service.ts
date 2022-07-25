import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private url="http://localhost:8080/api/task";
  constructor(private http:HttpClient) { }
  create(body:any){
    return this.http.post(this.url,body);
  }
  update(id:any,body:any){
    return this.http.put(`${this.url}/${id}`,body);
  }
  getAll(){
    return this.http.get(this.url);
  }
  getById(id:any){
    return this.http.get(`${this.url}/${id}`);
  }
  deleteById(id:any){
    return this.http.delete(`${this.url}/${id}`);
  }
}
