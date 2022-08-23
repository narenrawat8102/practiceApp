import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ViewChildComponent } from '../subjectComponents/view-child/view-child.component';

// To use jquery
declare var $: any;

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
})
export class SubjectComponent implements OnInit, AfterViewInit {
  userName: string = 'Aditya Rawat';

  // ViewChild
  @ViewChild('box') box!: ElementRef<any>;
  // To get the reference of child component i.e. ViewChildComponent from the parent component
  @ViewChild(ViewChildComponent) child!: ViewChildComponent;

  // HostListener
  @HostListener('click') myClick() {
    alert('Clicked');
  }

  @HostListener('window:scroll', ['$event']) myScroll() {
    console.log('Scrolling');
  }

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  // We use ngAfterViewInit life cycle hook for view child
  ngAfterViewInit(): void {
    // with view child
    // this.box.nativeElement.style.backgroundColor = 'orange';
    // this.box.nativeElement.innerHTML = 'This is view child';

    // with renderer
    this.renderer.setStyle(this.box.nativeElement, 'backgroundColor', 'yellow');
  }

  changeChildProperty() {
    this.child.userName = 'Virat Rawat';
  }

  // To get the access of child component's method from the parent component
  callChildMethod() {
    this.child.clickMe();
  }
}
