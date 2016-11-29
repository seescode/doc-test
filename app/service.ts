import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';


/**
 * This is some google books service thing
 */
@Injectable()
export class GoogleBooksService {

  /** a private variable of some sort */
  private API_PATH: string = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: Http) {}

  /** 
   * let's you search books 2
   * @param query - the query title 
   */
  searchBooks(query: string) {
    return null;
  }

  /**
   * how the heck
   * @param volumeId - please work
   */
  retrieveBook(volumeId: string) {
    return null;
  }
}