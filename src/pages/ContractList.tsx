import React from 'react';
import { Contract } from '../types';


interface ContractListProps {
  contracts: Contract[];
}

const ContractList: React.FC<ContractListProps> = ({ contracts }) => {
  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'KREIRAN':
        return 'green'; // green color
      case 'NARUČENO':
        return 'yellow'; // yellow color
      case 'ISPORUČENO':
        return 'grey'; // grey color
      default:
        return '';
    }
  };

  const formatDeliveryDate = (deliveryDate: Date): string => {
    // implement date formatting according to Croatian language
    // for example, you can use a library like 'date-fns' for date formatting
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