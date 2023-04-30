import ActivitiesTable from "@/components/ActivitiesTable";

function ActivitiesPage() {
  return (
    <div>
      <div className="md:grid grid-cols-12 items-center">
        <div className="col-span-10">
          <h1 id="heading" className="font-light md:text-5xl text-2xl">
            All Activity types
          </h1>
        </div>
        <div className="col-span-2">
          <button className="bg-primary-100 text-white rounded-md p-4">
            Add Activity type
          </button>
        </div>
      </div>

      <div className="my-10">
        <div className="overflow-x-auto">
          <ActivitiesTable />
        </div>
      </div>
    </div>
  );
}

export default ActivitiesPage;
