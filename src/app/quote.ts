// export class Quote {
//     quote_id: number;
//     quote_name: string;
//     quote_description: string;

// }
export class Quote {
    showDescription: boolean;
    constructor(public quote_id: number,public quote_name: string,public quote_description: string){
      this.showDescription=false;
    }
  }

