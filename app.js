// const vidCards = [
//   {
//     name: "GeForce GTX 1650 SUPER OC Edition 4GB GDDR6",
//     link:
//       "https://www.bestbuy.com/site/gigabyte-nvidia-geforce-gtx-1650-super-oc-edition-4gb-gddr6-pci-express-3-0-graphics-card-black-gray/6409188.p?skuId=6409188",
//     price: 159.99,
//   },
//   {
//     name: "EVGA - SUPER SC ULTRA GAMING NVIDIA GeForce GTX 1650 SUPER 4GB",
//     link:
//       "https://www.bestbuy.com/site/evga-super-sc-ultra-gaming-nvidia-geforce-gtx-1650-super-4gb-gddr6-pci-express-3-0-graphics-card-black-silver/6412939.p?skuId=6412939",
//     price: 199.99,
//   },
// ];

Vue.component("vid-card-item", {
  props: ["name", "price", "link"],
  template: `
    <li class="vid-card-item">
      <h3 class="vid-card-name">{{ name }}</h3>
      <span class="vid-card-price">\${{ price }}</h3>
      <a class="vid-card-link" :href="link" target="_blank" rel="noopener">Open Link</a>
    </li>
  `,
});

const app = new Vue({
  el: "#app",
  data: {
    addPopupVisible: false,
    videoCardList: [],
    popupData: {
      cardName: "",
      cardPrice: 0,
      cardLink: "",
    },
  },
  methods: {
    showAddCardPopup() {
      this.addPopupVisible = true;
    },
    resetPopupData() {
      this.popupData.cardName = "";
      this.popupData.cardPrice = 0;
      this.popupData.cardLink = "";
    },
    saveToStorage() {
      window.localStorage.setItem(
        "videoCards",
        JSON.stringify(this.videoCardList)
      );
    },
    addVideoCard() {
      const { cardName, cardPrice, cardLink } = this.popupData;
      if (cardName === "" || cardLink === "") {
        return;
      }
      this.videoCardList.push({
        name: cardName,
        price: cardPrice,
        link: cardLink,
      });
      this.addPopupVisible = false;
      this.resetPopupData();
      this.saveToStorage();
      // reset the popupData
    },
    cancelAddVideoCard() {
      this.addPopupVisible = false;
      this.resetPopupData();
    },
    openAll() {
      const links = Array.from(
        document.getElementsByClassName("vid-card-link")
      );
      let delay = 0;

      links.forEach((link) => {
        setTimeout(() => link.click(), delay * 1000);
        delay += 3;
      });
    },
  },
  created() {
    const vidCards = JSON.parse(window.localStorage.getItem("videoCards"));
    if (vidCards) {
      vidCards.forEach((card) => this.videoCardList.push(card));
    }
  },
});
