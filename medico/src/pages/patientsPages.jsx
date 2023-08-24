import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { get } from 'react-hook-form'

const patientsPages = () => {

const [data, setData] =useState()

useEffect(()=> {
  const getAllPatients  = async () =>{
    try {
      const response = await fetch('http://127.0.0.1:8000/api/patients')
      const patient =await response.json
      console.log(patient)
      //setData(patient)
      
    } catch (error) {
      console.log("ESTO ES UN ERROR POR SI FALLA La API",error)
    }
  }

  getAllPatients()

},[])


  return (
    <>
   <Navbar/>
   <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div className="md:flex">
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Patient</div>
        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Patient Name</a>
   <p className="mt-2 text-gray-500">Patient Description</p>
      </div>
    </div>
   </div>
    </>
  )
}

export default patientsPages
