import React from 'react';
import { ContractDetail } from '../types';

interface ContractDetailsProps {
  contract: ContractDetail;
}

const ContractDetails: React.FC<ContractDetailsProps> = ({ contract }) => {
  return (
    <div className="contract-details">
      <h2>Detalji kupoprodajnog ugovora</h2>
      <div>
        <h3>Informacije o ugovoru:</h3>
        <p>Naziv: {contract.naziv}</p>
        <p>Dobavljač: {contract.dobavljac}</p>
        <p>Status: {contract.status}</p>
      </div>
      <div>
        <h3>Artikli u ugovoru:</h3>
        <ul>
            <li key={contract.id}>
              <p>Naziv: {contract.naziv}</p>
              <p>Količina: {contract.dobavljac}</p>
              <p>Cijena: {contract.status}</p>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default ContractDetails;