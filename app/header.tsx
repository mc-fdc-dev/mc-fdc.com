import Link from "next/link";

interface LinkT {
  name: string;
  value: string;
}

const Header = () => {
  const links: LinkT[] = [
    {
      name: "services",
      value: "/services"
    },
    {
      name: "news",
      value: "/news"
    }
  ]
  return (
    <header className="h-16 border-b">
      <div className="h-full flex items-center max-w-5xl w-full mx-auto px-2">
        <Link className="text-2xl font-medium" href="/">Kawauso Labo</Link>
        <div className="ml-auto space-x-4">
          {links.map((link, index) => (
            <Link key={index} href={link.value} className="font-medium hover:text-[#fc5603]">{link.name}</Link>
          ))}
        </div>
      </div>
    </header>
  )
};

export default Header;