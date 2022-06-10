import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  emps=[

    {"empid":"101" , "empname":"lekhana" , "salary":30000},
    {"empid":"102" , "empname":"lekhana1" , "salary":50000}

  ]

  constructor() { }

  getEmps(){
        return this.emps
  }
  addEmps(emp:any){
    this.emps.push(emp)
       return this.emps;
  }
  deleteEmps(id:String)
  {
    this.emps.forEach((ele,index)=>{
      if(ele.empid==id)
         this.emps.splice(index,1)
    })
    return this.emps
  }
}
