import React,{useEffect,useState} from 'react';



const Profile=()=>{

    const [datos,setdatos]=useState();

    const obtenerDatos =async ()=>{

        const data=await fetch("https://historias-01.herokuapp.com/user/history",
            {
                headers:{
                Authorization: 'Bearer ' +localStorage.getItem("token") //the token is a variable which holds the token
            }});
        const  user=await data.json();
        setdatos(user);
        console.log(user);
    }


    useEffect(()=>{
        obtenerDatos();
    },[])

    if(datos==null){
        return  <p>Cargando...</p>
    }else{
        if(datos.length==0){
            return (<div className="container m-5">
                        <h1>No tienes historias por el momento</h1>
                    </div>)
        }else{
            return (<div>    
                    <div className="container">
                        <h1 className="mt-4 mb-4">Aqui estan tus historias usuario</h1>
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
                                                <button className=" btn btn-danger">Eliminar</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>)
        }
    }
}

export default Profile;