import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
//import { share } from 'rxjs/operator/share';
import { catchError, map, tap } from 'rxjs/operators';
//import { MessageService } from './message.service';

import { Brag } from '../../models/interfaces/brag';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class  StatusProvider {

  private bragsUrl = 'http://www.ringa.tech/focus';  // URL to web api
  
  constructor(
    private http: HttpClient,
  ) { }
  //  Remember to implement =>private messageService: MessageService
  /** GET brags from the server */
  getBrags(): Observable<Brag[]> {
    return this.http.get<Brag[]>(this.bragsUrl)
      .pipe(
        tap(brags => this.log('fetched brags')),
        catchError(this.handleError('getBrags', []))
      );
  }

  /** GET brag by id. Return `undefined` when id not found */
  getBragNo404<Data>(id: number): Observable<Brag> {
    const url = `${this.bragsUrl}/?id=${id}`;
    return this.http.get<Brag[]>(url)
      .pipe(
        map(brags => brags[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} brag id=${id}`);
        }),
        catchError(this.handleError<Brag>(`getBrag id=${id}`))
      );
  }

  /** GET brag by id. Will 404 if id not found */
  getBrag(id: number): Observable<Brag> {
    const url = `${this.bragsUrl}/${id}`;
    return this.http.get<Brag>(url).pipe(
      tap(_ => this.log(`fetched brag id=${id}`)),
      catchError(this.handleError<Brag>(`getBrag id=${id}`))
    );
  }

  /* GET brags whose name contains search term */
  searchBrags(term: string): Observable<Brag[]> {
    if (!term.trim()) {
      // if not search term, return empty brag array.
      return of([]);
    }
    return this.http.get<Brag[]>(`${this.bragsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found brags matching "${term}"`)),
      catchError(this.handleError<Brag[]>('searchUsers', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new brag to the server */
  addBrag(brag: Brag): Observable<Brag> {
    return this.http.post<Brag>(this.bragsUrl, brag, httpOptions).pipe(
      tap((brag: Brag) => this.log(`added brag w/ id=${brag.id}`)),
      catchError(this.handleError<Brag>('addBrag'))
    );
  }

  /** DELETE: delete the brag from the server */
  deleteBrag(brag: Brag | number): Observable<Brag> {
    const id = typeof brag === 'number' ? brag : brag.id;
    const url = `${this.bragsUrl}/${id}`;

    return this.http.delete<Brag>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted brag id=${id}`)),
      catchError(this.handleError<Brag>('deleteBrag'))
    );
  }

  /** PUT: update the brag on the server */
  updateBrag(brag: Brag): Observable<any> {
    return this.http.put(this.bragsUrl, brag, httpOptions).pipe(
      tap(_ => this.log(`updated brag id=${brag.id}`)),
      catchError(this.handleError<any>('updateBrag'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for brag consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
   // console.log('implentation pending');
    // this.messageService.add(`HeroService: ${message}`);
  }
}
