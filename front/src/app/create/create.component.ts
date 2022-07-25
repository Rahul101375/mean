import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,NgForm } from '@angular/forms';
import { Router,ActivatedRoute  } from '@angular/router';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  createForm!:FormGroup ;
   id:any;
   getData:any;
  constructor(private formBuilder:FormBuilder,private apiService:CommonService,private router:Router,private route:ActivatedRoute) { 
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('ids',this.id)
  }

  ngOnInit(): void {
    this.createForm= this.formBuilder.group({
      name:[''],
      department:[''],
      salary:[]
    })
    if(this.id){
      this.apiService.getAll().subscribe((res:any)=>{
        let d=res.data.find((item:any)=>{if(item._id==this.id)return item})
        if(d){
          this.createForm.patchValue({
            name: d.name,
            department:d.department,
            salary:d.salary
          });
        }
      },(err:any)=>{
        alert("Get api not failed ")
      })
    }
  }
  submit(){
    if(this.id){
      let payload=this.createForm?.value;
      if(payload){
        this.apiService.update(this.id,payload).subscribe((res:any)=>{
          if(res){
            alert("success api");
            this.router.navigate(['list'])
            this.reset();
          }
        },(error)=>{
          alert('failed api');
        });
      }
    }
    else{
      let payload=this.createForm?.value;
      if(payload){
        this.apiService.create(payload).subscribe((res:any)=>{
          if(res){
            alert("success api");
            this.router.navigate(['list']);
            this.reset();
          }
        },(error)=>{
          alert('failed api');
        })
      }
    
    }
    
  }
  reset(){
    this.createForm?.controls['name'].reset();
      this.createForm?.controls['department'].reset();
      this.createForm?.controls['salary'].reset();
  }
}
