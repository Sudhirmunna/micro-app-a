import {   ApplicationRef,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  EventEmitter,
  Injector, OnInit, Output, Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {
  profileForm: FormGroup;
  @Output() emitProfileEvent = new EventEmitter<any>();
  // @Output() open: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

    this.profileForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    });

  }

  onSubmit() {
    this.emitProfileEvent.emit(this.profileForm.value);
    console.warn(this.profileForm.value);
  }


 }
