import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
     {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo1'
    },

     {
      conteudo: 'Minha propiedade é decorada com o @Input()',
      autoria: 'Componente filho',
      modelo: 'modelo3'
    },
     {
      conteudo: 'Na tranquila cidade de Eldorado, as ruas de paralelepípedos testemunhavam o passar do tempo com sua calma habitual. Os raios do sol dançavam entre as copas das árvores, criando sombras suaves nas fachadas das casas antigas. Os moradores, familiarizados com a rotina serena, encontravam conforto na simplicidade da vida cotidiana.Contudo, naquele dia, uma energia incomum pairava no ar. Uma brisa suave sussurrava segredos desconhecidos, enquanto nuvens se reuniam no horizonte, tingindo o céu de tons que variavam do azul ao laranja. Os pássaros, normalmente melódicos, pareciam murchar em seus cantos, como se antecipassem algo extraordinário prestes a acontecer.   Enquanto os cidadãos se preparavam para mais um dia comum, um forasteiro misterioso apareceu na praça central. Seu olhar penetrante e vestimentas exóticas despertaram a curiosidade dos moradores, que se reuniram ao seu redor em busca de respostas. O forasteiro, em tom enigmático, anunciou a chegada iminente de uma mudança transcendental, um evento que desafiaria as fronteiras do conhecido.A cidade, então, ficou em suspenso, aguardando o desenrolar dos acontecimentos. As horas passaram lentamente, e a ansiedade crescia entre os habitantes. À medida que o sol se punha, o céu explodiu em cores vibrantes, refletindo a promessa de transformação. Eldorado, uma vez adormecida em sua tranquilidade, estava prestes a despertar para um novo capítulo em sua história, escrito sob o céu que testemunhara incontáveis dias de serenidade',
      autoria: 'Componente filho ',
      modelo: 'modelo3'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
