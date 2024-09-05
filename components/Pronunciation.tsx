import { FC, PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
}

export const Pronunciation: FC<Props> = (props) => {
  const { children } = props

  return (
    <span className="inline-flex items-center font-bold">
      {children}
      <span className="icon-[tabler--volume] mx-1 cursor-pointer hover:scale-125 transition-transform"></span>
    </span>
  );
} 
