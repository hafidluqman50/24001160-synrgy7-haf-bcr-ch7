import { httpServer } from "@/lib/server";
import { useQuery } from "react-query";
import Layout from "@/layout/SuperAdmin/Layout";
import { ReactElement } from "react";
import { BreadCrumb,BreadCrumbMenu } from "@/components/Breadcrumb";
import { 
  MainSection, 
  MainSectionMenuGroup, 
  MainSectionMenu, 
  MainSectionContent 
} from "@/components/MainSection";
import { Link } from "react-router-dom";
import { User } from "@/interfaces/User";
import { TableTanstack } from "@/components/Table";
import React from 'react'
import { ColumnDef } from "@tanstack/react-table";

export default function Main(): ReactElement {
  
  const fetchUserAdmins = async(): Promise<User[]> => {
    const request = await httpServer.get('/api/user-admin')
    
    return request.data.data.users
  }
  
  const { isLoading, data } = useQuery({
    queryKey: ['fetchUserAdmins'],
    queryFn: fetchUserAdmins
  })
  
  const columns = React.useMemo<ColumnDef<User>[]>(
    () => [
      {
        accessorFn: (row, key) => key+1,
        id:'no',
        header: () => 'No'
      },
      {
        accessorFn: row => row.name,
        id: 'name',
        header: () => <span>Nama Admin </span>,
        cell: info => info.getValue(),
      },
      {
        accessorFn: row => row.email,
        id: 'email',
        header: () => <span>Email</span>,
        cell: info => info.getValue(),
      },
      {
        accessorFn: row => row.id,
        id:'action',
        header: () => <span>#</span>,
        cell: (info) => (
          <>
            <Link to={`/superadmin/user-admins/edit/${info.getValue()}`} className="m-1">
              <button className="btn btn-success rounded-0"><i className="fas fa-pencil"></i> Edit </button>
            </Link>
            <button className="btn btn-danger rounded-0 m-1"><i className="fas fa-trash"></i> Hapus </button>
          </>
        ),
      }
    ],
    []
  )
  
  return(
    <Layout
      sidebar="user-admins"
    >
      <MainSection>
        <MainSectionMenuGroup title="USER ADMINS">
          <MainSectionMenu title="List User Admins" to="/superadmin/user-admins" isActive />
        </MainSectionMenuGroup>
        <MainSectionContent>
          <BreadCrumb>
            <BreadCrumbMenu title="User Admins"/>
            <BreadCrumbMenu title="List User Admins" isActive />
          </BreadCrumb>
          <div className="w-100">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <Link to="/superadmin/user-admins/create">
                        <button className="btn btn-primary rounded-0">
                          <i className="fas fa-plus"></i> Tambah Data
                        </button>
                      </Link>
                    </div>
                    <div className="card-body">
                      {
                        !isLoading ? 
                        <TableTanstack<User>
                          {...{
                            data,
                            columns
                          }}
                        /> : <></>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MainSectionContent>
      </MainSection>
    </Layout>
  )
}