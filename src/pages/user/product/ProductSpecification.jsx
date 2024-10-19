import React from 'react';
import { Paper, Box, Typography, Table, TableBody, TableCell, TableRow } from '@mui/material';

const ProductSpecifications = () => {
  const specifications = [
    { label: 'Category', value: 'Mobile' },
    { label: 'Manufacturer', value: 'Apple' },
    { label: 'Warranty', value: '12 Months' },
    { label: 'Serial number', value: '358607726380311' },
    { label: 'Ships from', value: 'United States' }
  ];

  return (
    <Paper elevation={3}  sx={{
      padding: 3,
      borderRadius: '12px',
      margin: '20px 0',
      backgroundColor: 'transparent', // Making the background transparent
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(10px)', // Optional: Adds a nice blur effect to the background
      border: '1px solid rgba(255, 255, 255, 0.2)', // Optional: A subtle border for better visibility
    }}>
      <Typography variant="h6" gutterBottom>Specifications</Typography>
      <Table className="specification-table">
        <TableBody>
          {specifications.map((spec, index) => (
            <TableRow key={index}>
              <TableCell sx={{ fontWeight: 'bold', borderBottom: 'none' }}>{spec.label}</TableCell>
              <TableCell sx={{ borderBottom: 'none' }}>{spec.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Box m={3}>
        <Typography>Product details</Typography>
        <ul className='product-details-list'>
          <li>The foam sockliner feels soft and comfortable</li>
          <li>Pull tab</li>
          <li>Not intended for use as Personal Protective Equipment</li>
          <li>Colour Shown: White/Black/Oxygen Purple/Action Grape</li>
        </ul>
      </Box>
    </Paper>
  );
};

export default ProductSpecifications;
