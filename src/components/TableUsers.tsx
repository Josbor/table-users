import React, { useEffect, useState } from 'react'
import BaseTable, { Column } from 'react-base-table'
import 'react-base-table/styles.css'
import { useStoreControl } from '../hooks/useStoreControl';
import useModal from '../hooks/useModal'
import Details from './Details'
import usePaginationComponent from '../hooks/usePagination';

const TableUsers = () => {
  const { getListUsers, userList, selectUser } = useStoreControl()
  const [openModal,ModalComponent]:any=useModal(Details)
  const [paginatedList,Pagination]:any=usePaginationComponent(userList,10)
 
  useEffect(() => {
    getListUsers()
  }, [])





  const hadleRowEvent = ({ rowData }: any) => {
     
    openModal()
    selectUser(rowData)



  }

  const columnsUsers = [
    {
      key: 'firstName',
      title: 'firstName',
      dataKey: 'firstName',
      resizable: false,
      width: 150,
      frozen: Column.FrozenDirection.LEFT,
    },
    {
      key: 'lastName',
      title: 'lastName',
      dataKey: 'lastName',
      resizable: false,
      width: 150,
      frozen: Column.FrozenDirection.LEFT,
    },
    {
      key: 'age',
      title: 'age',
      dataKey: 'age',
      resizable: false,
      width: 60,
      align: Column.Alignment.CENTER,

    },
    {
      key: 'ip',
      title: 'ip',
      dataKey: 'ip',
      resizable: false,
      width: 150,
      frozen: Column.FrozenDirection.LEFT,
    },

    {
      key: 'image',
      title: 'image',
      dataKey: 'image',
      width: 100,
      resizable: false,
      frozen: Column.FrozenDirection.LEFT,
      cellRenderer: ({ cellData: image }: any) => <img src={image} style={{ width: 50, borderRadius: 100 }} />,

    },
  ]
  return (
    <div>
      {userList.length>0&&
      <BaseTable columns={columnsUsers} data={paginatedList} width={900} height={550} rowEventHandlers={{ onClick: (e) => hadleRowEvent(e) }} />
      }
      {columnsUsers.length > 0 && <Pagination/>}
      <ModalComponent/>
    </div>
  )
}

export default TableUsers
