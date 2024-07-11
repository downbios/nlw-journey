import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

export function ImportantsLinks() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links Importantes</h2>
      <div className="space-y-5 ">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block text-zinc-100 font-medium">
              Reservas Airbnb
            </span>
            <a
              href="https://www.airbnb.com.br/rooms/104700011"
              className="block text-zinc-400 hover:text-zinc-200 text-xs truncate"
            >
              https://www.airbnb.com.br/rooms/10470001132132132323213213213
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block text-zinc-100 font-medium">
              Reservas Airbnb
            </span>
            <a
              href="https://www.airbnb.com.br/rooms/104700011"
              className="block text-zinc-400 hover:text-zinc-200 text-xs truncate"
            >
              https://www.airbnb.com.br/rooms/10470001132132132323213213213
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>
      </div>
      <Button variant="secundary" size="full">
        <Plus className="size-5" />
        Cadastrar novo link
      </Button>
    </div>
  );
}
