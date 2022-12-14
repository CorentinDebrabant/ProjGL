import {Livre} from './livre';
export class Panier{
    commandePassee:boolean;
    total:number;
    nombreArticle:number;

    listeArticle:Livre[]=[];



    constructor(){
        this.commandePassee=false;
        this.total=0;
        this.nombreArticle=0;
        this.listeArticle=[];
    }


    public getTotal():number{
        let t:number=0;
        for (let i = 0; i < this.nombreArticle; i++) {
            t=t+this.listeArticle[i].getPrix();
        }
        return t;
    }


    public ajouteArticle(article:Livre)
    {
        this.listeArticle.push(article);
        this.nombreArticle++;
    }

    public supprimeArticle(article:Livre)
    {
        const index: number = this.listeArticle.indexOf(article);
        if (index !== -1) {
      this.listeArticle.splice(index, 1);
      this.nombreArticle--;
        }
    }

    public iscommandePasse():boolean{
        return this.commandePassee;
    }

    public getnombreArticle():number{
        return this.nombreArticle;
    }

    }
