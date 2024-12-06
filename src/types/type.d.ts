declare namespace Global {

    type MyGlobal = (x: number) => string;
    type CockProps<T, U> = (x: T) => U;
    type Data = ["p1", "p2", "p3"];
    //     type List<T,Data extends string[] = []> = {
    //        Data["length"] extends T ? '':''
    // }
}

declare interface DefaultProps {
    id: string;
    name: string;
}
