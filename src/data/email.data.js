export const emails = [
  {
    id: 1,
    subject: 'Confirmación de recepción',
    sub_subject: 'Confirmación de recepción', 
    sender: 'Pedidos Margarita Inmuebles',
    href: '#',
    date: 'Hace unas horas',
    datetime: '22-01-2024',
    preview: 'Confirmamos la recepción de su pedido. Estamos procesándolo y pronto le enviaremos más información sobre el estado del mismo.',
    email: 'pedidosMargaritas@online.com',
    status: 'abierto',
    history: [
      {
        id: 1,
        author: 'Pedidos Margarita Inmuebles',
        date: 'Hace unas horas',
        datetime: '22-02-2024',
        body: "<p>Confirmamos la recepción de su pedido.<br>Estamos procesándolo y pronto le enviaremos más información sobre el estado del mismo.</p>",
        text: 'Confirmamos la recepción de su pedido. Estamos procesándolo y pronto le enviaremos más información sobre el estado del mismo.',
      }
    ]
  },
  {
    id: 2,
    subject: 'Pedido pendiente',
    sub_subject: 'Pedido pendiente',
    sender: 'Juan Perez',
    href: '#',
    date: 'Hace un día',
    datetime: '21-02-2024',
    preview:
      'Este correo es para informar que el pedido pendiente de la semana pasada ya está listo para ser retirado. Por favor, acercarse a la sucursal más cercana para retirar su pedido. Gracias por su preferencia.',
    subject: 'Pedido pendiente',
    email: 'juan18pedidos@gmail.com',
    status: 'abierto',
    history: [{
        id: 1,
        author: 'Juan Perez',
        date: 'Ayer a las 10:24am',
        datetime: '21-02-2024',
        body: "<p>Este correo es para informar que el pedido pendiente de la semana pasada ya está listo para ser retirado. <br> Por favor, acercarse a la sucursal más cercana para retirar su pedido. Gracias por su preferencia. <br> <br> Atentamente Juan Perez</p>",
        text: 'Este correo es para informar que el pedido pendiente de la semana pasada ya está listo para ser retirado. Por favor, acercarse a la sucursal más cercana para retirar su pedido. Gracias por su preferencia. Atentamente Juan Perez'
    }
  ]
  },
  {
    id: 3,
    subject: 'Solicitud de información',
    sub_subject: 'Solicitud de información',
    sender: 'Maria Sanchez',
    href: '#',
    date: 'Hace un día',
    datetime: '22-02-2024',
    preview: 'Quisiera obtener más detalles sobre las propiedades disponibles en su empresa. ¿Podrían enviarme información adicional?',
    email: 'maria.sanchez@gmail.com',
    status: 'abierto',
    history: [
      {
        id: 1,
        author: 'Maria Sanchez',
        date: 'Ayer a las 9:30am',
        datetime: '22-02-2024',
        body: "<p>Quisiera obtener más detalles sobre las propiedades disponibles en su empresa.<br>¿Podrían enviarme información adicional?</p>",
        text: 'Quisiera obtener más detalles sobre las propiedades disponibles en su empresa. ¿Podrían enviarme información adicional?',
      }
    ]
  },
  {
    id: 4,
    subject: 'Re: Confirmación de compra',
    sub_subject: 'Re: Confirmación de compra',
    sender: 'Emmanuel Rodriguez Reyes',
    href: '#',
    date: 'Hace 3 días',
    datetime: '20-02-2024',
    preview: 'Confirmo mi compra de platos de cerámica. Gracias por la atención.',
    email: 'maria.sanchez@gmail.com',
    status: 'abierto',
    history: [
      {
        id: 1,
        author: 'Yo',
        date: 'Martes a las 16:39pm',
        datetime: '20-02-2024',
        body: "<p>Confirmo mi compra de platos de cerámica. <br> Gracias por la atención.</p>",
        text: 'Confirmo mi compra de platos de cerámica. Gracias por la atención.',
      },
      {
        id: 2,
        author: 'Emmanuel Rodriguez Reyes',
        date: 'Martes a las 16:40pm',
        datetime: '20-02-2024',
        body: "<p>Favor de responder este correo para la confirmación de su compra de 50 platos de cerámica. <br> En caso de no responder, el pedido será aplazado para la próxima semana.</p>",
      }
    ]
  },
]