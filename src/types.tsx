export interface Contract {
    id: number;
    kupac: string;
    broj_ugovora: string;
    datum_akontacije: Date;
    rok_isporuke: Date;
    status: 'KREIRANO' | 'NARUČENO' | 'ISPORUČENO';
  }