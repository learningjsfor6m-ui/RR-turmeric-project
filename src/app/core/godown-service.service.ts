import { Injectable } from '@angular/core';
import { GodownDetails } from '../shared/godown-details/godown.interface';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GodownServiceService {
  $godownId:BehaviorSubject<number> = new BehaviorSubject<number>(0)
  constructor() {}
  godowndetails: GodownDetails[] = [
    {
      id: 1,
      name: 'Turmeric Warehouse',
      location: 'Pune, Maharashtra',
      description: 'test',
      storage: 1,
      capacity: 10000, // 10,000 KG
      currentStock: 7500, // 7,500 KG available
      inwardStock: 5000, // 5,000 KG received
      outwardStock: 3000, // 3,000 KG shipped out
      lastUpdated: new Date('2025-12-01T10:00:00'), // Last updated on 1st Dec 2025
      status: 'active', // Godown is active
      contactPerson: 'Rajesh Kumar', // Optional field (contact person)
      contactNumber: '9876543210', // Optional field (contact number)
    },
    {
      id: 2,
      name: 'Spices Hub',
      location: 'Surat, Gujarat',
      description: 'test',
      storage: 1,
      capacity: 8000, // 8,000 KG
      currentStock: 5200, // 5,200 KG available
      inwardStock: 2000, // 2,000 KG received
      outwardStock: 1000, // 1,000 KG shipped out
      lastUpdated: new Date('2025-11-28T14:30:00'), // Last updated on 28th Nov 2025
      status: 'inactive', // Godown is inactive
      // Optional fields omitted
    },

  ];

  getGodowndetails(): Observable<GodownDetails[]> {
    return of(this.godowndetails);
  }
}
