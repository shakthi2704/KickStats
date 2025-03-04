import React from "react"
import SearchInput from "./search-input"
import ModeToggle from "../theme/mode-toggle"
import Notification from "./Notification"
import ProfileDropdown from "./profile-dropdown"
import MainMenu from "../menubar/menubar"

const Header = () => {
  return (
    <header className="sticky bg-muted/30 top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 dark:shadow-md dark:inset-shadow-gray-700">
      <div className="flex items-center gap-2">
        <a href="#" className="flex items-center gap-2 font-medium">
          <span className="text-3xl">StatStriker</span>
        </a>
      </div>

      <div className="flex items-center gap-1.5 md:gap-4 ml-auto">
        <SearchInput />
        <Notification />
        <ModeToggle />
        <ProfileDropdown />
      </div>
    </header>
  )
}

export default Header
