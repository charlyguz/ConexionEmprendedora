import { Fragment } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'

const days = [
  { id: 1, date: '2021-12-31' },
  { id: 2, date: '2024-04-01', isCurrentMonth: true, isToday: true },
  { id: 3, date: '2024-04-02', isCurrentMonth: true },
  { id: 4, date: '2024-04-03', isCurrentMonth: true },
  { id: 5, date: '2024-04-04', isCurrentMonth: true },
  { id: 6, date: '2024-04-05', isCurrentMonth: true, isSelected: true },
  { id: 7, date: '2024-04-06', isCurrentMonth: true },
  { id: 8, date: '2024-04-07', isCurrentMonth: true },
  { id: 9, date: '2024-04-08', isCurrentMonth: true },
  { id: 10, date: '2024-04-09', isCurrentMonth: true },
  { id: 11, date: '2024-04-10', isCurrentMonth: true },
  { id: 12, date: '2024-04-11', isCurrentMonth: true },
  { id: 13, date: '2024-04-12', isCurrentMonth: true },
  { id: 14, date: '2024-04-13', isCurrentMonth: true },
  { id: 15, date: '2024-04-14', isCurrentMonth: true },
  { id: 16, date: '2024-04-15', isCurrentMonth: true },
  { id: 17, date: '2024-04-16', isCurrentMonth: true },
  { id: 18, date: '2024-04-17', isCurrentMonth: true },
  { id: 19, date: '2024-04-18', isCurrentMonth: true },
  { id: 20, date: '2024-04-19', isCurrentMonth: true },
  { id: 21, date: '2024-04-20', isCurrentMonth: true },
  { id: 22, date: '2024-04-21', isCurrentMonth: true },
  { id: 23, date: '2024-04-22', isCurrentMonth: true },
  { id: 24, date: '2024-04-23', isCurrentMonth: true },
  { id: 25, date: '2024-04-24', isCurrentMonth: true },
  { id: 26, date: '2024-04-25', isCurrentMonth: true },
  { id: 27, date: '2024-04-26', isCurrentMonth: true },
  { id: 28, date: '2024-04-27', isCurrentMonth: true },
  { id: 29, date: '2024-04-28', isCurrentMonth: true },
  { id: 30, date: '2024-04-29', isCurrentMonth: true },
  { id: 31, date: '2024-04-30', isCurrentMonth: true },
  { id: 32, date: '2024-04-31', isCurrentMonth: true },
  { id: 33, date: '2024-02-04' },
  { id: 34, date: '2024-02-02' },
  { id: 35, date: '2024-02-03' },
  { id: 36, date: '2024-02-04' },
  { id: 37, date: '2024-02-05' },
  { id: 38, date: '2024-02-06' },
]
const meetings = [
  {
    id: 1,
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    start: '1:00 PM',
    startDatetime: '2024-04-21T13:00',
    end: '2:30 PM',
    endDatetime: '2024-04-21T14:30',
  },
  // More meetings...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Calendar() {
  return (
    <div className=" bg-white p-5 m-5 rounded-md">
      <div className="flex items-center">
        <h2 className="flex-auto font-semibold text-gray-900">
          Viernes 21 de Junio de 2024
        </h2>
        <button
          type="button"
          className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Previous month</span>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Next month</span>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
      <div className="mt-10 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
        <div>L</div>
        <div>M</div>
        <div>M</div>
        <div>J</div>
        <div>V</div>
        <div>S</div>
        <div>D</div>
      </div>
      <div className="mt-2 grid grid-cols-7 text-sm">
        {days.map((day, dayIdx) => (
          <div
            key={day.id}
            className={classNames(
              dayIdx > 6 && 'border-t border-gray-200',
              'py-2'
            )}
          >
            <button
              type="button"
              className={classNames(
                day.isSelected && 'text-white',
                !day.isSelected && day.isToday && 'text-indigo-600',
                !day.isSelected &&
                  !day.isToday &&
                  day.isCurrentMonth &&
                  'text-gray-900',
                !day.isSelected &&
                  !day.isToday &&
                  !day.isCurrentMonth &&
                  'text-gray-400',
                day.isSelected && day.isToday && 'bg-indigo-600',
                day.isSelected && !day.isToday && 'bg-gray-900',
                !day.isSelected && 'hover:bg-gray-200',
                (day.isSelected || day.isToday) && 'font-semibold',
                'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
              )}
            >
              <time dateTime={day.date}>
                {day.date.split('-').pop().replace(/^0/, '')}
              </time>
            </button>
          </div>
        ))}
      </div>
      <section className="mt-12">
        <h2 className="font-semibold text-gray-900">
          Agenda para <time dateTime="2024-04-21">21 de Junio, 2024</time>
        </h2>
        <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
          {meetings.map((meeting) => (
            <li
              key={meeting.id}
              className="group flex items-center space-x-4 rounded-xl py-2 px-4 focus-within:bg-gray-100 hover:bg-gray-100"
            >
              <img
                src={meeting.imageUrl}
                alt=""
                className="h-10 w-10 flex-none rounded-full"
              />
              <div className="flex-auto">
                <p className="text-gray-900">{meeting.name}</p>
                <p className="mt-0.5">
                  <time dateTime={meeting.startDatetime}>{meeting.start}</time>{' '}
                  - <time dateTime={meeting.endDatetime}>{meeting.end}</time>
                </p>
              </div>
              <Menu
                as="div"
                className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
              >
                <div>
                  <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
                    <span className="sr-only">Open options</span>
                    <EllipsisVerticalIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
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
                  <Menu.Items className="focus:outline-none absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Edit
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Cancel
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}
