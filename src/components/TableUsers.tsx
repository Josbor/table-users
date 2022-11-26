import React, { useEffect, useState } from 'react'
import BaseTable, { Column } from 'react-base-table'
import 'react-base-table/styles.css'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { User } from '../models/users.model'
import ProductPagination from './UsersPagination'

const TableUsers = () => {
    const listUsers=useSelector((state:RootState)=>state.users.value)
    const [modal, setModal] = useState(false);
    const [pag,setPag]=useState<any>({})
    const [nroItems,setNroItems]=useState(10)
   
   
   
    useEffect(()=>{
      if (listUsers.length>0 ){
          setPag({
            pageIni:0,
            pageEnd:0+(nroItems),
            currentPage:1,
            totalPages:(listUsers.length/nroItems)>Math.trunc(listUsers.length/nroItems)?(listUsers.length/nroItems)+1:Math.trunc(listUsers.length/nroItems),
            totalItems:listUsers.length
          })
       

      }
    },[listUsers])

    
    const hadleRowEvent=({rowData}:any)=>{
        //const userDetails=listUsers.de
        const userDetails=Object.keys(rowData).map(e=>{
                let newobj={title:e,content:rowData[e]}
                return newobj
            })

            
        console.log(userDetails)

        
    }

    const columnsUsers = [
        {
          key: 'firstName',
          title: 'firstName',
          dataKey: 'firstName',
          resizable:false,
          width: 150,
          frozen: Column.FrozenDirection.LEFT,
        },
        {
          key: 'lastName',
          title: 'lastName',
          dataKey: 'lastName',
          resizable:false,
          width: 150,
          frozen: Column.FrozenDirection.LEFT,
        },
        {
          key: 'age',
          title: 'age',
          dataKey: 'age',
          resizable:false,
          width: 60,
          align: Column.Alignment.CENTER,
          
        },
        {
          key: 'ip',
          title: 'ip',
          dataKey: 'ip',
          resizable:false,
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
            cellRenderer: ({ cellData:image }:any) =><img src={image} style={{width:50, borderRadius:100}}/>,
            
        },
      ]
  return (
    <div>
           <BaseTable   columns={columnsUsers} data={listUsers.slice(pag.pageIni,pag.pageEnd)} width={900} height={550}  rowEventHandlers={{onClick: (e)=>hadleRowEvent(e)}}/>
           {columnsUsers.length>0&&<ProductPagination pag={pag} setPag={setPag} nroItems={nroItems}/>}
            {/*            
            {columnsUsers.length>0&&columnsUsers.map((col,index)=>
            <Column title={col} key={index} dataKey={col} width={300}></Column>
            )} */}
           
            
    </div>
  )
}

export default TableUsers
