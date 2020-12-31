import { Injectable } from '@angular/core';
import { Fruto } from './fruto.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private palavras : string[] = ['amov', 'partner','refrigerator','expertise','distort',
  'experiment','established','artist','mutter','deficiency','lounge',
  'rack','key','difference','speech','reptile',
  'metal','attraction','citizen','table','equal',
  'criticism','comfort','grounds','toss','few',
  'era','sunrise','disappear','cottage','network',
  'eagle','tidy','assessment','accurate','war',
  'brush','grandmother','electron','promotion','first',
  'be','crude','suppress','part','snuggle',
  'minister','tribute','drink','reckless','disappoint'];

  private fruta : Fruto[]=[
    {
      id: 'f1',
      titulo: 'Banana',
      urlImagem: 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=2597619(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=512&height=512&defaultOptions=1',
      quantidade: 6
    },
    {
      id: 'f2',
      titulo: 'Maçã',
      urlImagem: 'https://conteudo.imguol.com.br/c/entretenimento/a8/2018/01/04/maca-maca-mordida-1515090198347_v2_1648x1920.jpg',
      quantidade: 10
    },
    {
      id: 'f3',
      titulo: 'Cereja',
      urlImagem: 'https://www.infoescola.com/wp-content/uploads/2009/12/cereja1.jpg',
      quantidade: 30
    },
    {
      id: 'f4',
      titulo: 'Pera',
      urlImagem: 'https://www.frutasdocavado.com/wp-content/uploads/2019/05/pera.jpg',
      quantidade: 4
    },
    {
      id: 'f5',
      titulo: 'Acerola',
      urlImagem: 'https://hiperideal.vteximg.com.br/arquivos/ids/181414-1000-1000/49751.jpg?v=637247887574770000',
      quantidade: 10
    },
    {
      id: 'f6',
      titulo: 'Laranja',
      urlImagem: 'https://luisvicente.com/wp-content/uploads/2018/11/Laranja-a-subst.jpg',
      quantidade: 1
    },
    {
      id: 'f7',
      titulo: 'Abacaxi',
      urlImagem: 'https://d26lpennugtm8s.cloudfront.net/stores/746/397/products/abacai-caiano-copia-fe6408fa54c7a9c3bc15228743904792-1024-1024.png',
      quantidade: 2
    },
    {
      id: 'f8',
      titulo: 'Romã',
      urlImagem: 'https://www.portalbueno.com.br/uploads/cache/23-12-2017-061117-77-690x460-0c9054ef-portalbueno.webp',
      quantidade: 5
    },
    {
      id: 'f9',
      titulo: 'Morango',
      urlImagem: 'https://cordeiroecompanhia.com/wp-content/uploads/2017/09/morango-fruta.jpg',
      quantidade: 25
    },
    {
      id: 'f10',
      titulo: 'Côco',
      urlImagem: 'https://belezaesaude.com/i/730/3102/coco.jpg',
      quantidade: 3
    },
    {
      id: 'f11',
      titulo: 'Limão',
      urlImagem: 'https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=2076509(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=512&height=512&defaultOptions=1',
      quantidade: 30
    },
    {
      id: 'f12',
      titulo: 'Figo',
      urlImagem: 'https://thumbs.web.sapo.io/?W=800&H=0&delay_optim=1&epic=Yzll7SHCKhcfCqHsWNDpEeKYU75uTkbOm530lsuQRciBEOVhgOYHagmgYH6yNBqSPr9iv9pE22AroAocTzOKUuv4Bfs1Uv9xAepwFmxOYQGWOz0=',
      quantidade: 9
    },
    {
      id: 'f13',
      titulo: 'Mirtilo',
      urlImagem: 'https://saboresesaberesdabeirabaixa.com/wp-content/uploads/2019/10/mirtilo-114411-48b35655e85e98c3db15221808361063-640-0.jpg',
      quantidade: 10
    },
    {
      id: 'f14',
      titulo: 'Pêssego',
      urlImagem: 'https://cdn4.ecycle.com.br/cache/images/materias/Nomundo/2014-08/50-650-peach-750.jpg',
      quantidade: 15
    },
    {
      id: 'f15',
      titulo: 'Melão',
      urlImagem: 'https://cdn.shopify.com/s/files/1/0127/3711/8265/files/shutterstock_1161498970_1024x1024.jpg?v=1560538161',
      quantidade: 1
    },
    {
      id: 'f16',
      titulo: 'Melância',
      urlImagem: 'https://atitudereflexiva.files.wordpress.com/2018/03/melancia.jpg?w=584',
      quantidade: 1
    }
  ];  

  constructor() {}

  getAllWords()
  {
    return [...this.palavras];
  }

  getFruta()
  {
    return [...this.fruta];
  }

  getFruto(frutoId: string)
  {
    return{
      ...this.fruta.find(fruto=> 
        {
          return fruto.id === frutoId;
        }) // dentro do find função sem nome que compara fruto.id com frutoID(inclusive o tipo daí os 3 =) caso essa função devolva true o find para de procurar
    }
  }

  
}
