import React from 'react'
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react'
export const DataTableModal = ({
  isOpen,
  onClose,
  handleAddUser,
  handleInputChange,
  newUser
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Registrar nuevo usuario</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Nombre</FormLabel>
            <Input
              name='nombre'
              value={newUser.nombre}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl mt={2}>
            <FormLabel>Celular</FormLabel>
            <Input
              name='celular'
              value={newUser.celular}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl mt={2}>
            <FormLabel>Email</FormLabel>
            <Input
              name='email'
              value={newUser.email}
              onChange={handleInputChange}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme='blue'
            onClick={handleAddUser}>
            Guardar
          </Button>
          <Button
            ml={2}
            onClick={onClose}>
            Cancelar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
