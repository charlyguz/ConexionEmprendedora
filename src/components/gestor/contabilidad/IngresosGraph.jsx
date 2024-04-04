import React from 'react'
import ReactApexChart from 'react-apexcharts' // Corregido a 'react-apexcharts'

export default function IngresosGraph() {
  const options = {
    chart: {
      height: 200,
      type: 'area',
      fontFamily: 'Inter, sans-serif',
      redrawOnWindowResize: true,

      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: true,
      },
    },
    legend: {
      show: true,
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      width: 6,
    },
    grid: {
      show: false,
      padding: {
        left: 2,
        right: 2,
        top: -26,
      },
    },
    series: [
      {
        name: 'Ingresos Diarios',
        data: [1500, 1650, 1930, 1970, 2000, 2400],
        color: '#00FF52',
        zIndex: 2,
      },
    ],
    xaxis: {
      categories: [
        '12:00 AM',
        '13:00 PM',
        '14:00 PM',
        '15:00 PM',
        '16:00 PM',
        '17:00 PM',
        '17:00 PM',
      ],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        formatter: function (value) {
          return '$' + value
        },
      },
    },
  }

  return (
    <div className="h-full w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between">
        <div>
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white pe-1">
            {options.series[0].name}
          </h5>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            $ {options.series[0].data[5]} pesos mexicanos
          </p>
        </div>
        <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
          12%
          <svg
            className="w-3 h-3 ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13V1m0 0L1 5m4-4 4 4"
            />
          </svg>
        </div>
      </div>

      <ReactApexChart
        options={options}
        series={options.series}
        chart={options.chart}
        type="area"
        height={200}
      />

      <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
        <div className="flex justify-between items-center pt-5">
          {/* <!-- Button --> */}

          {/* <!-- Dropdown menu --> */}
          <a
            href="#"
            className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2"
          >
            Vista simplificada
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
