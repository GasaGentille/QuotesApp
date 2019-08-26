
export class Quote {
  showDescription: boolean;
  public upvotes: number;
  public downvotes: number;

  constructor(public quote_id: number, public quote_name: string, public quote_author: string, public completeDate: Date, public quote_submitter: string) {
    this.showDescription = false;
    this.upvotes = 0;
    this.downvotes = 0;

  }
}





