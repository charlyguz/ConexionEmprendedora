import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react'
import { useState } from 'react'

const API_KEY = 'API_KEY'

export default function AImodel() {
  const [typing, setTyping] = useState(false)
  const [messages, setMessages] = useState([
    {
      message:
        'Soy tu amigo inteligente, puedes preguntar acerca de tus finanzas de tu empresa.',
      sender: 'assistant',
      direction: 'incoming',
    },
  ])

  async function callAImodel(chatMessages) {
    const data = [
      {
        tipo: 'Indicadores financieros',
        valores: [
          {
            coeficiente_de_liquidez: 1.33,
            punto_de_equilibrio: 0.5,
            utilidad_operativa: 0.63,
            rendimiento_dobre_activos: 0.25,
            rendimiento_sobre_capital: 1.19,
          },
        ],
      },
    ]

    let apiMessage = chatMessages.map((messageObject) => {
      let role = ''
      if (messageObject.direction === 'incoming') {
        role = 'assistant'
      } else {
        role = 'user'
      }
      return {
        role: role,
        content: messageObject.message,
      }
    })

    const PROMPT = {
      role: 'system',
      content:
        'Eres un asistente financiero que ayuda a entender métricas o indicadores financieros, como asistente estás dispuesto a ser claro y explicar de forma sencilla, también puedes responder acerca de preguntas generales. Basa tus respuestas según los datos de este json: ' +
        JSON.stringify(data),
    }

    const APY_BODY = {
      model: 'gpt-3.5-turbo-1106',
      messages: [PROMPT, ...apiMessage],
    }

    console.log('APY_BODY')
    console.log(APY_BODY)

    await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(APY_BODY),
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: 'assistant',
            direction: 'incoming',
          },
        ])
        setTyping(false)
      })
  }

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: 'user',
      direction: 'outgoing',
    }

    const newMessages = [...messages, newMessage]

    setMessages(newMessages)
    console.log(messages)

    setTyping(true)
    await callAImodel(newMessages)
  }
  return (
    <>
      <div className="h-full w-full rounded-md bg-slate-300 p-1">
        <MainContainer>
          <ChatContainer>
            <MessageList
              typingIndicator={
                typing ? (
                  <TypingIndicator content="Analizando tus indicadores" />
                ) : null
              }
            >
              {messages.map((message, i) => {
                return <Message key={i} model={message} />
              })}
            </MessageList>
            <MessageInput
              placeholder="Escribe tu mensaje"
              onSend={handleSend}
              attachButton={false}
            />
          </ChatContainer>
        </MainContainer>
      </div>
    </>
  )
}
