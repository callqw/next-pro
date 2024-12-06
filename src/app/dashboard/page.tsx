import React from 'react'
const my: Global.MyGlobal = function (x) {
  return x.toString()
}
const cock: Global.CockProps<number, boolean> = function (x) {
  return false
}
export default function Page() {
  let a = cock(12);
  console.log(typeof a);

  return (
    <div>
      dashboard

    </div>
  )
}
