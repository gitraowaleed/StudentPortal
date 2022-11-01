import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TranslateService } from '@ngx-translate/core';

import Swal from 'sweetalert2';

import { endPoints } from '../../../../core/global/end-Points';
import { GlobalService } from '../../../../core/global/_services/global.service';

@Component({
  selector: 'kt-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  model: any = {};
  isSaving: boolean = false;
  isLoading: boolean = true;
  list: any[] = [];
  courseList: any[];
  dtOptions: any = {
    pagingType: 'simple_numbers',
    pageLength: 15,
    destroy: true,
    dom: 'frtip',
    lengthChange: false,
    ordering: false,
    language: {
      'aria': {
        'sortAscending': ': activate to sort column ascending',
        'sortDescending': ': activate to sort column descending'
      },
      'emptyTable': this.translate.instant('DNODATA'),
      'info': this.translate.instant('TOTALDATA'),
      'infoEmpty': '',
      'infoFiltered': '',
      'lengthMenu': '_MENU_ entries',
      'search': '', // this.translate.instant('DATATABLE.TABLESEARCH') + ' : ',
      'searchPlaceholder': this.translate.instant('SEARCH'),
      'zeroRecords': this.translate.instant('NORECORD'),
      'paginate': {
        'first': '<i class="fa fa-backward" aria-hidden="true"></i>',
        'last': '<i class="fa fa-forward" aria-hidden="true"></i>',
        'next': '<i class="fa fa-angle-right"></i>',
        'previous': '<i class="fa fa-angle-left"></i>'
      }
    }
  };;
  constructor(private globalService: GlobalService,
    private modalService: NgbModal,
    private translate: TranslateService,
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.getStudent();
    this.getCourses();
  }

  openModel(content, item?) {
    debugger
    this.model = item ? item : {};
    this.modalService.open(content, { centered: false });
  }


  getStudent() {
    this.isLoading = true;
    this.globalService.getAll('Student/GetAll')
      .subscribe((serviceRespons) => {
        this.list = serviceRespons;
        this.isLoading = false;
        this.cdr.detectChanges();
      });

  }

  getCourses() {
    this.globalService.getAll('Course/GetCourses')
      .subscribe((serviceRespons) => {
        this.courseList = serviceRespons;
        this.cdr.detectChanges();
      });

  }

  addUpdate() {
    this.model.CourseId = 1;
    this.globalService.updateModel('Student/AddUpdate', this.model)
      .subscribe((serviceRespons) => {
        if (serviceRespons == 200) {
          Swal.fire({
            title: 'Success',
            text: 'Successfully Saved.',
          });
          this.modalService.dismissAll();
          this.getStudent();
        }
        else {
          Swal.fire({
            title: 'Error',
            text: 'Not Saved. Please check and submit again',
          })
        }
        this.isSaving = false;
      });
  }

  deleteStudent(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.globalService.getAll(`Student/Delete/${id}`)
          .subscribe((serviceRespons) => {
            if (serviceRespons == 200) {
              //Show Success Mesg
              Swal.fire({
                title: 'Success',
                text: 'Deleted Successfully.',
              });
              this.getStudent();
            }
            else {
              Swal.fire({
                title: 'Error',
                text: 'Not Delete. Please check and try again',
              })
            }
            this.isSaving = false;
          });
      }
    })
  }

}
