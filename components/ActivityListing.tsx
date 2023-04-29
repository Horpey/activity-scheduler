"use client";

import { Fragment, useState } from "react";
import { useGlobalContext } from "@/context/store";
import { ActivityType } from "@/types/ActivityType";
import { PropsType } from "@/types/PropsType";
import { Dialog, Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";

import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

function ActivityListing() {
  const { activities, setActivities } = useGlobalContext() as PropsType;
  const [deleteModal = false, setDeleteModal] = useState<boolean>();
  const [activeDelete, setActiveDelete] = useState<ActivityType>();

  const confirmDelete = () => {
    const newActivities: ActivityType[] | undefined = activities?.filter(
      (activity: ActivityType) => activity.id !== activeDelete?.id
    );
    newActivities && setActivities(newActivities);
    setDeleteModal(false);
  };

  const formatDateTime = (datetime: string) => {
    const date = new Date(datetime);
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
    });
    return `${formattedDate} ${formattedTime}`;
  };

  return (
    <div>
      <div className="my-5">
        <div className="flex items-center justify-between">
          <h4 className="text-xl font-semibold">Upcoming Activity</h4>
        </div>

        <div className="flex flex-col my-5 space-y-1">
          {activities?.length === 0 ? (
            <div>
              <Image src="/pitch.jpeg" width={200} height={200} />
              <div className="text-gray-500 text-sm">No activities found.</div>
            </div>
          ) : (
            activities?.map((activity: ActivityType, index: number) => (
              <div key={index} className="relative flex">
                <div className="relative flex flex-col mt-1.5 items-center justify-center">
                  <div className="bg-gray-200 h-3 w-3 rounded-full"></div>
                  <div className="bg-gray-200 h-1 w-0.5 flex-grow mt-2"></div>
                </div>
                <div className="ml-4 text-gray-700 flex items-start mb-5">
                  <div>
                    <span className="capitalize">
                      {activity?.activity_type}{" "}
                    </span>
                    performed by{" "}
                    <span className="font-semibold text-primary-100">
                      {activity?.performer}
                    </span>
                    , <span>{activity?.pitch} </span>
                    <span className=" bg-gray-100 px-2 py-1 rounded-md text-sm ml-1">
                      {formatDateTime(activity?.datetime)}
                    </span>
                  </div>

                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="ml-3">
                        <span className="sr-only">More</span>
                        <EllipsisHorizontalIcon className="h-5 w-5" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute left-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                        <div className="px-1 py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href={`/activity-scheduler?id=${activity?.id}`}
                                className={`${
                                  active
                                    ? "bg-primary-100/20 "
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                Update
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={() => {
                                  setDeleteModal(true);
                                  setActiveDelete(activity);
                                }}
                                className={`${
                                  active
                                    ? "bg-primary-100/20 "
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                Delete
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <Transition appear show={deleteModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setDeleteModal(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Confirm Delete
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className=" text-gray-500 text-xs">
                      Are you sure you want to delete this activity? All of your
                      data will be permanently removed. This action cannot be
                      undone.
                    </p>
                  </div>

                  <div className="mt-4 space-x-2">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-primary-100/10 px-4 py-2 text-sm font-medium text-primary-100 hover:bg-primary-100/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => confirmDelete()}
                    >
                      Yes, Delete
                    </button>

                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-red-500  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => setDeleteModal(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default ActivityListing;
