import React,{useEffect,useState} from 'react';



const Profile=()=>{

    const [datos,setdatos] = useState();
    const [userData,setUserData]=useState(localStorage.getItem("userData"));
    const obtenerDatos =async ()=>{

        const data=await fetch("https://historias-01.herokuapp.com/user/history",
            {
                headers:{
                Authorization: 'Bearer ' +localStorage.getItem("token")
            }});
        const  user=await data.json();
        setdatos(user);
    }

    const eliminar=(dato)=>{
        fetch("https://historias-01.herokuapp.com/history/delete/:id",
        )
        window.location.reload(true);
    }

    useEffect(()=>{
        obtenerDatos();
    },[])

    if(datos==null){
        return  <p>Cargando...</p>
    }
    return datos.length === 0 ? 
                (<div className="container m-5">
                    <h1 >No tienes historias por el momento <span className="font-weight-bold">"{JSON.parse(localStorage.getItem("userData")).username}"</span></h1>
                    <button className="btn btn-info mt-3" onClick={()=>window.location.replace("/edit")}>Crear historia</button>
                </div>)

            : (<div>    
                <div className="container">
                <h1 className="mt-4 mb-4">Aqui tienes tus historias <span className="font-weight-bold">"{JSON.parse(localStorage.getItem("userData")).username}"</span></h1>
                        <table className="table ml-3">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Fecha de creacion</th>
                                    <th scope="col">opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {datos.map( (dato,index )=>( 
                                    <tr key={index+1}>
                                        <th className="row">{index+1}</th>
                                        <td>{dato.title}</td>
                                        <td>{dato.createAt}</td>
                                        <td>
                                            <button className="mr-2 btn btn-success">Editar</button>
                                            <button onClick={()=>eliminar(dato)} className=" btn btn-danger">Eliminar</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button className="btn btn-info mt-3" onClick={()=>window.location.replace("/edit")}>Crear historia</button>
                    </div>
                </div>)
    
        
    
}

export default Profile;