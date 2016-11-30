import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from "rxjs";

/**
 * This is the studyplan resolver.  It returns a dummy object.
 */
@Injectable()
export class StudyPlanResolver implements Resolve<any> {

  constructor() {}
  
  /**
   * Resolves the data
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
      return {};
  }
}