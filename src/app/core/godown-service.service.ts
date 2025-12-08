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
    },{
      id: 3,
      name: 'Herbal Goods Warehouse',
      location: 'Hyderabad, Telangana',
      description: 'test',
      storage: 1,
      capacity: 12000, // 12,000 KG
      currentStock: 9000, // 9,000 KG available
      inwardStock: 6000, // 6,000 KG received
      outwardStock: 4000, // 4,000 KG shipped out
      lastUpdated: new Date('2025-12-02T08:45:00'), // Last updated on 2nd Dec 2025
      status: 'active', // Godown is active
      contactPerson: 'Sneha Reddy', // Optional field (contact person)
      contactNumber: '9876549876', // Optional field (contact number)
    },
    {
      id: 4,
      name: 'Organic Goods Warehouse',
      location: 'Bangalore, Karnataka',
      description: 'test',
      storage: 1,
      capacity: 15000, // 15,000 KG
      currentStock: 13500, // 13,500 KG available
      inwardStock: 7000, // 7,000 KG received
      outwardStock: 2000, // 2,000 KG shipped out
      lastUpdated: new Date('2025-11-25T17:15:00'), // Last updated on 25th Nov 2025
      status: 'inactive', // Godown is inactive
      // Optional fields omitted
    },
    {
      id: 5,
      name: 'Dry Goods Storage',
      location: 'Delhi, Delhi',
      description: 'test',
      storage: 1,
      capacity: 5000, // 5,000 KG
      currentStock: 3200, // 3,200 KG available
      inwardStock: 1500, // 1,500 KG received
      outwardStock: 600, // 600 KG shipped out
      lastUpdated: new Date('2025-12-05T09:30:00'), // Last updated on 5th Dec 2025
      status: 'active', // Godown is active
      contactPerson: 'Amit Sharma', // Optional field (contact person)
      contactNumber: '9876554321', // Optional field (contact number)
    },

  ];

  getGodowndetails(): Observable<GodownDetails[]> {
    return of(this.godowndetails);
  }
}
