"use client"; //terá interatividade do usuario, portanto usaremos use client
import { Button } from "@/app/_components/ui/button"
import { Input } from "@/app/_components/ui/input"
import { SearchIcon } from "lucide-react"

const Search = () =>{
    return (//gap foi o responsável por criar o espaço entre o input e o icone
        <div className="flex items-center gap-2"> 
            <Input placeholder="Busque por uma barbearia..."/>
                <Button variant="default">
                    <SearchIcon size={20}/>
                </Button>
            
        </div>
    )
}

export default Search;