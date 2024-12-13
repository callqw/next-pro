declare namespace BASIC {
    type ImgList = {
        url: string
    }
    type Data = {
        author: string
        class: string
        content: string
        createTime: string
        description: string
        id: number
        imgList: ImgList[]
        keywords: string
        label: string
        pageId: number
        pv: number
        sendDate: string
        sendTime: string
        title: string
        userId: number
    }
    type LinkData = {
        createTime: string
        id: number
        linkName: string
        linkUrl: string
        userId: number
    }
    type Link = {
        data: LinkData[]
        msg: string;
        status: number
    }
    type Seo = {
        author: string
        description: string
        keywords: string
        title: string
    }

    type NewsData = {
        data: Data[] | null;
        date: { val: string };
        Link: Link
        Seo: Seo,
        err?: number
        msg?: string
    }
    type NewsDataErr = {

    }
    type NewsDataNew = NewsData | NewsDataErr
}
