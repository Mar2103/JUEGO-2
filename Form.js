class Form {
  constructor() {
    this.playButton = createButton("Jugar");
    //this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
    //this.titleImg.position(120, 50);
    this.playButton.position(width / 2 - 140, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  setElementsStyle() {
    //this.titleImg.class("gameTitle");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.playButton.hide();
      var message = `Juega?
      </br>si te atreves `;
      this.greeting.html(message);
    });
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
    lbt=new LBT();
    lbt.display();
    drawSprites();
  }
}
