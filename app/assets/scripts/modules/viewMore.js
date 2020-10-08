class ArticleDetail {
    constructor (item) {
        this.item = item
        this.contentText = item.innerText

        this.spanPreviewText = document.createElement('span')
        this.spanOriginText = document.createElement('span')
        this.btn = document.createElement('a')

        this.setViewMore()
    }

    setViewMore() {
        if (this.contentText.length > 300) {
            const previewText = this.contentText.slice(0, 300) + '...'

            this.spanOriginText.style.display = 'none'

            this.spanPreviewText.innerText = previewText
            this.spanOriginText.innerHTML = this.item.innerHTML
            this.btn.className = 'card__view-more'
            this.btn.innerText = 'View more'

            this.item.innerHTML = ''

            this.item.appendChild(this.spanPreviewText)
            this.item.appendChild(this.spanOriginText)
            this.item.appendChild(this.btn)

            this.showHideOriginText()
        }
    }

    showHideOriginText() {
        this.btn.addEventListener('click', () => {
            if (this.spanOriginText.style.display === 'none') {
                this.spanPreviewText.style.display = 'none'
                this.spanOriginText.style.display = 'inline'
                this.btn.innerText = 'View less'
            } else {
                this.spanPreviewText.style.display = 'inline'
                this.spanOriginText.style.display = 'none'
                this.btn.innerText = 'View more'
            }
        })
    }
}

export default class ViewMore {
    constructor () {
        this.cardContents = document.querySelectorAll('.card__text')
        this.setViewMore()
    }

    setViewMore() {
        this.cardContents.forEach((content) => new ArticleDetail(content))
    }

    // handleContent(content) {
    //     const contentText = content.innerText

    //     if (contentText.length > 300) {
    //         const spanShort = document.createElement('span')
    //         const spanLong = document.createElement('span')
    //         const dots = document.createElement('span')
    //         const btn = document.createElement('a')

    //         const shortText = contentText.slice(0, 300)
    //         const longText = content.innerHTML

    //         spanLong.style.display = 'none'
    //         dots.style.display = 'inline'
    //         btn.style.display = 'inline'
    //         btn.className = 'card__view-more'

    //         spanShort.innerHTML = shortText
    //         spanLong.innerHTML = longText
    //         dots.innerHTML = '<b>... </b>'
    //         btn.innerText = 'Xem thêm'

    //         content.innerHTML = ''

    //         content.appendChild(spanShort)
    //         content.appendChild(spanLong)
    //         content.appendChild(dots)
    //         content.appendChild(btn)

    //         btn.addEventListener('click', () => {
    //             if (dots.style.display === 'none') {
    //                 spanLong.style.display = 'none'
    //                 spanShort.style.display = 'inline'
    //                 dots.style.display = 'inline'
    //                 btn.innerHTML = 'Xem thêm'
    //             } else {
    //                 spanLong.style.display = 'inline'
    //                 spanShort.style.display = 'none'
    //                 dots.style.display = 'none'
    //                 btn.innerHTML = 'Thu gọn'
    //             }
    //         })
    //     }
    // }
}