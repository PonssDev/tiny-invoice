import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  public formData = new BehaviorSubject<any>(null)
  
  public formData$ = this.formData.asObservable()

  public getFormData(data: any): void{
    this.formData.next(data)
  }
}
