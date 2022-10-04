import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'

import logoImg from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'

import { HeaderContainer, HeaderContent, NewTransactionButton } from './style'

export function Header() {
  const [showNewTransactionModal, setShowNewTransactionModal] =
    useState<boolean>(false)

  function handleCloseNewTransactionModal() {
    setShowNewTransactionModal(false)
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root
          open={showNewTransactionModal}
          onOpenChange={setShowNewTransactionModal}
        >
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal close={handleCloseNewTransactionModal} />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
