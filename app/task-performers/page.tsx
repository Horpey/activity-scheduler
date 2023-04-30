import PerformersTable from "@/components/PerformersTable";

function TaskPerformersPage() {
  return (
    <div>
      <div className="md:grid grid-cols-12 items-center">
        <div className="col-span-10">
          <h1 className="font-light md:text-5xl text-2xl">
            All Task Performers
          </h1>
        </div>
        <div className="col-span-2">
          <button className="bg-primary-100 text-white rounded-md p-4">
            Add Performer
          </button>
        </div>
      </div>

      <div className="my-10">
        <div className="overflow-x-auto">
          <PerformersTable />
        </div>
      </div>
    </div>
  );
}

export default TaskPerformersPage;
