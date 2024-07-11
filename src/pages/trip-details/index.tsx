import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { ImportantsLinks } from "./importants-links";
import { Guests } from "./guests";
import { Activitys } from "./activitys";
import { TripDestination } from "./trip-destination-header";
import { TripActivityHeader } from "./trip-activitys-header";

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true);
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false);
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <TripDestination />

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <TripActivityHeader
            openCreateActivityModal={openCreateActivityModal}
          />
          <Activitys />
        </div>

        <div className="w-80 space-y-6">
          <ImportantsLinks />

          <div className="w-full h-px bg-zinc-800" />

          <Guests />
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal
          closeCreateActivityModal={closeCreateActivityModal}
        />
      )}
    </div>
  );
}
