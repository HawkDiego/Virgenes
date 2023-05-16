import { useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'

export const useDataTableContainer = () => {
  const data = [
    {
      id: 1,
      nombre: 'Juan Pérez',
      celular: '555-1234',
      email: 'juan@example.com'
    },
    {
      id: 2,
      nombre: 'María López',
      celular: '555-5678',
      email: 'maria@example.com'
    },
    {
      id: 3,
      nombre: 'Carlos Ramírez',
      celular: '555-9012',
      email: 'carlos@example.com'
    }
  ]

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [dataTable, setDataTable] = useState(data)
  const [newUser, setNewUser] = useState({ nombre: '', celular: '', email: '' })

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value })
  }

  const handleAddUser = () => {
    console.log('Nuevo usuario:', newUser)
    setDataTable([...dataTable, newUser])
    setNewUser({ nombre: '', celular: '', email: '' })
    onClose()
  }
  return {
    handleAddUser,
    handleInputChange,
    isOpen,
    onOpen,
    onClose,
    dataTable,
    newUser,
    setNewUser
  }
}
