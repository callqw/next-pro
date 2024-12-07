import React from 'react'
const my: Global.MyGlobal = function (x) {
  return x.toString()
}
const cock: Global.CockProps<number, boolean> = function (x) {
  return false
}
type Str = ['p1', "p2", "p3", "p4", "p5", "p6"];
type Arr<U, T extends string[] = []> = T["length"] extends U ? T[number] : Arr<U, [...T, `p${T["length"]}`]>;

type ObjOthers<U extends number> = {
  [key in Arr<U>]: string;
}
type Obj = Omit<ObjOthers<7> & {
  id: number
}, "p0">
type Fun<T extends string[] = []> = T["length"] extends 3 ? T[number] : Fun<[...T, `Su${T["length"]}`]>
type Cc = Fun
const obj: Obj = {
  id: 1,
  p1: "",
  p2: "",
  p3: "",
  p4: "",
  p5: "",
  p6: "",
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
