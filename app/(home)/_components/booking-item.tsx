import { Avatar, AvatarImage, AvatarFallback } from "@/app/_components/ui/avatar"
import { Card, CardContent } from "../../_components/ui/card"
import { Badge } from "@/app/_components/ui/badge"

const BookingItem = () => {
    return (
        <Card>
            <CardContent className="p-5 flex justify-between py-0">
                <div className="flex flex-col gap-2 py-5">
                    <Badge className="hover:* w-fit" >Confirmado</Badge> 
                    <h2 className="font-bold">Corte de Cabelo</h2>
                    <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                            <AvatarImage src="https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png"/>
                            <AvatarFallback>image</AvatarFallback>
                        </Avatar>
                        <h3 className="text-sm">Vintage Barber</h3>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center px-3 border-l border-solid border-secondary">
                    <p>Fevereiro</p>
                    <p className="text-2xl">06</p>
                    <p className="text-sm">09:45</p>
                </div>
            </CardContent>
        </Card>
    )
}

export default BookingItem;