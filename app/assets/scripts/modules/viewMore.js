const cardContents = document.querySelectorAll('.card__text');

cardContents.forEach((content) => {
    const contentText = content.innerText

    if (contentText.length > 300) {
        const spanShort = document.createElement('span')
        const spanLong = document.createElement('span')
        const dots = document.createElement('span')
        const btn = document.createElement('a')

        const shortText = contentText.slice(0, 300)
        const longText = content.innerHTML

        spanLong.style.display = 'none'
        dots.style.display = 'inline'
        btn.style.display = 'inline'
        btn.className = 'card__view-more'

        spanShort.innerHTML = shortText
        spanLong.innerHTML = longText
        dots.innerHTML = '<b>... </b>'
        btn.innerText = 'Xem thêm'

        content.innerHTML = ''

        content.appendChild(spanShort)
        content.appendChild(spanLong)
        content.appendChild(dots)
        content.appendChild(btn)

        btn.addEventListener('click', () => {
            if (dots.style.display === 'none') {
                spanLong.style.display = 'none'
                spanShort.style.display = 'inline'
                dots.style.display = 'inline'
                btn.innerHTML = 'Xem thêm'
            } else {
                spanLong.style.display = 'inline'
                spanShort.style.display = 'none'
                dots.style.display = 'none'
                btn.innerHTML = 'Thu gọn'
            }
        })


    }
})