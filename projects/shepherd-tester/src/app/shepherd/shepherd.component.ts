import { Component, AfterViewInit } from '@angular/core';
import { angularShepherdSVC } from '../../../../shepherd/src/lib/shepherd.service';
import { steps as defaultSteps, defaultStepOptions} from '../data';

@Component({
  selector: 'shepherd',
  templateUrl: './shepherd.component.html',
  styleUrls: ['./shepherd.component.css']
})
export class ShepherdComponent implements AfterViewInit {

  constructor(private angularShepherdSVC: angularShepherdSVC) { }

  ngAfterViewInit() {
    this.angularShepherdSVC.defaultStepOptions = defaultStepOptions;
    this.angularShepherdSVC.disableScroll = true;
    this.angularShepherdSVC.modal = true;
    this.angularShepherdSVC.confirmCancel = false;
    this.angularShepherdSVC.addSteps(defaultSteps);
    this.angularShepherdSVC.start();
  }
}
