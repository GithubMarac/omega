import React, { useEffect } from 'react';
import { Contract, ContractDetail } from '../types';
import { useLocation } from 'react-router-dom';


const ContractDetails: React.FC<any> = () => {
  // TODO: fetch data based on contract id
  // TODO: dodati manipuliranje status i datuma isporuke na ovoj stranici
  const location = useLocation();
  const contract = location.state?.contract;
  
  const contractDetails: ContractDetail[] = [
    {
    id: 1,
    naziv: "Perilica posuđa ugradbena Electrolux EEA27200L",
    dobavljac: "Sancta Domenica",
    status: "KREIRANO"
    },
    {
    id: 2,
    naziv: "Napa ugradbena Gorenje TH60E3X",
    dobavljac: "Sancta Domenica",
    status: "NARUČENO"
    },
    
    {
    id: 3,
    naziv: "Ploča ugradbena kombinirana Gorenje GCE691BSC",
    dobavljac: "Bijela tehnika",
    status: "ISPORUČENO"
    }
    ];


  return (
    <div className="contract-details">
      <h2>Detalji kupoprodajnog ugovora</h2>
      <div>
        <h3>Informacije o ugovoru:</h3>
        <p>Naziv: {contract.kupac}</p>
        <p>Dobavljač: {contract.broj_ugovora}</p>
        <p>Status: {contract.status}</p>
      </div>
      <div>
        <h3>Artikli u ugovoru:</h3>
        <ul>
        { contractDetails.map(contractDetails => (
          <li key={contractDetails.id}>
            <p>Naziv: {contractDetails.naziv}</p>
            <p>Količina: {contractDetails.dobavljac}</p>
            <p>Cijena: {contractDetails.status}</p>
          </li>
        )
        )}
        </ul>
      </div>
    </div>
  );
};

export default ContractDetails;