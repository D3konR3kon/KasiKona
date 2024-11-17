import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  api_url_bookings = "/api/get_booking_units_request";
  api_url_binaryObject = "/api/binary_object_request";
  api_url_unitype = "/api/unit_type_info_request";
  
  

  

  constructor(private http: HttpClient) { }

  getAllBookings(): Observable<any>{

    const body = { hg_code: "demo", payload: {} }

    const headers = new HttpHeaders({
      'Authorization': JSON.stringify({
        "Client Login ID": "CiMSO.dev",
        "Client Password": "CiMSO.dev",
        "hg_pass": "nGXUF1i^57I^ao^o",
      }),
      'Content-Type': 'application/json',
     
    });
    

    return this.http.post(this.api_url_bookings,body, {headers})
  }

  getImages(id:  any ):Observable<any>{
    const body = { hg_code: "demo", payload: {"Object UniqueID":id} }

    const headers = new HttpHeaders({
      'Authorization': JSON.stringify({
        "Client Login ID": "CiMSO.dev",
        "Client Password": "CiMSO.dev",
        "hg_pass": "nGXUF1i^57I^ao^o",
      }),
      'Content-Type': 'application/json',
     
    });
    

    return this.http.post(this.api_url_binaryObject,body, {headers, responseType: 'text'})
  }

  getUnitId():Observable<any>{
    const body = { hg_code: "demo", payload: {} }

    const headers = new HttpHeaders({
      'Authorization': JSON.stringify({
        "Client Login ID": "CiMSO.dev",
        "Client Password": "CiMSO.dev",
        "hg_pass": "nGXUF1i^57I^ao^o",
      }),
      'Content-Type': 'application/json',
     
    });
    

    return this.http.post(this.api_url_unitype,body, {headers})
  }



}
