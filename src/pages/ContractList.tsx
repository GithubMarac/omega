import React from 'react';
import { Contract } from '../types';
import { useNavigate } from "react-router-dom";


interface ContractListProps {
  contracts: Contract[];
}

const ContractList: React.FC<ContractListProps> = ({ contracts }) => {
  const navigate = useNavigate();
  
  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'KREIRANO':
        return 'green';
      case 'NARUČENO':
        return 'yellow';
      case 'ISPORUČENO':
        return 'grey';
      default:
        return '';
    }
  };

  const handleDeliveryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDeliveryDate = new Date(e.target.value);
    // TODO: Save data to server
    // TODO: Change data or handle error
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value;
    // TODO: Backend should handle from which state is possible to change to next state
    // TODO: If error from server show which error to show
    // TODO: Save data to server
    // TODO: Change data or handle error
  };

  const formatDeliveryDate = (deliveryDate: Date): string => {
    return deliveryDate.toLocaleDateString('hr-HR');
  };

  return (
    <div className="contract-list">
      <h2>Dobiveni ugovori</h2>
      <ul>
        {contracts.map(contract => (
          <li key={contract.id} className={`contract-item`}>
            <span>Ime kupca: {contract.kupac}</span>
            <a href="javascript:void(0)" onClick={ (e) => navigate(`contract/${contract.id}`, { state: { contract: contract } } ) } >Broj ugovora: {contract.broj_ugovora}</a>
            <span>Rok isporuke: <input type="date" value={contract.rok_isporuke.toISOString().split('T')[0]} onChange={handleDeliveryDateChange} /></span>
            <span>Status ugovora: <p className={`${getStatusColor(contract.status)}`}>{contract.status}</p></span>
            <p>Status: 
              <select value={contract.status} onChange={handleStatusChange}>
                <option value="KREIRANO">KREIRANO</option>
                <option value="NARUČENO">NARUČENO</option>
                <option value="ISPORUČENO">ISPORUČENO</option>
              </select>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContractList;