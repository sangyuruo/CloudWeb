import { Injectable } from '@angular/core';
import {Http,Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class SmartTableService {

  data = [{
    id: 1,
    firstName: 'Mark',
    lastName: 'Otto',
    username: '@mdo',
    email: 'mdo@gmail.com',
    age: '28',
  }, {
    id: 2,
    firstName: 'Jacob',
    lastName: 'Thornton',
    username: '@fat',
    email: 'fat@yandex.ru',
    age: '45',
  }, {
    id: 3,
    firstName: 'Larry',
    lastName: 'Bird',
    username: '@twitter',
    email: 'twitter@outlook.com',
    age: '18',
  }, {
    id: 4,
    firstName: 'John',
    lastName: 'Snow',
    username: '@snow',
    email: 'snow@gmail.com',
    age: '20',
  }, {
    id: 5,
    firstName: 'Jack',
    lastName: 'Sparrow',
    username: '@jack',
    email: 'jack@yandex.ru',
    age: '30',
  }, {
    id: 6,
    firstName: 'Ann',
    lastName: 'Smith',
    username: '@ann',
    email: 'ann@gmail.com',
    age: '21',
  }, {
    id: 7,
    firstName: 'Barbara',
    lastName: 'Black',
    username: '@barbara',
    email: 'barbara@yandex.ru',
    age: '43',
  }, {
    id: 8,
    firstName: 'Sevan',
    lastName: 'Bagrat',
    username: '@sevan',
    email: 'sevan@outlook.com',
    age: '13',
  }, {
    id: 9,
    firstName: 'Ruben',
    lastName: 'Vardan',
    username: '@ruben',
    email: 'ruben@gmail.com',
    age: '22',
  }, {
    id: 10,
    firstName: 'Karen',
    lastName: 'Sevan',
    username: '@karen',
    email: 'karen@yandex.ru',
    age: '33',
  }, {
    id: 11,
    firstName: 'Mark',
    lastName: 'Otto',
    username: '@mark',
    email: 'mark@gmail.com',
    age: '38',
  }, {
    id: 12,
    firstName: 'Jacob',
    lastName: 'Thornton',
    username: '@jacob',
    email: 'jacob@yandex.ru',
    age: '48',
  }, {
    id: 13,
    firstName: 'Haik',
    lastName: 'Hakob',
    username: '@haik',
    email: 'haik@outlook.com',
    age: '48',
  }, {
    id: 14,
    firstName: 'Garegin',
    lastName: 'Jirair',
    username: '@garegin',
    email: 'garegin@gmail.com',
    age: '40',
  }, {
    id: 15,
    firstName: 'Krikor',
    lastName: 'Bedros',
    username: '@krikor',
    email: 'krikor@yandex.ru',
    age: '32',
  }, {
    'id': 16,
    'firstName': 'Francisca',
    'lastName': 'Brady',
    'username': '@Gibson',
    'email': 'franciscagibson@comtours.com',
    'age': 11,
  }, {
    'id': 17,
    'firstName': 'Tillman',
    'lastName': 'Figueroa',
    'username': '@Snow',
    'email': 'tillmansnow@comtours.com',
    'age': 34,
  }, {
    'id': 18,
    'firstName': 'Jimenez',
    'lastName': 'Morris',
    'username': '@Bryant',
    'email': 'jimenezbryant@comtours.com',
    'age': 45,
  }, {
    'id': 19,
    'firstName': 'Sandoval',
    'lastName': 'Jacobson',
    'username': '@Mcbride',
    'email': 'sandovalmcbride@comtours.com',
    'age': 32,
  }, {
    'id': 20,
    'firstName': 'Griffin',
    'lastName': 'Torres',
    'username': '@Charles',
    'email': 'griffincharles@comtours.com',
    'age': 19,
  }, {
    'id': 21,
    'firstName': 'Cora',
    'lastName': 'Parker',
    'username': '@Caldwell',
    'email': 'coracaldwell@comtours.com',
    'age': 27,
  }, {
    'id': 22,
    'firstName': 'Cindy',
    'lastName': 'Bond',
    'username': '@Velez',
    'email': 'cindyvelez@comtours.com',
    'age': 24,
  }, {
    'id': 23,
    'firstName': 'Frieda',
    'lastName': 'Tyson',
    'username': '@Craig',
    'email': 'friedacraig@comtours.com',
    'age': 45,
  }, {
    'id': 24,
    'firstName': 'Cote',
    'lastName': 'Holcomb',
    'username': '@Rowe',
    'email': 'coterowe@comtours.com',
    'age': 20,
  }, {
    'id': 25,
    'firstName': 'Trujillo',
    'lastName': 'Mejia',
    'username': '@Valenzuela',
    'email': 'trujillovalenzuela@comtours.com',
    'age': 16,
  }, {
    'id': 26,
    'firstName': 'Pruitt',
    'lastName': 'Shepard',
    'username': '@Sloan',
    'email': 'pruittsloan@comtours.com',
    'age': 44,
  }, {
    'id': 27,
    'firstName': 'Sutton',
    'lastName': 'Ortega',
    'username': '@Black',
    'email': 'suttonblack@comtours.com',
    'age': 42,
  }, {
    'id': 28,
    'firstName': 'Marion',
    'lastName': 'Heath',
    'username': '@Espinoza',
    'email': 'marionespinoza@comtours.com',
    'age': 47,
  }, {
    'id': 29,
    'firstName': 'Newman',
    'lastName': 'Hicks',
    'username': '@Keith',
    'email': 'newmankeith@comtours.com',
    'age': 15,
  }, {
    'id': 30,
    'firstName': 'Boyle',
    'lastName': 'Larson',
    'username': '@Summers',
    'email': 'boylesummers@comtours.com',
    'age': 32,
  }, {
    'id': 31,
    'firstName': 'Haynes',
    'lastName': 'Vinson',
    'username': '@Mckenzie',
    'email': 'haynesmckenzie@comtours.com',
    'age': 15,
  }, {
    'id': 32,
    'firstName': 'Miller',
    'lastName': 'Acosta',
    'username': '@Young',
    'email': 'milleryoung@comtours.com',
    'age': 55,
  }, {
    'id': 33,
    'firstName': 'Johnston',
    'lastName': 'Brown',
    'username': '@Knight',
    'email': 'johnstonknight@comtours.com',
    'age': 29,
  }, {
    'id': 34,
    'firstName': 'Lena',
    'lastName': 'Pitts',
    'username': '@Forbes',
    'email': 'lenaforbes@comtours.com',
    'age': 25,
  }, {
    'id': 35,
    'firstName': 'Terrie',
    'lastName': 'Kennedy',
    'username': '@Branch',
    'email': 'terriebranch@comtours.com',
    'age': 37,
  }, {
    'id': 36,
    'firstName': 'Louise',
    'lastName': 'Aguirre',
    'username': '@Kirby',
    'email': 'louisekirby@comtours.com',
    'age': 44,
  }, {
    'id': 37,
    'firstName': 'David',
    'lastName': 'Patton',
    'username': '@Sanders',
    'email': 'davidsanders@comtours.com',
    'age': 26,
  }, {
    'id': 38,
    'firstName': 'Holden',
    'lastName': 'Barlow',
    'username': '@Mckinney',
    'email': 'holdenmckinney@comtours.com',
    'age': 11,
  }, {
    'id': 39,
    'firstName': 'Baker',
    'lastName': 'Rivera',
    'username': '@Montoya',
    'email': 'bakermontoya@comtours.com',
    'age': 47,
  }, {
    'id': 40,
    'firstName': 'Belinda',
    'lastName': 'Lloyd',
    'username': '@Calderon',
    'email': 'belindacalderon@comtours.com',
    'age': 21,
  }, {
    'id': 41,
    'firstName': 'Pearson',
    'lastName': 'Patrick',
    'username': '@Clements',
    'email': 'pearsonclements@comtours.com',
    'age': 42,
  }, {
    'id': 42,
    'firstName': 'Alyce',
    'lastName': 'Mckee',
    'username': '@Daugherty',
    'email': 'alycedaugherty@comtours.com',
    'age': 55,
  }, {
    'id': 43,
    'firstName': 'Valencia',
    'lastName': 'Spence',
    'username': '@Olsen',
    'email': 'valenciaolsen@comtours.com',
    'age': 20,
  }, {
    'id': 44,
    'firstName': 'Leach',
    'lastName': 'Holcomb',
    'username': '@Humphrey',
    'email': 'leachhumphrey@comtours.com',
    'age': 28,
  }, {
    'id': 45,
    'firstName': 'Moss',
    'lastName': 'Baxter',
    'username': '@Fitzpatrick',
    'email': 'mossfitzpatrick@comtours.com',
    'age': 51,
  }, {
    'id': 46,
    'firstName': 'Jeanne',
    'lastName': 'Cooke',
    'username': '@Ward',
    'email': 'jeanneward@comtours.com',
    'age': 59,
  }, {
    'id': 47,
    'firstName': 'Wilma',
    'lastName': 'Briggs',
    'username': '@Kidd',
    'email': 'wilmakidd@comtours.com',
    'age': 53,
  }, {
    'id': 48,
    'firstName': 'Beatrice',
    'lastName': 'Perry',
    'username': '@Gilbert',
    'email': 'beatricegilbert@comtours.com',
    'age': 39,
  }, {
    'id': 49,
    'firstName': 'Whitaker',
    'lastName': 'Hyde',
    'username': '@Mcdonald',
    'email': 'whitakermcdonald@comtours.com',
    'age': 35,
  }, {
    'id': 50,
    'firstName': 'Rebekah',
    'lastName': 'Duran',
    'username': '@Gross',
    'email': 'rebekahgross@comtours.com',
    'age': 40,
  }, {
    'id': 51,
    'firstName': 'Earline',
    'lastName': 'Mayer',
    'username': '@Woodward',
    'email': 'earlinewoodward@comtours.com',
    'age': 52,
  }, {
    'id': 52,
    'firstName': 'Moran',
    'lastName': 'Baxter',
    'username': '@Johns',
    'email': 'moranjohns@comtours.com',
    'age': 20,
  }, {
    'id': 53,
    'firstName': 'Nanette',
    'lastName': 'Hubbard',
    'username': '@Cooke',
    'email': 'nanettecooke@comtours.com',
    'age': 55,
  }, {
    'id': 54,
    'firstName': 'Dalton',
    'lastName': 'Walker',
    'username': '@Hendricks',
    'email': 'daltonhendricks@comtours.com',
    'age': 25,
  }, {
    'id': 55,
    'firstName': 'Bennett',
    'lastName': 'Blake',
    'username': '@Pena',
    'email': 'bennettpena@comtours.com',
    'age': 13,
  }, {
    'id': 56,
    'firstName': 'Kellie',
    'lastName': 'Horton',
    'username': '@Weiss',
    'email': 'kellieweiss@comtours.com',
    'age': 48,
  }, {
    'id': 57,
    'firstName': 'Hobbs',
    'lastName': 'Talley',
    'username': '@Sanford',
    'email': 'hobbssanford@comtours.com',
    'age': 28,
  }, {
    'id': 58,
    'firstName': 'Mcguire',
    'lastName': 'Donaldson',
    'username': '@Roman',
    'email': 'mcguireroman@comtours.com',
    'age': 38,
  }, {
    'id': 59,
    'firstName': 'Rodriquez',
    'lastName': 'Saunders',
    'username': '@Harper',
    'email': 'rodriquezharper@comtours.com',
    'age': 20,
  }, {
    'id': 60,
    'firstName': 'Lou',
    'lastName': 'Conner',
    'username': '@Sanchez',
    'email': 'lousanchez@comtours.com',
    'age': 16,
  }];

  constructor(private http: Http){}
  getData() {
    return this.data;
  }

    getDataMeterCategoryInfo(){
        return this.http.get('/emcloudmi/api/meter-category-infos')
            .map(res => res.json())
    }
    getDataMeterInfo(){
        return this.http.get('/emcloudmi/api/meter-infos')
            .map(res => res.json())
    }
    getDataMeterStatus(){
        return this.http.get('/emcloudmi/api/meter-statuses')
            .map(res => res.json())
    }
    getDataMultiwaySwitchInfo(){
        return this.http.get('/emcloudmi/api/multiway-switch-infos')
            .map(res => res.json())
    }
    getDataMultiwaySwitch(){
        return this.http.get('/emcloudmi/api/multiway-switches')
            .map(res => res.json())
    }
    getDataAlarmRule(){
        return this.http.get('/emcloudarc/api/alarm-rules')
            .map(res => res.json())
    }
    getDataRuleAttributes(){
        return this.http.get('/emcloudarc/api/rule-attributes')
            .map(res => res.json())
    }
    getDataMeterRule(){
        return this.http.get('/emcloudarc/api/meter-rules')
            .map(res => res.json())
    }
    getDataResource(){
        return this.http.get('/emcloudresource/api/resources')
            .map(res => res.json())
    }


    deleteMeterCategoryInfo(id: number): Observable<Response> {
        return this.http.delete(`${'/emcloudmi/api/meter-category-infos'}/${id}`);
    }
    deleteMeterInfo(id: number): Observable<Response> {
        return this.http.delete(`${'/emcloudmi/api/meter-infos'}/${id}`);
    }
    deleteMeterStatus(id: number): Observable<Response> {
        return this.http.delete(`${'/emcloudmi/api/meter-statuses'}/${id}`);
    }
    deleteMultiwaySwitch(id: number): Observable<Response> {
        return this.http.delete(`${'/emcloudmi/api/multiway-switches'}/${id}`);
    }
    deleteMultiwaySwitchInfo(id: number): Observable<Response> {
        return this.http.delete(`${'/emcloudmi/api/multiway-switch-infos'}/${id}`);
    }
    deleteAlarmRule(id: number): Observable<Response> {
        return this.http.delete(`${'/emcloudarc/api/alarm-rules'}/${id}`);
    }
    deleteRuleAttributes(id: number): Observable<Response> {
        return this.http.delete(`${'/emcloudarc/api/rule-attributes'}/${id}`);
    }
    deleteMeterRule(id: number): Observable<Response> {
        return this.http.delete(`${'/emcloudarc/api/meter-rules'}/${id}`);
    }
    deleteResource(id: number): Observable<Response> {
        return this.http.delete(`${'/emcloudresource/api/resources'}/${id}`);
    }
    createMeterCategoryInfo(date) {
        return this.http.post('/emcloudmi/api/meter-category-infos',date).map( res =>res.json());
    }
    updateMeterCategoryInfo(date):  Observable<Response>{
        return this.http.put('/emcloudmi/api/meter-category-infos',date).map( res =>res.json());
    }
    createMeterInfo(date) {
        return this.http.post('/emcloudmi/api/meter-infos',date).map( res =>res.json());
    }
    updateMeterInfo(date):  Observable<Response>{
        return this.http.put('/emcloudmi/api/meter-infos',date).map( res =>res.json());
    }
    createMeterStatus(date) {
        return this.http.post('/emcloudmi/api/meter-statuses',date).map( res =>res.json());
    }
    updateMeterStatus(date):  Observable<Response>{
        return this.http.put('/emcloudmi/api/meter-statuses',date).map( res =>res.json());
    }
    createMultiwaySwitch(date) {
        return this.http.post('/emcloudmi/api/multiway-switches',date).map( res =>res.json());
    }
    updateMultiwaySwitch(date):  Observable<Response>{
        return this.http.put('/emcloudmi/api/multiway-switches',date).map( res =>res.json());
    }
    createMultiwaySwitchInfo(date) {
        return this.http.post('/emcloudmi/api/multiway-switch-infos',date).map( res =>res.json());
    }
    updateMultiwaySwitchInfo(date):  Observable<Response>{
        return this.http.put('/emcloudmi/api/multiway-switch-infos',date).map( res =>res.json());
    }
    createAlarmRule(date) {
        return this.http.post('/emcloudarc/api/alarm-rules',date).map( res =>res.json());
    }
    updateAlarmRule(date):  Observable<Response>{
        return this.http.put('/emcloudarc/api/alarm-rules',date).map( res =>res.json());
    }
    createMeterRule(date) {
        return this.http.post('/emcloudarc/api/meter-rules',date).map( res =>res.json());
    }
    updateMeterRule(date):  Observable<Response>{
        return this.http.put('/emcloudarc/api/meter-rules',date).map( res =>res.json());
    }
    createRuleAttributes(date) {
        return this.http.post('/emcloudarc/api/rule-attributes',date).map( res =>res.json());
    }
    updateRuleAttributes(date):  Observable<Response>{
        return this.http.put('/emcloudarc/api/rule-attributes',date).map( res =>res.json());
    }
    createResource(date) {
        return this.http.post('/emcloudresource/api/resources',date).map( res =>res.json());
    }
    updateResource(date):  Observable<Response>{
        return this.http.put('/emcloudresource/api/resources',date).map( res =>res.json());
    }

  getData1(){
      return this.http.get('/emcloudou/api/companies')
          .map(res => res.json())
  }
    delete(id: number): Observable<Response> {
        return this.http.delete(`${'/emcloudou/api/companies'}/${id}`);
    }





    create(data){

        /*try{
            return this.http.post('/emcloudou/api/companies', data).map( res => res.json() );
        }catch(ex) {
            console.log(ex);
        }*/
        return this.http.post('/emcloudou/api/companies', data).map( res => res.json() );
    }

    update(data): Observable<Response> {
        return this.http.put('/emcloudou/api/companies', data).map( res => res.json() );
    }


}


