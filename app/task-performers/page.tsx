function TaskPerformers() {
  return (
    <div>
      <div className="grid grid-cols-12 items-center">
        <div className="col-span-10">
          <h1 className="font-light text-5xl">All Task Performers</h1>
        </div>
        <div className="col-span-2">
          <button className="bg-primary-100 text-white rounded-md p-4">
            Add Performer
          </button>
        </div>
      </div>

      <div className="my-10">
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left">
            <thead>
              <tr>
                <th className="px-4 py-2">S/N</th>
                <th className="px-4 py-2">Performer</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-3">1</td>
                <td className="border px-4 py-3">John</td>
                <td className="border px-4 py-3 space-x-3">
                  <button className=" text-primary-100">Edit</button>
                  <button className="text-red-500">Delete</button>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-3">1</td>
                <td className="border px-4 py-3">James</td>
                <td className="border px-4 py-3 space-x-3">
                  <button className=" text-primary-100">Edit</button>
                  <button className="text-red-500">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TaskPerformers;
