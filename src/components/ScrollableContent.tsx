
import React, { ReactNode } from 'react'

interface ScrollableContentProps {
  children: ReactNode
  maxHeight?: string
  className?: string
}

const ScrollableContent: React.FC<ScrollableContentProps> = ({ 
  children, 
  maxHeight = 'max-h-96',
  className = ''
}) => {
  return (
    <div className={`${maxHeight} overflow-y-auto scrollbar-thin scrollbar-thumb-sky-400 scrollbar-track-sky-100 hover:scrollbar-thumb-sky-500 ${className}`}>
      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 8px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #e0f2fe;
          border-radius: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #38bdf8;
          border-radius: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #0ea5e9;
        }
        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: #38bdf8 #e0f2fe;
        }
      `}</style>
      {children}
    </div>
  )
}

export default ScrollableContent
