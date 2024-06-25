import React from 'react'
import './Organizations.css'
import Button from '../../../components/Button'
import { useMemo, useState } from 'react';
import {
  MaterialReactTable,
  MRT_ActionMenuItem,
  useMaterialReactTable
} from 'material-react-table';
import { Edit, Delete } from '@mui/icons-material';
import { Switch } from '@material-ui/core';
import { Link } from 'react-router-dom';

const initialData  = [
  {
    id: '1',
    logo: '/src/assets/images/1.png',
    name: 'John',
    phone: 'John',
    email: 'John',
    website: 'John',
    address: '261 Erdman Ford',
    country: 'East Daphne',
    onBoarding: 'John',
    status: true,
  },
  {
    id: '2',
    logo: '/src/assets/images/1.png',
    name: 'John',
    phone: 'John',
    email: 'John',
    website: 'John',
    address: '261 Erdman Ford',
    country: 'East Daphne',
    onBoarding: 'John',
    status: false,
  },
  {
    id: '3',
    logo: '/src/assets/images/1.png',
    name: 'John',
    phone: 'John',
    email: 'John',
    website: 'John',
    address: '261 Erdman Ford',
    country: 'East Daphne',
    onBoarding: 'John',
    status: true,
  },
  {
    id: '4',
    logo: '/src/assets/images/1.png',
    name: 'John',
    phone: 'John',
    email: 'John',
    website: 'John',
    address: '261 Erdman Ford',
    country: 'East Daphne',
    onBoarding: 'John',
    status: false,
  },
  {
    id: '5',
    logo: '/src/assets/images/1.png',
    name: 'John',
    phone: 'John',
    email: 'John',
    website: 'John',
    address: '261 Erdman Ford',
    country: 'East Daphne',
    onBoarding: 'John',
    status: true,
  },
  {
    id: '6',
    logo: '/src/assets/images/1.png',
    name: 'John',
    phone: 'John',
    email: 'John',
    website: 'John',
    address: '261 Erdman Ford',
    country: 'East Daphne',
    onBoarding: 'John',
    status: true,
  },
  {
    id: '7',
    logo: '/src/assets/images/1.png',
    name: 'John',
    phone: 'John',
    email: 'John',
    website: 'John',
    address: '261 Erdman Ford',
    country: 'East Daphne',
    onBoarding: 'John',
    status: true,
  },
  {
    id: '8',
    logo: '/src/assets/images/1.png',
    name: 'John',
    phone: 'John',
    email: 'John',
    website: 'John',
    address: '261 Erdman Ford',
    country: 'East Daphne',
    onBoarding: 'John',
    status: true,
  },
];

const Organizations = () => {

  const [data, setData] = useState(initialData);

  const handleStatusChange = (id, newStatus) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
    console.log(`Status change requested for ID ${id} to ${newStatus}`);
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        size: 150,
      },
      {
        accessorKey: 'logo',
        header: 'Logo',
        size: 150,
      },
      {
        accessorKey: 'name',
        header: 'Name',
        size: 150,
      },
      {
        accessorKey: 'phone',
        header: 'Phone',
        size: 150,
      },
      {
        accessorKey: 'email',
        header: 'Email',
        size: 150,
      },
      {
        accessorKey: 'website',
        header: 'Website',
        size: 200,
      },
      {
        accessorKey: 'address',
        header: 'Address',
        size: 150,
      },
      {
        accessorKey: 'country',
        header: 'Country',
        size: 150,
      },
      {
        accessorKey: 'onBoarding',
        header: 'On-Boarding Date',
        size: 150,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        Cell: ({ row }) => (
          <Switch
            checked={row.original.status}
            onChange={() => handleStatusChange(row.original.id, !row.original.status)}
          />
        ),
      },
      {
        header: 'Edit',
        accessor: 'actions',
        Cell: ({ row, table }) => (
          <>
            <MRT_ActionMenuItem
              icon={<Edit />}
              onClick={() => console.info('Edit', row)}
              table={table}
            />
          </>
        ),
      },
      {
        header: 'Delete',
        accessor: 'actions',
        Cell: ({ row, table }) => (
          <>
            <MRT_ActionMenuItem
              icon={<Delete />}
              onClick={() => console.info('Delete', row)}
              table={table}
            />
          </>
        ),
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableDensityToggle: false,
    initialState: { density: 'compact' },
  });

  return (
    <div className='organization-wrap'>
        <div className='btn-head'>
          <h2>Organizations</h2>
          <Link to="/dashboard/organizations/create">
            <Button text="+ add new user" />
          </Link>
        </div>
          {data && data.length > 0 ? (
          <MaterialReactTable table={table} />
          ) : (
            <p>No data available</p>
          )}
    </div>
  )
}

export default Organizations