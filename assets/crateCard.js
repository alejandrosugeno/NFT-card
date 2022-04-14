export function createCard(item){
    
    const NFTcard=document.createElement('div')
    NFTcard.className="nftcard"


    const nftcard1nft=document.createElement('div')
    nftcard1nft.className="nftcard1"
    NFTcard.appendChild(nftcard1nft)


    const NFTimage=document.createElement('img')
    NFTimage.src=item.NFT_image//
    NFTimage.alt="NFT image"
    nftcard1nft.appendChild(NFTimage)


    const nftimg_top=document.createElement('div')
    nftimg_top.className="img_top"
    nftcard1nft.appendChild(nftimg_top)


    const NFTimageview=document.createElement('img')
    NFTimageview.src=item.NFT_image_view
    NFTimageview.alt="NFT image view"
    nftimg_top.appendChild(NFTimageview)


    const nftimg_bottom=document.createElement('div')
    nftimg_bottom.className="img_overlay"
    NFTcard.appendChild(nftimg_bottom)


    const nftbox_text=document.createElement('div')
    nftbox_text.className="box_text"
    nftimg_bottom.appendChild(nftbox_text)


    const title=document.createElement('p')
    title.textContent=item.title
    nftbox_text.appendChild(title)


    const description1 = document.createElement('p')
    description1.textContent=item.description1
    nftbox_text.appendChild(description1)


    const description2 = document.createElement('p')
    description2.textContent=item.description2
    nftbox_text.appendChild(description2)


    const flex=document.createElement('div')
    flex.className="flex"
    nftimg_bottom.appendChild(flex)


    const etherium=document.createElement('div')
    etherium.className="etherium"
    flex.appendChild(etherium)


    const ethereum_icon=document.createElement('img')
    ethereum_icon.src=item.ethereum_icon
    ethereum_icon.alt="ethereum icon"
    etherium.appendChild(ethereum_icon)


    const cost=document.createElement('span')
    cost.textContent=item.cost
    etherium.appendChild(cost)


    const dias=document.createElement('div')
  dias.className="dias"
    flex.appendChild(dias)


    const clock_icon=document.createElement('img')
    clock_icon.src=item.clock_icon
    clock_icon.alt="clock icon"
  dias.appendChild(clock_icon)


    const time=document.createElement('span')
    time.textContent=item.time
  dias.appendChild(time)


    const nftautor=document.createElement('div')
    nftautor.className="autor"
    nftimg_bottom.appendChild(nftautor)


    const avatar_image=document.createElement('img')
    avatar_image.src=item.avatar_image
    avatar_image.alt="avatar image"
    nftautor.appendChild(avatar_image)


    const creation=document.createElement('p')
    creation.textContent=item.creation
    nftautor.appendChild(creation)

    
    const autor=document.createElement('span')
    autor.textContent=item.autor
    creation.appendChild(autor)

    return NFTcard
}