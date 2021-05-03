import { Component, OnInit } from '@angular/core';
import { IBand, ITransformedBand, IMemberInfo, ITransformedMember } from './member';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  band: IBand = {
      members: {
          current: [
              {name: 'Sascha', age: 59, plays: ['vocals', 'synth', 'guitar', 'bass']},
              {name: 'Lucia', age: 49, plays: ['vocals', 'synth']},
              {name: 'Jules', age: 53, plays: ['guitar', 'bass', 'synth']},
              {name: 'Steve', age: 55, plays: ['guitar']}
          ],
          past: [
              {name: 'Raymond', age: 57, plays: ['vocals', 'synth']},
              {name: 'En', age: 52, plays: ['vocals', 'drums', 'guitar', 'synth']},
              {name: 'Gunter', age: 57, plays: ['guitar', 'synth']}
          ]
      }
    };

  constructor() { }

  ngOnInit(): void {
  }

  reset(): void {
    location.reload();
  }

  transformData(): void {
    const allMembers = this.band.members.current.concat(this.band.members.past);
    const transformData = {} as ITransformedBand;
    transformData.members = {} as ITransformedMember;
    transformData.members.current = this.band.members.current;
    transformData.members.past = this.band.members.past;

    transformData.members.all = this.getAll(allMembers);
    transformData.members.plays = this.getPlays(allMembers);

    this.band = transformData;
  }

  getAll(allMembers: IMemberInfo[]): Array<string> {
    const sortedMemebers = allMembers.sort((a, b) => a.age < b.age ? 1 : a.age > b.age ? -1 : 0 || a.name.localeCompare(b.name));

    return sortedMemebers.map(m => m.name.toLowerCase());
  }

  getPlays(allMembers: IMemberInfo[]): any {
    const result = {};
    const allPlays = Array.prototype.concat.apply([], allMembers.map(m => m.plays));
    let uniquePlays = [];
    uniquePlays = Array.from(new Set(allPlays));

    for (const play of uniquePlays){
      const namesByPlay = [];
      for (const member of allMembers){
        if (member.plays.includes(play)){
          namesByPlay.push(member.name.toLowerCase());
          result[play] = namesByPlay;
        }
      }
    }

    return result;
  }
}
