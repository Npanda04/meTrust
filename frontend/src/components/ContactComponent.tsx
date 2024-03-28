import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Link, useNavigate } from "react-router-dom"



import { useState } from "react"
import axios from "axios"





export default function Component() {
    const navigate = useNavigate()


    const [postInputs, setPostInputs] = useState({
        name: "",
        email: "",
        query: ""

    })

    async function sendFormDataRequest(){
        try {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/formData`, postInputs)
            console.log("form subbmitted")
            navigate("/")
            
        } catch (error) {
            console.log("error while loggining ")
            
        }
        
        
    }
  return (
    <div className="flex items-center justify-center min-h-screen">
    <div className="mx-auto w-[350px] space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Create a New Inquiry</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter your information to submit an inquiry</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input onChange={(e) =>{
            setPostInputs({
                ...postInputs,
                name: e.target.value
            })
          }} id="name" placeholder="Deepanshu" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input onChange={(e) =>{
            setPostInputs({
                ...postInputs,
                email: e.target.value
            })
          }} id="email" placeholder="deepanshu@example.com enter a unique email" required type="email" />
        </div>
<div className="space-y-2">
  <Label htmlFor="query">Query</Label>
  <textarea
    onChange={(e) => {
      setPostInputs({
        ...postInputs,
        query: e.target.value
      });
    }}
    id="query"
    required
    className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    style={{ height: '150px' }} // Adjust the height as needed
  ></textarea>
</div>


        <Button onClick={sendFormDataRequest} className="w-full" type="submit">
        Submit Inquiry
        </Button>
  
        <div className="text-center">
          <p className="text-gray-500 dark:text-gray-400">
            Not sure what to do reach us on ?{" "}
            <br></br>
            <Link className="underline" to="/">
              metrusts.info@gmail.com
            </Link>
          </p>
          
        </div>
      </div>
    </div>
  </div>
  
  
  )
}

