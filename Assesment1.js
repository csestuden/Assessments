const NFTs=[];


function mintNFT (name,eyecolor,id,bling) {
const NFT={
    "name":name,
    "eyecolor":eyecolor,
    "id":id,
    "bling":bling
    
    
}
  NFTs.push(NFT);
  console.log("minted:"+name);
}


function listNFTs () {
    for(let i=0;i<NFTs.length;i++){
        console.log(NFTs[i]);
    }

}

function getTotalSupply() {
    console.log(NFTs.length);

}
mintNFT("Harsh","Black","10721","Gold Ring");
listNFTs();
getTotalSupply();