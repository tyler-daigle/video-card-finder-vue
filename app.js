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
    addVideoCard() {
      const { cardName, cardPrice, cardLink } = this.popupData;
      console.log(`Adding ${cardName} ${cardPrice} ${cardLink}`);
      this.addPopupVisible = false;

      // reset the popupData
    },
    cancelAddVideoCard() {
      this.addPopupVisible = false;
    },
  },
});
