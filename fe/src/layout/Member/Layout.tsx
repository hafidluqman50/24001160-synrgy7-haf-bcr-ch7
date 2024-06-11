import { httpServer } from "@/lib/server";
import { PropsWithChildren, ReactElement } from "react";
import { QueryFunctionContext, useQuery } from "react-query";
import Header from "./Header";
import Footer from "./Footer";
import { Sidebar, SidebarMenu } from "@/components/Sidebar";
import { Home, Truck } from "lucide-react";

export default function Layout({children, sidebar}: PropsWithChildren<{sidebar:string}>): ReactElement {
  
  const fetchCurrentUser = async({
    queryKey
  }: QueryFunctionContext): Promise<{
    name:string,
    email:string
  } | undefined> => {
    const request = await httpServer.get('/api/current-user')
    
    if(request !== undefined) {
      return request.data.data
    }
  }
  
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ['currentUser'],
    queryFn: fetchCurrentUser
  })
  
  return(
    <>
      <div className="container-fluid p-0 vh-100">
        <div className="row vh-100" style={{
          overflow:'hidden'
        }}>
          <div className="col-md-1 p-0">
            <Sidebar>
              <SidebarMenu
                title="Dashboard"
                icon={<Home />}
                isActive={sidebar == 'dashboard'}
                to="/member/dashboard"
              />
              <SidebarMenu
                title="Cars"
                icon={<Truck />}
                isActive={sidebar == 'cars'}
                to="/member/cars"
              />
            </Sidebar>
          </div>
          <div className="col-md-11 p-0">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}