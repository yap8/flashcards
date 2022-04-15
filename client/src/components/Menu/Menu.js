import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { closeMenu } from "../../redux/actions/menuActions"

const Menu = ({ className, children, open }) => {
  const classes = `w-44 bg-white rounded rounded-tl-none divide-y divide-gray-100 shadow absolute z-10 ${open ? '' : 'hidden' } ${className}`
  const dispatch = useDispatch()
  const wrapperRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (open && wrapperRef.current && !wrapperRef.current.contains(e.target) && e.which === 1 && !e.target.getAttribute('data-menu')) {
        dispatch(closeMenu())
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [dispatch, open, wrapperRef])

  return (
    <div className={ classes } ref={ wrapperRef }>
      <ul className="p-2">
        { children }
      </ul>
    </div>
  )
}

export default Menu
