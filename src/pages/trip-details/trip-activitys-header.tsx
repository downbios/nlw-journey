import { Plus } from "lucide-react";
import { Button } from "../../components/button";

interface TripActivityHeaderProps {
  openCreateActivityModal: () => void;
}

export function TripActivityHeader({
  openCreateActivityModal,
}: TripActivityHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="font-semibold text-3xl">Atividades</h2>
      <Button variant="primary" onClick={openCreateActivityModal}>
        <Plus className="size-5" />
        Cadastrar atividade
      </Button>
    </div>
  );
}
