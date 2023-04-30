"use client";

import { useGlobalContext } from "@/context/store";
import { PitchType } from "@/types/PitchType";
import { PropsType } from "@/types/PropsType";
import toast, { Toaster } from "react-hot-toast";

function PitchesTable() {
  const { pitches } = useGlobalContext() as PropsType;

  const pendingFeature = () => {
    toast.error("This feature is not yet available");
  };

  return (
    <>
      <table className="table-auto w-full text-left">
        <thead>
          <tr>
            <th className="px-4 py-2">S/N</th>
            <th className="px-4 py-2">Pitch</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {pitches?.map((type: PitchType, index: number) => (
            <tr key={index}>
              <td className="border px-4 py-3">{index + 1}</td>
              <td className="border px-4 py-3">{type?.pitch}</td>
              <td className="border px-4 py-3 space-x-3">
                <button
                  onClick={() => pendingFeature()}
                  className=" text-primary-100"
                >
                  Edit
                </button>
                <button
                  onClick={() => pendingFeature()}
                  className="text-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Toaster />
    </>
  );
}

export default PitchesTable;
