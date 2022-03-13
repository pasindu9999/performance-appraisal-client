import { Component, OnInit } from '@angular/core';
import { TeamModel } from 'src/app/models/team.model';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {
  team = new TeamModel();
  isCreating = false;

  constructor(private teamService : TeamService) { }

  ngOnInit(): void {}

  onSubmit() {
    this.isCreating = true;
    alert("Team created");
    this.teamService.create(this.team).subscribe({
      next: (res) => {
        this.isCreating = false;
        this.team = new TeamModel();
      },
      error: (err) => {
        this.isCreating = false;
      },
    });
  }

}
