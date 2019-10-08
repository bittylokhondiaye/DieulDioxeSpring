export class Transaction {
    constructor(
      public Type: string, 
      public CodeTransaction: string,
      public Montant: number,
      public NumeroExpediteur: number,
      public NumeroDestinataire: number,
      public CNIdestinataire: number,
      public NomCompletExpediteur: Text,
      public NomCompletDestinataire: Text,
    ) {}
  }