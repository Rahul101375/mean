import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { FormBuilder, FormGroup,NgForm } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  data:any=[];
  serachInput!:FormGroup;
  constructor(private apiService:CommonService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.apiService.getAll().subscribe((res:any)=>{
      console.log("adsfd",res);
      this.data=res.data
    });
    this.serachInput=this.fb.group({
      searchBy:[''],
      searchString:['']
      
    })
  }
  edit(id:any){
    console.log("id",id)
    this.router.navigateByUrl(`create/${id}`);
  }
  delete(id:any){
    this.apiService.deleteById(id).subscribe((res:any)=>{
      if(res){
        this.ngOnInit();
      }
    },(error:any)=>{
      alert("delete api not working");
    })
  }
  search(){
    const key=this.serachInput?.value.searchBy;
    const value=this.serachInput?.value.searchString
    if(key==="name"){
     this.data=this.data.filter((item:any)=>{if(item.name===value) return item})
    }
    else if(key==="department"){
      this.data=this.data.filter((item:any)=>{if(item.department===value) return item})
     }
     else if(key==="salary"){
      this.data=this.data.filter((item:any)=>{if(item.salary===value) return item})
     }
     else{
      return;
     }
  }
}
