
import { collection, onSnapshot,doc,docRef } from 'firebase/firestore';

import firebase from "./firebase";
import db from "./firebase";
import React, { useState,useEffect } from 'react';
import { GoogleMap, useJsApiLoader,Marker } from '@react-google-maps/api';
import {google} from 'google-maps';


  
function App(){
    const containerStyle = {
        width: '400px',
        height: '400px'
      };
const [users, setUsers] = useState([]);
const [latitude, setLatitude] = useState(26)
const [longitude, setLongitude] = useState(71)




console.log(users)
const docRef = doc(db, 'users' ,'2')

useEffect(()=>


  
onSnapshot(docRef, (doc) =>{
  setLatitude(parseInt(doc.data().lat, doc.data))
 setLongitude(parseInt(doc.data().long, doc.data))

  //onSnapshot(collection(db, "users"),(snapshot)=> 
   // setUsers(snapshot.docs.map(doc => doc.data()))
}
  ),[]);

//var cname =location.state.state.map((n) =>n.name);
//Object.keys(Type).forEach(AttributeType1 => {
  //formData.append('AttributeType1', Type[AttributeType1]);
//})





//setTimeout(() => {
  //var lovk = (users.map((n) => n.lat))

  //lovk.forEach((x) => {
  //  setLatitude(parseInt(lovk));
    
   // console.log(latitude)
  //});
//var aer =[];
 // aer = lovk.map(e=>Number(e));
  //setLatitude(aer)
  //console.log(latitude)

 // for (var i = 0; i < lovk.length; i++){
 
        // Instead of parseInt(), Number()
        // can also be used
    
   //  aer=(lovk[i]);
     //setLatitude(aer)
     //console.log(aer) 
  //}
    

  //lovk.map(function (x){
   // setLatitude(parseInt(x,10))
   // console.log(latitude)
 // })
    
  
//var lpvk = (users.map((n) => n.long))



//for (var i = 0; i < lpvk.length; i++)
 //{
// Instead of parseInt(), Number()
// can also be used
//setLongitude(parseInt(lpvk[i]));

//console.log(longitude) 
 //}


//var arr
//lpvk.map(function (y){
  //h:(parseInt(y,10))
  //console.log(latitude)
//}

//arr = lpvk.map(e=>Number(e));
//setLongitude(arr)
//console.log(longitude)

//lpvk.forEach(function (y)  {
  //setLongitude(parseInt(lpvk));
 
//});
  
   


   

//},10000); 
//var result = a.map(function (x) { 
  //return parseInt(x, 10); 
//});

const products = [
  {

    position: { lat: latitude, lng: longitude}

},{
position: { lat: latitude, lng: longitude }
}
]
  

    
console.log(products)


  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBjYKwbQ8HSIIftyhrajw2t9onVBqkRzt4"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    products.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])


  return isLoaded ? (

    <div>
         <div id="wrapper" >
{/* <!-- Sidebar --> */}
<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
{/* 
  <!-- Sidebar - Brand --> */}
  <a class="sidebar-brand d-flex align-items-center justify-content-center" href={"Admin"}>
    
    <div class="sidebar-brand-icon ">
     LOGO
    </div>
  </a>
  <hr class="sidebar-divider my-0"/>
  <hr class="sidebar-divider"/>

{/* 
  
  <!-- Nav Item - Pages Collapse Menu --> */}
  <li class="nav-item">
    <a class="nav-link" href={"Dashboard"}>
     <i class="fas fa-fw fa-cog"></i>
      <span >Dashboard </span></a>
  </li>
  
  <li class="nav-item">
    <a class="nav-link collapsed" href="users.html" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
      <i class="fas fa-fw fa-cog"></i>
      <span>Users</span>
    </a>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
      <div class="bg-white py-2 collapse-inner rounded">
        
        <a class="collapse-item" href={"Subscribed"}>Subscribed Users</a>
        <a class="collapse-item" href={"Blocked"}>Blocked Users</a>
       
        
        
        
      </div>
    </div>
  </li>
  <li class="nav-item">
    <a class="nav-link collapsed" href="users.html" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
      <i class="fas fa-fw fa-cog"></i>
      <span>Hotspot</span>
    </a>
    <div id="collapseFour" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
      <div class="bg-white py-2 collapse-inner rounded">
        
        <a class="collapse-item" href={"Hotspot"}>Add Hotspot</a>
        <a class="collapse-item" href={"Allhotspots"}>All Hotspots</a>
        <a class="collapse-item" href={"Requests"}>Hotspot Requests</a>
        <a class="collapse-item" href={"Rejected"}>Rejected Hotspots</a>
       
        
        
        
      </div>
    </div>
  </li>
  <li class="nav-item">
    <a class="nav-link" href={"SubscriptionPlans"}>
     <i class="fas fa-fw fa-cog"></i>
      <span >Subscription Plans</span></a>
  </li>
 
   <li class="nav-item" >
    <a class="nav-link" href={"Transactions"}>
     <i class="fas fa-fw fa-cog"></i>
      <span >Transactions History</span></a>
  </li>
  
  
  
  <li class="nav-item" >
    <a class="nav-link" href={"Enquiry"}>
     <i class="fas fa-fw fa-cog"></i>
      <span >Enquiry</span></a>
  </li>
  <li class="nav-item" >
    <a class="nav-link" href={"Opop"}>
     <i class="fas fa-fw fa-cog"></i>
      <span >Location</span></a>
  </li>


{/* 
  <!-- Nav Item - Utilities Collapse Menu --> */}
  

  {/* <!-- Divider --> */}
  

  
 

 {/*  <!-- Sidebar Toggler (Sidebar) --> */}
  <div class="text-center d-none d-md-inline">
    <button class="rounded-circle border-0" id="sidebarToggle"></button>
  </div>
</ul>

{/* 
<!-- Content Wrapper --> */}
    <div id="content-wrapper" class="d-flex flex-column">

     {/*  <!-- Main Content --> */}
      <div id="content">

        {/* <!-- Topbar --> */}
        <header>
        <nav class="navbar navbar-expand navbar-dark bg-dark topbar mb-4 static-top shadow">

         {/*  <!-- Sidebar Toggle (Topbar) --> */}
          <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
            <i class="fa fa-bars"></i>
          </button>

         {/*  <!-- Topbar Search --> */}
          <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div class="input-group">
              <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
              <div class="input-group-append">
                <button class="btn btn-primary an" type="button">
                  <i class="fas fa-search fa-sm"></i>
                </button>
              </div>
            </div>
          </form>

       {/*    <!-- Topbar Navbar --> */}
          <ul class="navbar-nav ml-auto">

         {/*    <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
            <li class="nav-item dropdown no-arrow d-sm-none">
              <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-search fa-fw"></i>
              </a>
             {/*  <!-- Dropdown - Messages --> */}
              <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                <form class="form-inline mr-auto w-100 navbar-search">
                  <div class="input-group">
                    <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
                    <div class="input-group-append">
                      <button class="btn btn-primary an" type="button">
                        <i class="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>

         {/*    <!-- Nav Item - Alerts -->
            

            <!-- Nav Item - Messages -->
            

            

            <!-- Nav Item - User Information --> */}
            <li class="nav-item dropdown no-arrow">
              <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="mr-2 d-none d-lg-inline text-gray-600 small am">Anil Singh</span>
                <img class="img-profile rounded-circle" src={"ser8.jpg"}/>
                &nbsp; &nbsp;
                <button type="button" class="btn btn-primary an1">Logout</button>
              </a>
            {/*   <!-- Dropdown - User Information --> */}
              <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                
                
                
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Logout
                </a>
              </div>
            </li>
            

          </ul>

        </nav>
        </header>
     
    

        <table id="example" class="table table-striped table-bordered" >
<thead>
<tr><th class="bl5"> Name</th><th class="bl5"> Name</th>
     
  </tr>
</thead>
<tbody>
             {users.map((item,index)=>{
                 return(
                     <tr key={index}>
                         
                         <td>{item.lat}</td>
                         <td>{item.long}</td>
                    
                        
                     </tr>
                 );
             })}
         </tbody>


</table>
    

{latitude}{longitude}

    <GoogleMap
      mapContainerStyle={containerStyle}
      center={products}
     
      zoom={4}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      
     {products.map(({position}) => (
        <Marker
        position={position}
       ></Marker>
        ))}

    
      
      { /* Child components, such as markers, info windows, etc. */ }
      <></>
    </GoogleMap>
    
  
</div>

<footer class="sticky-footer bg-dark">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>&copy; Mobile App @ All right reserved</span>
          </div>
        </div>
      </footer>

 
</div>


<a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>
</div>
   











  




   </div>    


) : <></>
}

export default React.memo(App)