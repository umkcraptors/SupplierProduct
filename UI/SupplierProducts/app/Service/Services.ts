import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class ConsumerService{
    private _url: string = "http://192.168.1.128:8090/mvp-service-webapp/getConsumer?consumerId=1 ";
    constructor(private _http: Http) {}

    getConsumers(){
        return this._http.get(this._url)
        .map((response:Response) => response.json())
        .catch(this._errorHandler); 
    }
    _errorHandler(error: Response){
        console.error(error);
        return Observable.throw("Server not found");
    }
}
//http://192.168.1.128:8090/mvp-service-webapp/getConsumer?consumerId=1