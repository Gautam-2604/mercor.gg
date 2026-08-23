import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {toast} from "sonner"
import axios from "axios";
import { BACKEND_URL } from "@/lib/config";

export function Form(){
    const [github, setGithub] = useState("")
    const [linkedIn, setLinkedIn] = useState("")

    async function onSubmit(){
        if(!github || !linkedIn){
            toast("Please provide valid Github and LinkedIn")
            return;
        }

        await axios.post(`${BACKEND_URL}/api/v1/pre-interview`,{
            github,
            linkedIn
        })
    }
    return(
        <div className="h-screen w-screen flex justify-center items-center">
      <div>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-light first:mt=0">
          AI Interview Kickstart
        </h2>
        <div className="p-2">
          <Input placeholder="LinkedIn URL" className="p-4" onChange={(e)=>setLinkedIn(e.target.value)} />
        </div>

        <div className="p-2">
          
        <Input placeholder="Github URL" className="p-4" onChange={(e)=>setGithub(e.target.value)}/>
        </div>
        
        <div className="flex justify-center p-4">
           <Button onClick={onSubmit}>Start Interview</Button>
        </div>
       
      </div>
    </div>
    )
}