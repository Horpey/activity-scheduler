"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  HomeIcon,
  CalendarIcon,
  ClipboardDocumentListIcon,
  XMarkIcon,
  UsersIcon,
  MapIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon, current: true },
  {
    name: "Activity Scheduler",
    href: "/activity-scheduler",
    icon: CalendarIcon,
    current: false,
  },
];

const admin = [
  {
    name: "Activities",
    href: "/activities",
    icon: ClipboardDocumentListIcon,
    current: false,
  },
  {
    name: "Task Performers",
    href: "/task-performers",
    icon: UsersIcon,
    current: false,
  },
  {
    name: "Pitches",
    href: "/pitches",
    icon: MapIcon,
    current: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>

                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                  <div className="flex h-16 shrink-0 items-center">
                    <Link href="/">
                      <Image
                        className="h-6 w-auto"
                        src="/logo.svg"
                        width={32}
                        height={32}
                        alt="Logo"
                      />
                    </Link>
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className={classNames(
                                  item.current
                                    ? "bg-gray-50 text-primary-100"
                                    : "text-gray-700 hover:text-primary-100 hover:bg-gray-50",
                                  "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold py-5"
                                )}
                              >
                                .....
                                <item.icon
                                  className={classNames(
                                    item.current
                                      ? "text-primary-100"
                                      : "text-gray-400 group-hover:text-primary-100",
                                    "h-6 w-6 shrink-0"
                                  )}
                                  aria-hidden="true"
                                />
                                {item.name}
                              </Link>
                            </li>
                          ))}

                          <li>
                            <p className="text-xs font-semibold leading-6 text-gray-400 uppercase tracking-widest px-4">
                              Admin
                            </p>
                          </li>

                          {admin.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className={classNames(
                                  item.current
                                    ? "bg-gray-50 text-primary-100"
                                    : "text-gray-700 hover:text-primary-100 hover:bg-gray-50",
                                  "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold py-5"
                                )}
                              >
                                <item.icon
                                  className={classNames(
                                    item.current
                                      ? "text-primary-100"
                                      : "text-gray-400 group-hover:text-primary-100",
                                    "h-6 w-6 shrink-0"
                                  )}
                                  aria-hidden="true"
                                />
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-100 bg-white px-6">
          <div className="flex h-16 shrink-0 items-center mt-8 px-4">
            <Link href="/">
              <Image
                className="h-6 w-auto"
                src="/logo.svg"
                width={32}
                height={32}
                alt="Logo"
              />
            </Link>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-50 text-primary-100"
                            : "text-gray-700 hover:text-primary hover:bg-gray-50",
                          "group flex gap-x-3 rounded-md px-4 py-5 text-sm leading-6 font-semibold"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-primary-100"
                              : "text-gray-400 group-hover:text-primary-100",
                            "h-6 w-6 shrink-0"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}

                  <li>
                    <p className="text-xs font-semibold leading-6 text-gray-400 uppercase tracking-widest px-4">
                      Admin
                    </p>
                  </li>

                  {admin.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-50 text-primary-100"
                            : "text-gray-700 hover:text-primary hover:bg-gray-50",
                          "group flex gap-x-3 rounded-md px-4 py-5 text-sm leading-6 font-semibold"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-primary-100"
                              : "text-gray-400 group-hover:text-primary-100",
                            "h-6 w-6 shrink-0"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">
          Dashboard
        </div>

        <Link
          className="bg-primary-100 text-white rounded-md p-4 text-center"
          href="/activity-scheduler"
        >
          Schedule a task
        </Link>
      </div>
    </>
  );
}

export default Sidebar;
