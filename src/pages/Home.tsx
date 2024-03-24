import React, { useEffect, useState } from 'react';
import ContractList from './ContractList';
import { Contract } from '../types';

const HomePage: React.FC = () => {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [filteredContracts, setFilteredContracts] = useState<Contract[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeOnly, setActiveOnly] = useState<boolean>(false);

  const [customerName, setCustomerName] = useState<string>('');
  const [contractNumber, setContractNumber] = useState<string>('');
  const [advancePaymentDate, setAdvancePaymentDate] = useState<Date>(new Date());
  const [deliveryDate, setDeliveryDate] = useState<Date>(new Date());


  useEffect(() => {
    filterContracts(contracts);
  }, [searchTerm, activeOnly]);

  const filterContracts = (contractsToFilter: Contract[]) => {
    let filtered: Contract[] = contractsToFilter;

    if (searchTerm) {
      filtered = filtered.filter(contract =>
        contract.kupac.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (activeOnly) {
      filtered = filtered.filter(contract => contract.status !== 'ISPORUČENO');
    }
      setFilteredContracts(filtered);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleActiveFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActiveOnly(e.target.checked);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newContract: any = {
      kupac: customerName,
      broj_ugovora: contractNumber,
      datum_akontacije: advancePaymentDate,
      rok_isporuke: deliveryDate,
      status: 'KREIRANO'
    };

    if (!customerName || !contractNumber || !advancePaymentDate || !deliveryDate) {
      alert('Svi podaci su obavezni');
      return;
    }

    // TODO: dodaj contract u bazu podataka
    filterContracts([...filteredContracts, newContract])
    // TODO: Reloadati podatke

    setCustomerName('');
    setContractNumber('');
    setAdvancePaymentDate(new Date());
    setDeliveryDate(new Date());
  };
  
  useEffect(() => {
    const mockedContracts: Contract[] = [
        {
            id: 1,
            kupac: "Petra Kranjčar",
            broj_ugovora: "1/2024",
            datum_akontacije: new Date("2024-01-04"),
            rok_isporuke: new Date("2024-04-20"),
            status: "KREIRANO"
        },
        {
            id: 2,
            kupac: "Franko Kasun",
            broj_ugovora: "2/2024",
            datum_akontacije: new Date("2024-03-01"),
            rok_isporuke: new Date("2024-05-01"),
            status: "ISPORUČENO"
        },
        {
            id: 3,
            kupac: "Stjepan Babić",
            broj_ugovora: "3/2024",
            datum_akontacije: new Date("2024-03-03"),
            rok_isporuke: new Date("2024-04-15"),
            status: "NARUČENO"
        },
        {
            id: 4,
            kupac: "Tia Janković",
            broj_ugovora: "4/2024",
            datum_akontacije: new Date("2024-03-14"),
            rok_isporuke: new Date("2024-08-13"),
            status: "KREIRANO"
        }
    ];

    setContracts(mockedContracts);
    filterContracts(mockedContracts);
  }, []);


  return (
    <div className="home-page">
      <h1>Kupoprodajni ugovori</h1>
      <div className="filters">
        <input
          type="text"
          placeholder="Search by customer name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <label>
          <input
            type="checkbox"
            checked={activeOnly}
            onChange={handleActiveFilterChange}
          />
          Show active contracts only
        </label>
      </div>
      <ContractList contracts={filteredContracts} />
      <form onSubmit={handleFormSubmit}>
      <div>
        <label>Ime kupca:</label>
        <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
      </div>
      <div>
        <label>Broj ugovora:</label>
        <input type="text" value={contractNumber} onChange={(e) => setContractNumber(e.target.value)} />
      </div>
      <div>
        <label>Datum akontacije:</label>
        <input type="date" value={advancePaymentDate.toISOString().split('T')[0]} onChange={(e) => setAdvancePaymentDate(new Date(e.target.value))} />
      </div>
      <div>
        <label>Rok isporuke:</label>
        <input type="date" value={deliveryDate.toISOString().split('T')[0]} onChange={(e) => setDeliveryDate(new Date(e.target.value))} />
      </div>
      <button type="submit">Kreiraj ugovor</button>
    </form>
    </div>
  );
};

export default HomePage;