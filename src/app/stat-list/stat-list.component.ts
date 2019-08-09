import { Component, OnInit } from '@angular/core';
import { Stat } from '../model/stat';
import { StatService } from '../service/stat.service';
 
@Component({
  selector: 'app-stat-list',
  templateUrl: './stat-list.component.html',
  styleUrls: ['./stat-list.component.css']
})
export class StatListComponent implements OnInit {
 
  stats: Stat[];
 
  constructor(private statService: StatService) {
  }
 
  ngOnInit() {
    this.statService.findAll().subscribe(data => {
      this.stats = data;
    });
  }
}
