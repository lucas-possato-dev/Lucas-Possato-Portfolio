import React, { useState } from 'react'

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false)
  const [showError, setShowError] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const message = formData.get('message')
    if (message.length >= 10) {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      if (response.ok) {
        setMessageSent(true)
        setShowError(false)
        setTimeout(() => {
          setMessageSent(false)
        }, 3000)
      }
    } else {
      setShowError(true)
      setTimeout(() => {
        setShowError(false)
      }, 3000)
    }
  }

  return (
    <div name="contato" className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/ecbc1905-1939-497d-958b-f6b0497afb1b" onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-red-500 text-gray-300'>Contato</p>
          <p className='text-gray-300 py-4'>Preencha o formulário abaixo para entrar em contato comigo.</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Nome' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        <textarea className="bg-[#ccd6f6] p-2" name="message" placeholder='Sua mensagem' rows="10"></textarea>
        <button className='text-white border-2 hover:bg-red-500 hover:border-red-500 px-4 py-3 my-8 mx-auto flex items-center'>Entre em Contato</button>
        {showError && <p className="text-red-500">A mensagem é muito curta.</p>}
        {messageSent && <p className="text-green-500">Mensagem enviada</p>}
      </form>
    </div>
  )
}

export default Contact
