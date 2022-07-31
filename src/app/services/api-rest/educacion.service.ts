import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  url: string = "https://ap-mvg.herokuapp.com/api";

  
  
  constructor(private http: HttpClient) {}

  getById(id: number): Observable<any> {
	  return this.http.get(this.url + `/educacion/${id}`);
	}
  getAll(): Observable<any> {
    console.log("pasa por getAll?")
	  return this.http.get(this.url+'/educacion');
	}
  
  update(id: number, educacion: any): Observable<any>{
    return this.http.put(this.url + `/educacion/${id}`, educacion);
  }

  
  delete(id: number): Observable<any>{
    return this.http.delete(this.url + `/educacion/${id}`);
   
  }
 save(educacion:any) : Observable<any>{
   return this.http.post(this.url + `/educacion/`, educacion);
 }
}


