window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    const img = new Image();
    const bird= new Image();
    const obsta= new Image();
    obsta.src='./images/obstacle_bottom.png'
    bird.src='./images/flappy.png';
    img.src = './images/bg.png';
    
    const canvas = document.getElementById('my-canvas');
    canvas.width=img.width
    canvas.height=img.height
    const ctx = canvas.getContext('2d');

    const backgroundImage = {
      img: img,
      x: 0,
      speed: -1,

      move: function() {
        this.x += this.speed;
        this.x %= canvas.width;
      },

      draw: function() {
        ctx.drawImage(this.img, this.x, 0);
        if (this.speed < 0) {
          ctx.drawImage(this.img, this.x + canvas.width, 0);
        } else {
          ctx.drawImage(this.img, this.x - this.img.width, 0);
        }
      },
    };
    const obstaculo={
      img: img,
      x: 0,
      speed: -1,

      move: function() {
        this.x += this.speed;
        this.x %= canvas.width;
      },

      draw: function() {
        ctx.drawImage(this.img, this.x, 0);
        if (this.speed < 0) {
          ctx.drawImage(this.img, this.x + canvas.width, 0);
        } else {
          ctx.drawImage(this.img, this.x - this.img.width, 0);
        }
      },

    }

    const birdImage={
      bird:bird,
      width:30,
      height:30,
      posX:300,
      posY:250,
      speedX:0,
      speedY:0,
      gravity:1.05,
      gravityspeed:0,

      draw: function() {
        ctx.drawImage(this.bird, this.posX, this.posY,this.width,this.height);
      },
      update: function(){
        this.bird.
        
        this.gravityspeed*=this.gravity
        // this.gravityspeed*=this.gravity
        this.posY+=this.gravityspeed
        
      }
    }

    function updateCanvas() {
      backgroundImage.move();
      birdImage.update();
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      backgroundImage.draw();
      birdImage.draw();

      requestAnimationFrame(updateCanvas);
    }
    canvas.addEventListener('click',()=>{
      birdImage.gravityspeed=1
      birdImage.gravityspeed*=-10
      setTimeout(()=>{
        birdImage.gravityspeed/=-10

      },100)
    

  
  })
    
    // start calling updateCanvas once the image is loaded
    img.onload = updateCanvas;
    

  }


};

