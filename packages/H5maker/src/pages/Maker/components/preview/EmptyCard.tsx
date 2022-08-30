import type { Identifier, XYCoord } from 'dnd-core'
import { FC, useMemo } from 'react'
import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import update from 'immutability-helper'
import classnames from 'classnames'
import { IComponentItemProps } from '../comList/schema'

export interface EmptyCardProps {
  cards: [] | IComponentItemProps[]
  setCards: React.Dispatch<React.SetStateAction<[] | IComponentItemProps[]>>
}

interface DragItem {
  originalIndex: number
  comp: IComponentItemProps
}

export const EmptyCard: FC<EmptyCardProps> = ({ cards, setCards }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: 'comp',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    drop: (item,monitor)=>{
      if (!ref.current) {
        return
      }
      setCards([item.comp])
    }
  })

  drop(ref)

  return (
    <div
      ref={ref}
      className={classnames('empty-card-container')}
      data-handler-id={handlerId}
    >
      组件放置区
    </div>
  )
}
