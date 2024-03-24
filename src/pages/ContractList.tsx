import React from 'react';
import { Contract } from '../types';


interface ContractListProps {
  contracts: Contract[];
}

const ContractList: React.FC<ContractListProps> = ({ contracts }) => {
  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'KREIRAN':
        return 'green';
      case 'NARUČENO':
        return 'yellow';
      case 'ISPORUČENO':
        return 'grey';
      default:
        return '';
    }
  };

  const formatDeliveryDate = (deliveryDate: Date): string => {
    return deliveryDate.toLocaleDateString('hr-HR');
  };

  return (
    <div className="contract-list">
      <h2>Dobiveni ugovori</h2>
      <ul>
        {contracts.map(contract => (
          <li key={contract.id} className={`contract-item ${getStatusColor(contract.status)}`}>
            <span>Ime kupca: {contract.kupac}</span>
            <span>Broj ugovora: {contract.broj_ugovora}</span>
            <span>Rok isporuke: {formatDeliveryDate(contract.rok_isporuke)}</span>
            <span>Status ugovora: {contract.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContractList;