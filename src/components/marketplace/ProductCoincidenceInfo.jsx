import { classNames } from '@/utils/class-names'

export default function ProductCoincidenceInfo({
  productCoincidenceInfo,
  ...otherProps
}) {
  const { className: inheritClassName = '', ...rest } = otherProps

  return (
    <div
      className={classNames(
        'card p-2 bg-black/45 backdrop-blur-sm ring-black/50 ring-2',
        inheritClassName
      )}
      {...rest}
    >
      <div
        className="text-xs text-white w-30 flex flex-col items-center gap-y-2"
        sm="w-50"
        md="w-35"
        xl="w-60"
      >
        <div>
          <p
            className="flex flex-col items-center gap-y-1"
            sm="flex-row gap-x-1"
            md="flex-col"
            xl="flex-row gap-x-2"
          >
            <span>
              Margen de error
              <span className="hidden" sm="inline" md="hidden" xl="inline">
                : &nbsp;
              </span>
            </span>
            <span
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold text-danger"
              ring="2 danger"
            >
              <span className="mr-1">±</span>
              <span>{productCoincidenceInfo.errorMargin}</span>
              <span>%</span>
            </span>
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm text-green-300  font-bold">Categoría</p>
          <p>{productCoincidenceInfo.topic}</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-green-300 font-bold">Basado en</p>
          <p>{productCoincidenceInfo.basedOn}</p>
        </div>
      </div>
    </div>
  )
}
