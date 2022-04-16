import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"

import { closeMenu } from "../../redux/actions/menuActions"
import mergeClasses from "../../helpers/mergeClasses"

const Menu = ({ className, children, open }) => {
  const classes = {
    base: 'w-44 bg-white rounded rounded-tl-none divide-y divide-gray-100 shadow absolute z-10',
    dark: 'dark:bg-slate-700',
    open: open ? '' : 'hidden',
    inherited: className || ''
  }

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
    <div className={mergeClasses(classes)} ref={wrapperRef}>
      <ul className="p-2">
        {children}
      </ul>
    </div>
  )
}

export default Menu
