import { FC, PropsWithChildren } from 'react'
import { cn } from "@/utils"

interface Props extends PropsWithChildren {
  type: 1 | 2 | 3
  /**
   * 1: 主语
   * 2：谓语
   * 3：宾语
   */
  description:string
  className?: string;
}


const typeMap = {
  1: {
    className: 'bg-red-500/40',
    text: '主语'
  },
  2: {
    className: 'bg-green-500/40',
    text: '谓语'
  },
  3: {
    className: 'bg-blue-500/40',
    text: '宾语'
  }
}
export const Fragment: FC<Props> = (props) => {

  const {
    type,
    description,
    children,
    className
  } = props

  return (
    <div className={cn('w-fit', className)}>
      <p className='text-center'>{typeMap[type].text}</p>
      <p className={cn('w-fit px-2 py-0.5 rounded font-bold', typeMap[type].className) }>
        {children}
      </p>
      <p className='text-center'>{description}</p>
    </div>
  );
} 
