import React from 'react'
import ReactApexChart from 'react-apexcharts' // Corregido a 'react-apexcharts'

export default function Status() {
  const options = {
    series: [
      {
        name: 'Ingresos',
        color: '#00FF52',
        data: ['2400'],
      },
      {
        name: 'Gastos',
        data: ['760'],
        color: '#f00707',
      },
    ],
    chart: {
      sparkline: {
        enabled: false,
      },
      type: 'bar',
      width: '100%',
      height: 400,
      toolbar: {
        show: false,
      },
    },
    fill: {
      opacity: 1,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        columnWidth: '100%',
        borderRadiusApplication: 'end',
        borderRadius: 6,
        dataLabels: {
          position: 'top',
        },
      },
    },
    legend: {
      show: true,
      position: 'bottom',
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      shared: true,
      intersect: false,
      formatter: function (value) {
        return '$' + value
      },
    },
    xaxis: {
      labels: {
        show: true,
        style: {
          fontFamily: 'Inter, sans-serif',
          cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400',
        },
        formatter: function (value) {
          return '$' + value
        },
      },
      categories: ['Abr, 1'],
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          fontFamily: 'Inter, sans-serif',
          cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400',
        },
      },
    },
    grid: {
      show: true,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -20,
      },
    },
    fill: {
      opacity: 1,
    },
  }

  return (
    <div className="h-full w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between border-gray-200 border-b dark:border-gray-700 pb-3">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white pe-1">
          Salud Financera
        </h5>
        <div>
          <span className="bg-green-100 text-green-800 text-xs font-normal inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
            Saludable
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 py-3">
        <dl>
          <dt className="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">
            {options.series[0].name} diarios
          </dt>
          <dd className="leading-none text-xl font-bold text-green-500 dark:text-green-400">
            $ {options.series[0].data}
          </dd>
        </dl>
        <dl>
          <dt className="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">
            {options.series[1].name} diarios
          </dt>
          <dd className="leading-none text-xl font-bold text-red-600 dark:text-red-500">
            $ -{options.series[1].data}{' '}
          </dd>
        </dl>
      </div>

      <ReactApexChart
        options={options}
        series={options.series}
        type="bar"
        height={150}
      />

      <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
        <div className="flex justify-between items-center pt-5">
          {/* <!-- Button --> */}

          <a
            href="#"
            className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2"
          >
            Ver mas
            <svg
              className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
