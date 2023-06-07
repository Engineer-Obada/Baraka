import React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import PropTypes from 'prop-types';
import TableHeading from './TableHeading';
import TableItem from './TableItem';
import AppTableContainer from '@crema/core/AppTableContainer';


const OrderTable = ({orderData,onClickOpenEdit,onClickCloseEdit,onClickOpenReject,onDeleteOrder}) => {
  return (
    <AppTableContainer>
      <Table stickyHeader className='table'>
        <TableHead>
          <TableHeading />
        </TableHead>
        <TableBody>
          {orderData && orderData.map((data) => (
            <TableItem 
            onDeleteOrder={onDeleteOrder}
            onClickOpenReject={onClickOpenReject}
            onClickOpenEdit={onClickOpenEdit}
            onClickCloseEdit={onClickCloseEdit}
            data={data} key={data.id} />
          ))}
        </TableBody>
      </Table>

    
    </AppTableContainer>
  );
};

export default OrderTable;

OrderTable.defaultProps = {
  orderData: [],
};

OrderTable.propTypes = {
  orderData: PropTypes.array,
  onClickOpenEdit: PropTypes.func,
  onClickOpenReject: PropTypes.func,
  onClickCloseEdit: PropTypes.func,
  onDeleteOrder: PropTypes.func,
};
