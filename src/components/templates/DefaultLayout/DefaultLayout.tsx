import { Container } from '@nextui-org/react'
import { Footer } from '../../organisms/Footer'
import { Header } from '../../organisms/Header'
import * as S from './DefaultLayout.style'

export const DefaultLayout = ({ children }) => {
  return (
    <Container md>
      <S.DefaultLayout>
        <Header />
        <S.Main>{children}</S.Main>
        <Footer />
      </S.DefaultLayout>
    </Container>
  )
}
