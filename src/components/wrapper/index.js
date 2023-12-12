import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useNavbar } from "../contexts/navbarContext"

export const Wrapper = () => {
    const location = useLocation()
    const { setNavbar } = useNavbar()
    useEffect(() => {
        document.documentElement.scrollTo(0, 0)
        setNavbar(false)
    }, [location.pathname])
  return null
}
