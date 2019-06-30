//Javascript framework for creating user interfaces
import React from 'react';

//Custom modules
import CustomHeader from './components/CustomHeader.jsx';
import CustomFooter from './components/CustomFooter.jsx';
import CustomTable from './components/CustomTable.jsx';

export default function App() {
  return (
    <>
      <CustomHeader />
      <CustomTable />
      <CustomFooter />
    </>
  );
}


