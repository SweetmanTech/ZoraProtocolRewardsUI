import { useEffect } from "react"
import BaseLayout from "./BaseLayout"
import ContainedLayout from "./ContainedLayout"
import { ILayout } from "./types"
import { useTheme } from "../../providers/ThemeProvider"

const layoutContainers = {
  base: BaseLayout,
  contained: ContainedLayout,
}

interface ILayoutFactory extends ILayout {
  type: keyof typeof layoutContainers
}

function Layout({ children, type }: ILayoutFactory) {
  const { onChangeThemeConfig } = useTheme()

  useEffect(() => {
    onChangeThemeConfig("dark")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const Container = layoutContainers[type]

  return <Container>{children}</Container>
}

export default Layout
