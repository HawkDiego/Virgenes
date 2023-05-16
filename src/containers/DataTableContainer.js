import { DataTableModal } from '@/components/DataTableModal'
import { useDataTableContainer } from '@/hooks/useDataTableContainer'
import { Box, Table, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react'
import { useState } from 'react'

export const DataTableContainer = () => {
  const {
    handleAddUser,
    handleInputChange,
    isOpen,
    onOpen,
    onClose,
    dataTable,
    newUser
  } = useDataTableContainer()
  return (
    <Box
      overflowX='auto'
      backgroundImage="url('/images/bg.png')"
      backgroundSize='cover'
      height='100vh'
      backgroundColor='#011A2A'
      color='#DFDFDF'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      paddingTop='50px'>
      <Table width='80%'>
        <Thead>
          <Tr>
            <Th color='yellow'>Nombre</Th>
            <Th color='yellow'>Celular</Th>
            <Th color='yellow'>Email</Th>
          </Tr>
        </Thead>
        <Tbody>
          {dataTable.map((user) => (
            <Tr key={user.id}>
              <Td color='#DFDFDF'>{user.nombre}</Td>
              <Td>{user.celular}</Td>
              <Td>{user.email}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Button
        mt={4}
        onClick={onOpen}
        colorScheme='yellow'>
        Registrar usuario
      </Button>
      <DataTableModal
        handleAddUser={handleAddUser}
        handleInputChange={handleInputChange}
        onClose={onClose}
        isOpen={isOpen}
        newUser={newUser}
      />
    </Box>
  )
}
