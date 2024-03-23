import React, { useEffect, useState } from 'react';
import ContractList from './ContractList';
import { Contract } from '../types';

const HomePage: React.FC = () => {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [filteredContracts, setFilteredContracts] = useState<Contract[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeOnly, setActiveOnly] = useState<boolean>(false);

  useEffect(() => {
    // Mocked data - replace this with your actual data fetching logic
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
    </div>
  );
};

export default HomePage;