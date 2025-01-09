import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  http = inject(HttpClient);
  post(api:string,data:any){
    return this.http.post(environment.apiUrl+api,data) 
  };
  get(api:string){
    return this.http.get(environment.apiUrl+api)
  };
  put(api:string,data:any){
    return this.http.put(environment.apiUrl+api,data) 
  };
  delete(api:string){
    return this.http.delete(environment.apiUrl+api)
  };
}
