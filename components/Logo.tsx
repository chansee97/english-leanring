import Image from "next/image";
export const Logo = () => {
  return (
    <Image
      className="bg-[#F9CC15] rounded hidden lg:block"
      src="/logo.svg"
      width={30}
      height={30} alt="Picture of the author" />
  )
}