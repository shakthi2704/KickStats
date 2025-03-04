import Header from "@/components/header/header"
import NavigationMenu from "@/components/menubar/menubar"
import React from "react"

const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col justify-between px-4 md:px-8">
      <Header />
      <div className="my-4 py-4">
        <NavigationMenu />
      </div>
      <div className="flex-1 rounded-xl bg-muted/20 p-4"></div>
      <div className="flex-1 rounded-xl bg-muted/20 p-4"></div>
    </div>
  )
}

export default Dashboard
