import React from "react"

export default function ItemsList({ children, title }) {
  return (
    <section className='space-y-4 [&>ul]:space-y-3'>
      <h4>{title}</h4>
      <ul className='text-tertiary-text text-xs [&>li]:cursor-pointer [&>li]:hover:text-white [&>li]:w-max'>
        {children}
      </ul>
    </section>
  )
}
