<<<<<<< HEAD
/*import { TestBed, inject } from '@angular/core/testing';
=======
// import { TestBed, inject } from '@angular/core/testing';
>>>>>>> ec099d5459004e788902752d1429a920e824b97b

// import { CandidateService } from './candidate.service';
// // import { CANDIDATES } from '../../mock-data/mock-candidates';
// import { defer } from 'rxjs/observable/defer';
// import { Candidate } from '../../entities/Candidate';

// export function asyncData<T>(data: T) {
//   return defer(() => Promise.resolve(data));
// }
// import { CANDIDATES } from '../../mock-data/mock-candidates';
<<<<<<< HEAD
import { defer } from 'rxjs/observable/defer';
import { Candidate } from '../../entities/Candidate';

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}
// import { CANDIDATES } from '../../mock-data/mock-candidates';


describe('CandidateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CandidateService]
    });
  });

  it('should be created', inject([CandidateService], (service: CandidateService) => {
    expect(service).toBeTruthy();
  }));

<<<<<<< HEAD

  



  it('getCandidates() should make an HTTP GET request, and return the candidates that it fetched',() =>{
      let httpClientSpyOnGet: { get: jasmine.Spy };
=======
  let httpClientSpyOnGet: { get: jasmine.Spy };
>>>>>>> 0ad90442ba2c455df8d883b8905d4965ea73f9c5
  let httpClientSpyOnPost: { post: jasmine.Spy };
  let httpClientSpyOnPut: {put: jasmine.Spy };
  let httpClientSpyOnDelete: { delete: jasmine.Spy };
  let candidateService: CandidateService;
  // const alertsService: AlertsService = new AlertsService();



  fit('getCandidates() should make an HTTP GET request, and return the candidates that it fetched',() =>{
    httpClientSpyOnGet = jasmine.createSpyObj('http', ['get']);
    candidateService = new CandidateService(<any> httpClientSpyOnGet);

    //const expected: Candidate[] = CANDIDATES;

    // httpClientSpyOnGet.get.and.returnValue(asyncData(expected));
    //
    // candidateService.getCandidates().subscribe(
    //   candidates => expect(candidates).toEqual(expected, 'expected candidates')
    // );

    expect(httpClientSpyOnGet.get.calls.count()).toBe(1, 'one call');
  });

  it('getCandidate() should make an HTTP GET request, and return the candidate that it fetched', ()=>{
    httpClientSpyOnGet = jasmine.createSpyObj('http', ['get']);
    candidateService = new CandidateService(<any> httpClientSpyOnGet);

    //const expected: Candidate = CANDIDATES[2];

    // httpClientSpyOnGet.get.and.returnValue(asyncData(expected));
    //
    // candidateService.getCandidate(expected).subscribe(
    //   candidate => expect(candidate).toEqual(expected, 'expected candidate')
    // );

    expect(httpClientSpyOnGet.get.calls.count()).toBe(1, 'one call');
  });

  it('updateCandidate() should make an HTTP PUT request, and return the candidates that is altered', ()=>{
    // httpClientSpyOnGet = jasmine.createSpyObj('http', ['put']);
    // candidateService = new CandidateService(<any> httpClientSpyOnGet, alertsService);
    // CANDIDATES[2].lastName = "Alexander";
    // const expected: Candidate = CANDIDATES[0];
=======
// import { defer } from 'rxjs/observable/defer';
// import { Candidate } from '../../entities/Candidate';

// export function asyncData<T>(data: T) {
//   return defer(() => Promise.resolve(data));
// }

// describe('CandidateService', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [CandidateService]
//     });
//   });

//   fit('should be created', inject([CandidateService], (service: CandidateService) => {
//     expect(service).toBeTruthy();
//   }));

//   let httpClientSpyOnGet: { get: jasmine.Spy };
//   let httpClientSpyOnPost: { post: jasmine.Spy };
//   let httpClientSpyOnPut: {put: jasmine.Spy };
//   let httpClientSpyOnDelete: { delete: jasmine.Spy };
//   let candidateService: CandidateService;
//   const alertsService: AlertsService = new AlertsService();



//   fit('getCandidates() should make an HTTP GET request, and return the candidates that it fetched',() =>{
//     httpClientSpyOnGet = jasmine.createSpyObj('http', ['get']);
//     candidateService = new CandidateService(<any> httpClientSpyOnGet, alertsService);

//     //const expected: Candidate[] = CANDIDATES;

//     // httpClientSpyOnGet.get.and.returnValue(asyncData(expected));
//     //
//     // candidateService.getCandidates().subscribe(
//     //   candidates => expect(candidates).toEqual(expected, 'expected candidates')
//     // );

//     expect(httpClientSpyOnGet.get.calls.count()).toBe(1, 'one call');
//   });

//   fit('getCandidate() should make an HTTP GET request, and return the candidate that it fetched', ()=>{
//     httpClientSpyOnGet = jasmine.createSpyObj('http', ['get']);
//     candidateService = new CandidateService(<any> httpClientSpyOnGet, alertsService);

//     //const expected: Candidate = CANDIDATES[2];

//     // httpClientSpyOnGet.get.and.returnValue(asyncData(expected));
//     //
//     // candidateService.getCandidate(expected).subscribe(
//     //   candidate => expect(candidate).toEqual(expected, 'expected candidate')
//     // );

//     expect(httpClientSpyOnGet.get.calls.count()).toBe(1, 'one call');
//   });

//   fit('updateCandidate() should make an HTTP PUT request, and return the candidates that is altered', ()=>{
//     // httpClientSpyOnGet = jasmine.createSpyObj('http', ['put']);
//     // candidateService = new CandidateService(<any> httpClientSpyOnGet, alertsService);
//     // CANDIDATES[2].lastName = "Alexander";
//     // const expected: Candidate = CANDIDATES[0];

//     // httpClientSpyOnPut.put.and.returnValue(asyncData(expected));
//     //
//     // candidateService.getCandidate(expected).subscribe(
//     //   candidate => expect(candidate).toEqual(expected, 'expected candidate')
//     // );
>>>>>>> ec099d5459004e788902752d1429a920e824b97b

//     expect(httpClientSpyOnPut.put.calls.count()).toBe(1, 'one call');
//   });

<<<<<<< HEAD
  it('createCandidate() should make an HTTP POST request, and return the candidates that is created', ()=>{
    // httpClientSpyOnGet = jasmine.createSpyObj('http', ['post']);
    // candidateService = new CandidateService(<any> httpClientSpyOnGet, alertsService);
    // let newCandidate : Candidate = new Candidate();
    // newCandidate.firstName = "Tyerra";
    // newCandidate.lastName = "Smith";
=======
//   fit('createCandidate() should make an HTTP POST request, and return the candidates that is created', ()=>{
//     // httpClientSpyOnGet = jasmine.createSpyObj('http', ['post']);
//     // candidateService = new CandidateService(<any> httpClientSpyOnGet, alertsService);
//     // let newCandidate : Candidate = new Candidate();
//     // newCandidate.firstName = "Tyerra";
//     // newCandidate.lastName = "Smith";
>>>>>>> ec099d5459004e788902752d1429a920e824b97b


//     //const expected: Candidate = newCandidate;

//     // httpClientSpyOnPost.post.and.returnValue(asyncData(expected));
//     //
//     // candidateService.getCandidate(expected).subscribe(
//     //   candidate => expect(candidate).toEqual(expected, 'expected candidate')
//     // );

//     expect(httpClientSpyOnPost.post.calls.count()).toBe(1, 'one call');
//   });

<<<<<<< HEAD
  it('createCandidate() should make an HTTP POST request, and return the candidates that is created', ()=>{
  //   httpClientSpyOnGet = jasmine.createSpyObj('http', ['post']);
  //   candidateService = new CandidateService(<any> httpClientSpyOnGet, alertsService);
  //   let newCandidate : Candidate = new Candidate();
  //   newCandidate.firstName = "Tyerra";
  //   newCandidate.lastName = "Smith";
  //
  //
  //   const expected: Candidate = newCandidate;
  //
  //   httpClientSpyOnDelete.delete.and.returnValue(asyncData(expected));
  //
  //   candidateService.getCandidate(expected).subscribe(
  //     candidate => expect(candidate).toEqual(expected, 'expected candidate')
  //   );
  //
  //   expect(httpClientSpyOnDelete.delete.calls.count()).toBe(1, 'one call');
   });


 
  // const alertsService: AlertsService = new AlertsService();



<<<<<<< HEAD
  it('getCandidates() should make an HTTP GET request, and return the candidates that it fetched',() =>{
    httpClientSpyOnGet = jasmine.createSpyObj('http', ['get']);
    // candidateService = new CandidateService(<any> httpClientSpyOnGet);
=======
  fit('getCandidates() should make an HTTP GET request, and return the candidates that it fetched',() =>{
     let httpClientSpyOnGet: { get: jasmine.Spy };
  let httpClientSpyOnPost: { post: jasmine.Spy };
  let httpClientSpyOnPut: {put: jasmine.Spy };
  let httpClientSpyOnDelete: { delete: jasmine.Spy };
  let candidateService: CandidateService;
  httpClientSpyOnGet = jasmine.createSpyObj('http', ['get']);
    candidateService = new CandidateService(<any> httpClientSpyOnGet);
>>>>>>> 0ad90442ba2c455df8d883b8905d4965ea73f9c5

    // const expected: Candidate[] = CANDIDATES;

    // httpClientSpyOnGet.get.and.returnValue(asyncData(expected));

    candidateService.getCandidates().subscribe(
      // candidates => expect(candidates).toEqual(expected, 'expected candidates')
    );
=======
//   fit('createCandidate() should make an HTTP POST request, and return the candidates that is created', ()=>{
//   //   httpClientSpyOnGet = jasmine.createSpyObj('http', ['post']);
//   //   candidateService = new CandidateService(<any> httpClientSpyOnGet, alertsService);
//   //   let newCandidate : Candidate = new Candidate();
//   //   newCandidate.firstName = "Tyerra";
//   //   newCandidate.lastName = "Smith";
//   //
//   //
//   //   const expected: Candidate = newCandidate;
//   //
//   //   httpClientSpyOnDelete.delete.and.returnValue(asyncData(expected));
//   //
//   //   candidateService.getCandidate(expected).subscribe(
//   //     candidate => expect(candidate).toEqual(expected, 'expected candidate')
//   //   );
//   //
//   //   expect(httpClientSpyOnDelete.delete.calls.count()).toBe(1, 'one call');
//    });


//   let httpClientSpyOnGet: { get: jasmine.Spy };
//   let httpClientSpyOnPost: { post: jasmine.Spy };
//   let httpClientSpyOnPut: {put: jasmine.Spy };
//   let httpClientSpyOnDelete: { delete: jasmine.Spy };
//   let candidateService: CandidateService;
//   const alertsService: AlertsService = new AlertsService();



//   fit('getCandidates() should make an HTTP GET request, and return the candidates that it fetched',() =>{
//     httpClientSpyOnGet = jasmine.createSpyObj('http', ['get']);
//     candidateService = new CandidateService(<any> httpClientSpyOnGet, alertsService);

//     const expected: Candidate[] = CANDIDATES;

//     httpClientSpyOnGet.get.and.returnValue(asyncData(expected));

//     candidateService.getCandidates().subscribe(
//       candidates => expect(candidates).toEqual(expected, 'expected candidates')
//     );
>>>>>>> ec099d5459004e788902752d1429a920e824b97b

//     expect(httpClientSpyOnGet.get.calls.count()).toBe(1, 'one call');
//   });

<<<<<<< HEAD
  it('getCandidate() should make an HTTP GET request, and return the candidate that it fetched', ()=>{
    httpClientSpyOnGet = jasmine.createSpyObj('http', ['get']);
    candidateService = new CandidateService(<any> httpClientSpyOnGet);

    // const expected: Candidate = CANDIDATES[2];

    // httpClientSpyOnGet.get.and.returnValue(asyncData(expected));

    // candidateService.getCandidate(expected).subscribe(
      // candidate => expect(candidate).toEqual(expected, 'expected candidate')
    // );
=======
//   fit('getCandidate() should make an HTTP GET request, and return the candidate that it fetched', ()=>{
//     httpClientSpyOnGet = jasmine.createSpyObj('http', ['get']);
//     candidateService = new CandidateService(<any> httpClientSpyOnGet, alertsService);

//     const expected: Candidate = CANDIDATES[2];

//     httpClientSpyOnGet.get.and.returnValue(asyncData(expected));

//     candidateService.getCandidate(expected).subscribe(
//       candidate => expect(candidate).toEqual(expected, 'expected candidate')
//     );
>>>>>>> ec099d5459004e788902752d1429a920e824b97b

//     expect(httpClientSpyOnGet.get.calls.count()).toBe(1, 'one call');
//   });

<<<<<<< HEAD
  it('updateCandidate() should make an HTTP PUT request, and return the candidates that is altered', ()=>{
    httpClientSpyOnGet = jasmine.createSpyObj('http', ['put']);
    candidateService = new CandidateService(<any> httpClientSpyOnGet);
    // CANDIDATES[2].lastName = "Alexander";
    // const expected: Candidate = CANDIDATES[0];

    // httpClientSpyOnPut.put.and.returnValue(asyncData(expected));
// 
    // candidateService.getCandidate(expected).subscribe(
      // candidate => expect(candidate).toEqual(expected, 'expected candidate')
    // );
=======
//   fit('updateCandidate() should make an HTTP PUT request, and return the candidates that is altered', ()=>{
//     httpClientSpyOnGet = jasmine.createSpyObj('http', ['put']);
//     candidateService = new CandidateService(<any> httpClientSpyOnGet, alertsService);
//     CANDIDATES[2].lastName = "Alexander";
//     const expected: Candidate = CANDIDATES[0];

//     httpClientSpyOnPut.put.and.returnValue(asyncData(expected));

//     candidateService.getCandidate(expected).subscribe(
//       candidate => expect(candidate).toEqual(expected, 'expected candidate')
//     );
>>>>>>> ec099d5459004e788902752d1429a920e824b97b

//     expect(httpClientSpyOnPut.put.calls.count()).toBe(1, 'one call');
//   });

<<<<<<< HEAD
  it('createCandidate() should make an HTTP POST request, and return the candidates that is created', ()=>{
    httpClientSpyOnGet = jasmine.createSpyObj('http', ['post']);
    candidateService = new CandidateService(<any> httpClientSpyOnGet);
    let newCandidate : Candidate = new Candidate();
    // newCandidate.firstName = "Tyerra";
    // newCandidate.lastName = "Smith";
=======
//   fit('createCandidate() should make an HTTP POST request, and return the candidates that is created', ()=>{
//     httpClientSpyOnGet = jasmine.createSpyObj('http', ['post']);
//     candidateService = new CandidateService(<any> httpClientSpyOnGet, alertsService);
//     let newCandidate : Candidate = new Candidate();
//     newCandidate.firstName = "Tyerra";
//     newCandidate.lastName = "Smith";
>>>>>>> ec099d5459004e788902752d1429a920e824b97b


//     const expected: Candidate = newCandidate;

//     httpClientSpyOnPost.post.and.returnValue(asyncData(expected));

<<<<<<< HEAD
    // candidateService.getCandidate(expected).subscribe(
      // candidate => expect(candidate).toEqual(expected, 'expected candidate')
    // );
=======
//     candidateService.getCandidate(expected).subscribe(
//       candidate => expect(candidate).toEqual(expected, 'expected candidate')
//     );
>>>>>>> ec099d5459004e788902752d1429a920e824b97b

//     expect(httpClientSpyOnPost.post.calls.count()).toBe(1, 'one call');
//   });

<<<<<<< HEAD
  it('createCandidate() should make an HTTP POST request, and return the candidates that is created', ()=>{
    httpClientSpyOnGet = jasmine.createSpyObj('http', ['post']);
    candidateService = new CandidateService(<any> httpClientSpyOnGet);
    let newCandidate : Candidate = new Candidate();
    // newCandidate.firstName = "Tyerra";
    // newCandidate.lastName = "Smith";
=======
//   fit('createCandidate() should make an HTTP POST request, and return the candidates that is created', ()=>{
//     httpClientSpyOnGet = jasmine.createSpyObj('http', ['post']);
//     candidateService = new CandidateService(<any> httpClientSpyOnGet, alertsService);
//     let newCandidate : Candidate = new Candidate();
//     newCandidate.firstName = "Tyerra";
//     newCandidate.lastName = "Smith";
>>>>>>> ec099d5459004e788902752d1429a920e824b97b


//     const expected: Candidate = newCandidate;

//     httpClientSpyOnDelete.delete.and.returnValue(asyncData(expected));

<<<<<<< HEAD
    // candidateService.getCandidate(expected).subscribe(
      // candidate => expect(candidate).toEqual(expected, 'expected candidate')
    // );
=======
//     candidateService.getCandidate(expected).subscribe(
//       candidate => expect(candidate).toEqual(expected, 'expected candidate')
//     );
>>>>>>> ec099d5459004e788902752d1429a920e824b97b

//     expect(httpClientSpyOnDelete.delete.calls.count()).toBe(1, 'one call');
//   });

<<<<<<< HEAD
});
*/
=======
// });
>>>>>>> ec099d5459004e788902752d1429a920e824b97b
