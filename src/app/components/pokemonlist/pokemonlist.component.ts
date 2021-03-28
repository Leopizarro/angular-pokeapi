import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.css']
})
export class PokemonlistComponent implements OnInit {

  pokemons: any[] = [];
  constructor(private pokemonService:PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(){
    for(let i= 1; i <= 151; i++){
      this.pokemonService.getPokemons(i).subscribe(
        res => {
          this.pokemons.push(res);
          this.pokemons.sort((a,b) => a.id - b.id);
          console.log(this.pokemons);
        },
        err => {
          console.log(err);
        }
      );
      /* if(this.pokemons.length === 151){
        this.pokemons.sort((a,b) => a.id - b.id);
      } */
    }
  }


}
