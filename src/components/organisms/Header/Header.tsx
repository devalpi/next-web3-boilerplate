import { Grid } from '@nextui-org/react'
import * as S from './Header.style'

export const Header = () => {
  return (
    <Grid.Container gap={2} justify="space-between">
      <Grid>
        <S.HeaderTitle>next-web3-boilerplate</S.HeaderTitle>
      </Grid>
      <Grid>
        {
          // todo: add web3 status component
        }
      </Grid>
    </Grid.Container>
  )
}
