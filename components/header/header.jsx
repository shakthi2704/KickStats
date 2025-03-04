import React from "react"
import SearchInput from "./search-input"
import ModeToggle from "../theme/mode-toggle"
import Notification from "./Notification"
import ProfileDropdown from "./profile-dropdown"

const Header = () => {
  return (
    <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md flex h-16 shrink-0 items-center gap-2 px-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 dark:shadow-md dark:inset-shadow-gray-700">
      <div className="flex items-center gap-2">
        <a href="#" className="flex items-center gap-2 font-medium">
          {/* <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GalleryVerticalEnd className="size-4" />
          </div> */}
          <span className="text-lg">StatStriker</span>
        </a>
      </div>
      <div className="flex-1 flex justify-center">
        <SearchInput />
      </div>

      <div className="flex items-center  gap-1.5 md:gap-4  pr-4">
        <ModeToggle />
        <Notification />
        <ProfileDropdown />
      </div>
    </header>
  )
}

export default Header
