import { MapPin, Calendar, Settings2 } from "lucide-react";
import { Button } from "../../components/button";

export function TripDestination() {
  return (
    <div className="bg-zinc-900 shadow-shape px-4 h-16 rounded-xl flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400 " />
        <span className="text-zinc-100 text-lg">Florianóplis, Brasil</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400 " />
          <span className="text-zinc-100 text-lg">17 a 23 de Agosto</span>
        </div>

        <div className="w-px h-6 bg-zinc-800" />

        <Button variant="secundary">
          Alterar Local/Data
          <Settings2 className="size-5" />
        </Button>
      </div>
    </div>
  );
}
