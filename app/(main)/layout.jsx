const { ThemeProvider } = require("@/components/theme/theme-provider")

export default function DashboardLayout({ children }) {
  return (
    <div>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </div>
  )
}
