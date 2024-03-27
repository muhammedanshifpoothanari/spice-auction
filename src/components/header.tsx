import { Button } from "@/components/ui/button"

interface HeaderProps {
  header?: string;
  content?: string;
}

export default function Header({header, content}: HeaderProps) {

  
  return (
    <header className="bg-[url('/nav.svg')] px-8 py-14 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-green-600">{header}</h1>
      <h2 className="text-2xl bg-[#e9f5eb]  text-green-600">{content}</h2>
    </header>
  )
}
